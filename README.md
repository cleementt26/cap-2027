# CAP 2027

Questionnaire de 30 questions, complément facultatif de 18 questions et comparaison transparente des positions documentées de 12 formations politiques. Site indépendant, sans recommandation de vote.

## ⚠️ Version provisoire — à actualiser avant l’élection

**Le site doit être mis à jour à l’approche de la présidentielle 2027, lorsque les partis auront fixé leurs ambitions, leurs programmes et leurs candidats.** Les documents historiques ne sont pas tous des engagements pour 2027. Dernière vérification du corpus du QCM : 1er octobre 2026. Dernière mise à jour des actualités et ajout de candidature : 6 octobre 2026. Migration GitHub : 2 octobre 2026.

L’actualisation est manuelle : vérifier les candidatures, programmes, sources, dates, actualités et décisions judiciaires, en distinguant faits établis, annonces et controverses. Ne pas attribuer automatiquement une position de parti à un candidat.

## Hébergement

Site : https://cleementt26.github.io/cap-2027/

GitHub Pages publie le dossier `docs/` de la branche `main`. Aucun serveur applicatif ni compilation n’est nécessaire. Les réponses au questionnaire restent dans la mémoire du navigateur ; le site ne les envoie pas à un serveur.

## Mettre à jour

1. Modifier le corpus et les sources dans `editorial.json`, conserver les dates de vérification et les crédits des images.
2. Lancer `node scripts/update-data.cjs` pour régénérer `docs/data.js`.
3. Lancer `node tests/comparison.test.cjs`.
4. Adapter au besoin `docs/app.js`, `docs/comparison.js`, `docs/index.html` et `docs/style.css`.
5. Documenter les changements dans `EDITORIAL.md`, puis pousser la branche `main`. GitHub Pages republie le site.

Une position absente reste inconnue. Les fourchettes expriment les accords possibles compte tenu de ces données manquantes ; ce ne sont pas des probabilités de vote ni des intervalles statistiques. Tous les partis sont comparés sur les mêmes réponses, avec un poids égal entre les thèmes actifs.

## Images

Les logos et portraits sont accompagnés de leurs crédits dans le corpus et sur le site. Leur présence n’implique aucune affiliation ni approbation. Les droits des marques et des images appartiennent à leurs titulaires.
