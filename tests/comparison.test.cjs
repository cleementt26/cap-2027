const assert=require('node:assert/strict');
const C=require('../docs/comparison.js'),D=require('../editorial.json');
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-10,`${a} ≠ ${b}`);
const f={questions:[{id:'a'},{id:'b'},{id:'c'},{id:'d'}],themes:[{id:'x',name:'X',questions:['a','b','c']},{id:'y',name:'Y',questions:['d']}]};
const p={positions:{a:{value:1},b:{value:-1},c:{value:null},d:{value:1}}},answers=[1,1,1,1];
// Three questions in X have the same combined influence as one in Y.
let r=C.fair(f,p,answers,[1,1,1,1],[0,1,2,3]);close(r.lower,2/3);close(r.upper,5/6);close(r.documented,5/6);assert.deepEqual([r.yes,r.no,r.missing,r.alternative],[2,1,1,1]);
// Priorities apply inside a theme, not to the influence of an entire theme.
r=C.fair(f,p,answers,[2,1,1,1],[0,1,2,3]);close(r.lower,3/4);close(r.upper,7/8);
// Unknown does not create an agreement, disagreement, or arbitrary midpoint.
r=C.fair(f,{positions:{}},answers,[1,1,1,1],[0,1,2,3]);assert.equal(r.lower,0);assert.equal(r.upper,1);assert.equal(r.documented,0);assert.equal(r.no,0);
// All parties use identical denominators, including missing whole themes.
r=C.fair(f,{positions:{d:{value:1}}},answers,[1,1,1,1],[0,1,2,3]);close(r.lower,.5);assert.equal(r.upper,1);close(r.documented,.5);
// All fully known agreements collapse to 100%; all oppositions to 0%.
const complete={positions:Object.fromEntries(f.questions.map(q=>[q.id,{value:1}]))};r=C.fair(f,complete,answers,[1,1,1,1],[0,1,2,3]);assert.equal(r.lower,1);assert.equal(r.upper,1);
r=C.fair(f,complete,answers.map(()=>-1),[1,1,1,1],[0,1,2,3]);assert.equal(r.lower,0);assert.equal(r.upper,0);
// Neutral and unknown user answers are excluded for everyone; no answers => no score.
r=C.fair(f,p,[0,null,undefined,1],[1,1,1,1],[0,1,2,3]);assert.equal(r.themes.length,1);assert.equal(r.lower,1);assert.equal(r.answered,1);
r=C.fair(f,p,[0,null,undefined,null],[1,1,1,1],[0,1,2,3]);assert.equal(r.lower,null);assert.equal(r.upper,null);
// More answers on the same theme do not increase its combined global weight.
const expanded=structuredClone(f);expanded.questions.push({id:'e'});expanded.themes[0].questions.push('e');const p2={positions:{...p.positions,e:{value:1}}};r=C.fair(expanded,p2,[...answers,1],[1,1,1,1,1],[0,1,2,3,4]);close(r.lower,.75);
// A confirmed order requires strict non-overlap; boundaries and ties are not ranked.
let rs=C.distinguish([{party:{id:'a'},score:{lower:.8,upper:1}},{party:{id:'b'},score:{lower:.2,upper:.6}},{party:{id:'c'},score:{lower:0,upper:1}}]);assert.deepEqual(rs[0].ahead,['b']);assert.deepEqual(rs[2].ahead,[]);
rs=C.distinguish([{party:{id:'a'},score:{lower:.6,upper:1}},{party:{id:'b'},score:{lower:.2,upper:.6}}]);assert.deepEqual(rs[0].ahead,[]);
// Existing 30-question and extra-question scopes remain independent.
assert.equal(D.questions.length,48);assert.equal(new Set(D.questions.map(q=>q.id)).size,48);assert.equal(D.themes.flatMap(t=>t.questions).length,48);
for(const t of D.themes)assert.equal(t.questions.filter(id=>D.questions.find(q=>q.id===id).level==='extra').length,3);
const base=Array.from({length:30},(_,i)=>i),extra=Array.from({length:18},(_,i)=>i+30),weights=Array(48).fill(1),user=[...base.map(()=>1),...extra.map(()=>undefined)];
assert.equal(C.fair(D,D.parties[0],user,weights,base).answered,30);assert.equal(C.fair(D,D.parties[0],user,weights,extra).answered,0);
user[30]=1;assert.equal(C.fair(D,D.parties[0],user,weights,base).answered,30);assert.equal(C.fair(D,D.parties[0],user,weights,extra).answered,1);
assert.deepEqual(C.indices(D,{theme:'justice',priorityOnly:true,weights:weights.map((_,i)=>i===20?2:1)}),[20]);
// Source integrity and all twelve parties present even when data is sparse.
for(const p of D.parties){for(const [id,pos] of Object.entries(p.positions)){assert.ok(D.questions.some(q=>q.id===id));assert.ok(D.sources[pos.source]);assert.ok(pos.value===null||C.binary(pos.value));}r=C.fair(D,p,user,weights,base);assert.ok(r.lower>=0&&r.upper<=1+1e-10&&r.upper>=r.lower);assert.equal(r.answered,30);}
assert.equal(D.parties.length,12);
// The fictional ecology test gets full agreement without assigning unknown party views.
const eco=D.parties.find(p=>p.id==='eco'),ecoa=D.questions.map(q=>C.position(eco.positions[q.id])?eco.positions[q.id].value:null);r=C.fair(D,eco,ecoa,weights,base);assert.equal(r.lower,1);assert.equal(r.upper,1);assert.equal(r.compared,18);
console.log('Fair comparison verified: equal themes, identical denominators, weighted priorities, unknown bounds, strict ordering, 30+18 scopes, 12 parties and source integrity.');
