# CAP 2027 : mises à jour

Le fichier editorial.json est la source du corpus. Après une modification, régénérer docs/data.js avec `window.CAP_DATA = ` suivi du JSON et d'un point-virgule. Les autres fichiers de docs constituent le site statique.

## Processus
1. Vérifier la date, les représentants et les candidatures dans des sources officielles. Distinguer annonce, investiture et validation par le Conseil constitutionnel.
2. Pour les positions : citer le document précis et son année. Ne pas attribuer la position d'un autre parti. Ne jamais convertir une absence de documentation en opposition. Réexaminer les positions de coalition à la publication des programmes 2027.
3. Actualité : enregistrer événement, date, date de vérification, catégorie, résumé factuel et URL. Pour une controverse, inclure la réponse des intéressés et le stade judiciaire. Exclure les rumeurs. Aucune controverse ne modifie automatiquement les positions du QCM.
4. Incrémenter version, updated et tenir le journal ci-dessous. Les dates visibles sont alimentées par le corpus ; conserver les dates de publication et de relecture séparément.
5. Vérifier les calculs, les liens et les images, puis publier le dossier docs sur GitHub Pages en poussant main. Le dépôt GitHub est la référence depuis le 2 octobre ; ne pas republier l’ancien projet Sites.

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

## Version 5.1 · 6 octobre 2026

Mise à jour limitée aux faits documentés. Ajout de Mira Markovic (Parti animaliste), présentée le 2 octobre, avec lien au communiqué officiel et initiales faute de portrait à licence vérifiée. Ajout d’actualités : appel de Gabriel Attal à une coalition le 4 octobre ; relance PS du 2 octobre et calendrier officiel de la primaire Choisir 2027 ; règle d’or budgétaire proposée par Marine Le Pen dans sa tribune du 1er octobre, selon LCP le 2. Les annonces restent distinctes d’un accord, d’une mesure adoptée ou d’une validation officielle de candidature.

Correction de l’entrée Écologistes : la page Projet 2027 fournit un programme de 557 mesures, dont le PDF porte juillet 2026. La disponibilité est vérifiée le 6 octobre ; aucun lancement en octobre n’est inventé. Document ajouté aux références sans recoder les réponses du QCM.

Les dates de mise à jour éditoriale et de vérification des actualités sont affichées séparément de la date du corpus de comparaison (1er octobre). Les questions, positions et calculs restent inchangés.


## Version 6.0 · 25 novembre 2026

Revue générale des 47 profils suivis, des douze formations, des 48 questions et des références. Les pages effectivement relues portent leur date de contrôle ; les anciennes sources non remplacées gardent leur année. L’absence de nouveauté confirmée ne vaut pas preuve d’absence d’évolution. Les programmes et statuts restent provisoires, la liste officielle relevant du Conseil constitutionnel.

### Candidatures et campagne

- Primaire sociale-démocrate : [résultat annoncé le 11 octobre](https://lcp.fr/actualites/primaire-socialiste-vainqueur-des-le-1er-tour-raphael-glucksmann-sera-le-candidat-de-la), Glucksmann désigné dès le premier tour, Faure, Royal, Guedj et Maurel non désignés. Le PS garde Olivier Faure comme représentant et indique son soutien à Glucksmann. Aucun pourcentage publié en raison d’écarts entre sources.
- [Villepin déclaré le 20 novembre](https://villepin.fr/), [Ruffin retiré le 21 sans soutien formel dans son annonce](https://lcp.fr/actualites/francois-ruffin-se-retire-de-la-presidentielle-2027-sans-soutenir-aucun-des-candidats-de). Tondelier reste candidate pendant la discussion de coalition et avant le vote militant de décembre. Soutien personnel d’Autain distinct de la décision de L’Après ; soutien de Génération.s officialisé le 23 novembre.
- Six nouvelles fiches : annonces de Platret (8 octobre), Polony (14 octobre), Riner (9 novembre), et correction d’omissions plus anciennes : Labib (17 juin), Kazib (1er juin), Branco (19 décembre 2025). Ces corrections ne sont pas présentées comme de nouvelles déclarations de novembre. Cazeneuve reste non officialisé faute de nouvelle déclaration personnelle datée établie. Le Maire réaffirme ne pas être candidat dans son entretien du 15 novembre.
- Bardella réélu à la présidence du RN au congrès d’octobre ; candidature et présidence de parti distinguées. La fiche Le Pen décrit le pourvoi en cassation et l’étape annoncée pour le 16 décembre sans trancher les analyses divergentes sur l’éligibilité. La primaire de la droite et du centre reste une discussion, pas une procédure actée.
- Cinq portraits ajoutés avec crédits et licences : Platret, Polony, Riner, Kazib, Branco. Initiales pour Labib faute de licence photographique vérifiée.

### Documents et questionnaire

- [L’Avenir en commun](https://lafranceinsoumise.fr/2026/11/02/avenir-en-commun-nouvelle-france/) : édition publiée le 6 novembre, chapitres exacts reliés aux positions. Projet socialiste adopté en juillet, programme écologiste de juillet et livret travail de novembre relus. Ces textes plus anciens retrouvés ne sont pas présentés comme des publications nouvelles. Sources de campagne LO de novembre et propositions DLF relues. PCF : engagements NFP 2024 conservés lorsqu’aucun nouveau document central équivalent n’est établi ; source salariale locale identifiée.
- Renaissance : conventions propres au parti de 2025 identifiées séparément de la coalition Ensemble 2024. LR : propositions actuelles relues ; peines minimales sans périmètre explicite de récidive exclues de la réponse binaire. RN : discours et mesures du site relus, corpus législatif 2024 conservé avec son année. UPR : orientations actuelles distinguées du programme 2022, programme 2027 encore en préparation.
- Programme personnel d’Édouard Philippe (premier volume du 18 novembre) et priorités personnelles de Zemmour accessibles sur leurs fiches, avec quelques positions exactes documentées séparément. Aucun transfert automatique de ces positions au QCM des partis.
- Question SMIC clarifiée : minimum de 1 600 € net à temps plein, permettant de comparer les objectifs nets supérieurs sans prétendre à une identité des montants ou des financements. Les 2 000 € brut des Écologistes restent non comparables ; aucune conversion estimée. La revendication LO et la source locale PCF sont qualifiées. Cette révision est datée dans le corpus. Aucune ancienne réponse persistée n’est réinterprétée : le site ne conserve les réponses qu’en mémoire et recharge le corpus avec un questionnaire vide.
- Pour les autres questions, les différences de mécanisme, périmètre ou seuil restent exclues du calcul. CSG fusionnée et suppression partielle du 49.3 distinguées des propositions exactes. Le calcul conserve les mêmes dénominateurs et un poids égal des thèmes pour tous les partis.
- Retrait de la position industrielle Reconquête auparavant attribuée à une page 2022 qui redirige maintenant vers des priorités sans cette mesure. Suppression des références inutilisées et indisponibles ; appel d’inscription à la primaire remplacé par son résultat. Actualités précédentes regroupées en archives.

### Présentation et vérifications

Dates du scrutin ajoutées avec [source Arcom](https://www.arcom.fr/temps-parole/election). Sources, repères et dates de relecture visibles dans les fiches. Les documents individuels restent séparés de ceux des formations. Le bandeau d’actualisation avant l’élection reste affiché. Publication manuelle, aucun suivi automatique installé.

Export du corpus contrôlé, identifiants et références validés, images vérifiées, tests de comparaison réussis. Contrôle dans le navigateur du questionnaire, des 12 résultats et du recalcul après une réponse complémentaire, des filtres de candidats, des fiches et de l’actualité. Les liens bloqués par une protection d’accès ne sont pas assimilés automatiquement à des liens supprimés.
