# Sprint UI/Ergo MVP

Objectif: rendre Ludovive plus lisible et plus utilisable a table, sans enfermer l'interface dans un jeu particulier.

## Intention

L'interface doit servir la situation physique:

- le joueur voit immediatement sa phase, son role, ses ressources et ses actions possibles;
- le meneur voit l'etat de table, les urgences, les ressources, les scores et les resolutions;
- les gestes de table restent premiers, les boutons restent des secours;
- chaque module peut porter son style par `uiTheme` et `soundboard`.

## Livrables

- `ergoNowBoard`: resume MJ de phase, appareils, participants et resolutions.
- `resourceWallet`: portefeuille visuel reutilisable pour ressources joueur/MJ.
- `actionHeader`: carte d'action avec famille de mecanique et consigne de geste.
- `resolutionFocus`: carte de resolution plus lisible, avec deadline et votes de petition quand disponibles.
- Conservation du debug JSON, mais hors du flux principal.

## Definition of Done

- Les composants apparaissent dans le dashboard et l'app participant.
- Les actions disponibles restent filtrees par phase, role et etat de resolution.
- Les ressources ne sont plus affichees seulement comme texte brut.
- Les tests serveur valident le rendu des principaux composants.
- Aucun changement de regle n'est introduit par la passe UI.
