# CAP 2027 : mises à jour

Le fichier editorial.json est la source du corpus. Après une modification, régénérer docs/data.js avec `window.CAP_DATA = ` suivi du JSON et d'un point-virgule. Les autres fichiers de docs constituent le site statique.

## Processus
1. Vérifier la date, les représentants et les candidatures dans des sources officielles. Distinguer annonce, investiture et validation par le Conseil constitutionnel.
2. Pour les positions : citer le document précis et son année. Ne pas attribuer la position d'un autre parti. Ne jamais convertir une absence de documentation en opposition. Réexaminer les positions de coalition à la publication des programmes 2027.
3. Actualité : enregistrer événement, date, date de vérification, catégorie, résumé factuel et URL. Pour une controverse, inclure la réponse des intéressés et le stade judiciaire. Exclure les rumeurs. Aucune controverse ne modifie automatiquement les positions du QCM.
4. Incrémenter version, updated et tenir le journal ci-dessous. Synchroniser la date visible dans app.js.
5. Vérifier les calculs, les liens et les images, puis republier le même Site à partir de .openai/hosting.json. Préserver son audience.

Les réponses sont uniquement conservées en mémoire dans l'onglet. Aucun score global de candidat, aucun classement de vote. Un taux partiel doit afficher son dénominateur.

## Journal
- 2026-10-01 : version 1.0, 8 propositions, 9 formations. Corpus historique 2021–2026, sélection non exhaustive. Actualité manuelle ; aucune automation installée.

## Version 2.0 — 1 octobre 2026
30 questions ; 40 profils avec statuts distincts et 29 portraits supplémentaires. Classification LFI contextualisée selon la décision du Conseil d’État du 27 février 2026. Pourcentages uniquement à partir de 5 sujets comparables. Aucune attribution automatique des positions de parti à un candidat. Sources et crédits dans editorial.json.
Le corpus comparatif comprend 12 formations. Propositions LR actualisées selon leur page officielle consultée le 1 octobre 2026.

## Version 3.0 — 1 octobre 2026
- Comparaisons réparties en six thèmes ; filtre sur les sujets prioritaires.
- Deux mesures séparées : accord sur les positions connues et couverture des avis tranchés.
- Tri initial par couverture. Classement par accord uniquement sur un socle commun à toutes les formations : au moins 10 questions, 70 % du nombre et du poids des avis, quatre thèmes pour le global ; deux questions et 70 % sur un thème. Seuils éditoriaux, pas validation scientifique. Égalités conservées.
- Positions comparables : 101 à 116. Huit formulations différentes présentées avec leur source et exclues du score. Nouvelles sources Ensemble 2024, LR 2026, DLF, LO 2025/2026 et Reconquête 2022. Les corpus historiques ne sont pas assimilés à des programmes 2027.
- À la demande de l’utilisateur, retrait des étiquettes idéologiques des cartes et fiches ; noms de formations et rôles conservés.
- Vérification des calculs et de l’absence de podium artificiel dans tests/comparison.test.cjs.

## Version 4.0 · 1er octobre 2026

Parcours initial conservé à 30 questions. Complément facultatif de 18 propositions distinctes (trois par thème), avec choix libre des thèmes, retour anticipé et questions passées exclues. Les réponses initiales sont conservées en mémoire. Résultats sur le périmètre initial ou enrichi ; bilan des nouveaux accords/désaccords/non-comparables par formation. Aucun gain de précision statistique n’est revendiqué. Sources relues : contrats NFP et Ensemble 2024, projets DLF justice/immigration/défense consultés en 2026. Les engagements de coalition sont explicitement identifiés, sans attribution automatique aux candidats. Aucune opposition n’est inférée du silence d’un programme.

## Version 5.0 · 1er octobre 2026

Résultats remplacés par des fourchettes d’accord sur un périmètre identique pour les douze formations. Les thèmes actifs contribuent à parts égales ; la priorité double le poids d’une question dans son thème. Bornes : accords établis / toutes les réponses tranchées du thème, puis ajout des poids inconnus à la borne haute ; moyenne des thèmes. Aucune position inconnue n’est supposée. Toutes les fiches restent visibles, par ordre alphabétique par défaut. Les fourchettes qui se chevauchent ne sont pas classées ; seule une borne basse strictement supérieure à la borne haute d’une autre fiche autorise une différence signalée. Suppression du message bloquant fondé sur l’intersection des douze corpus. Cette équité de calcul ne corrige pas les limites de sélection des questions et sources, qui restent explicites.

## 2 octobre 2026 — Hébergement GitHub Pages

Bandeau permanent signalant le caractère provisoire du site et la nécessité d’une actualisation à l’approche de l’élection, lorsque les partis auront fixé leurs ambitions, programmes et candidatures. L’actualisation reste éditoriale et manuelle.
