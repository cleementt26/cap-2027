(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.CAP_COMPARE=factory();})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const binary=v=>v===1||v===-1;
  const position=p=>p&&binary(p.value);
  const weight=(weights,i)=>weights[i]===2?2:1;
  function indices(data,view={}){const theme=data.themes.find(t=>t.id===view.theme);return data.questions.map((q,i)=>i).filter(i=>(!theme||theme.questions.includes(data.questions[i].id))&&(!view.priorityOnly||view.weights?.[i]===2));}
  function measure(data,party,answers,weights,scope){const r={yes:0,no:0,missing:0,alternative:0,neutral:0,answered:0,compared:0,answerWeight:0,total:0,agree:0};for(const i of scope){const a=answers[i];if(!binary(a)){r.neutral++;continue;}r.answered++;r.answerWeight+=weight(weights,i);const p=party.positions[data.questions[i].id];if(!position(p)){r.missing++;if(p)r.alternative++;continue;}r.compared++;r.total+=weight(weights,i);if(a===p.value){r.yes++;r.agree+=weight(weights,i);}else r.no++;}r.rate=r.total?r.agree/r.total:null;r.coverage=r.answered?r.compared/r.answered:0;r.weightedCoverage=r.answerWeight?r.total/r.answerWeight:0;return r;}
  // Every party uses the same answered questions and the same theme denominators.
  // Unknown positions widen an interval; they never receive an assumed answer.
  function fair(data,party,answers,weights,scope){
    const themes=data.themes.map(t=>{const ids=scope.filter(i=>t.questions.includes(data.questions[i].id)&&binary(answers[i]));if(!ids.length)return null;const m=measure(data,party,answers,weights,ids);return{id:t.id,name:t.name,...m,lower:m.agree/m.answerWeight,upper:(m.agree+m.answerWeight-m.total)/m.answerWeight,documented:m.total/m.answerWeight};}).filter(Boolean);
    const raw=measure(data,party,answers,weights,scope);
    const mean=k=>themes.length?themes.reduce((n,t)=>n+t[k],0)/themes.length:null;
    return{...raw,themes,lower:mean('lower'),upper:mean('upper'),documented:mean('documented')};
  }
  function distinguish(rows){return rows.map(r=>({...r,ahead:rows.filter(x=>r.score.lower!==null&&x.score.upper!==null&&r.score.lower>x.score.upper+1e-10).map(x=>x.party.id)}));}

  return{binary,position,indices,measure,fair,distinguish};
});
