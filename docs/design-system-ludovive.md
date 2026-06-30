# Design System Ludovive

Objectif: donner a Ludovive une interface de table compacte, lisible sur telephone et reutilisable par tous les modules de jeu.

## Socle

- `brandMark`: marque courte et stable de l'app.
- `item`, `section`, `pill`: cartes, panneaux et etiquettes de base.
- `resourceWallet` et `resourceChip`: affichage compact des ressources.
- `actionCard`, `actionHeader`, `actionIcon`: actions jouables, familles de mecanique et icones.
- `timerGauge` et `phaseTrack`: temporalite de tour et de phase.
- `gestureCard` et `gestureArt`: consigne gestuelle avec mini-illustration de telephones.

## Regles d'ergonomie

- Le joueur voit d'abord phase, role, ressources, resolution urgente et actions disponibles.
- Le meneur garde la vision globale, mais les controles restent compacts.
- Les boutons sont des secours; l'action ideale reste le geste de table.
- Les icones module sont acceptees seulement si elles sont courtes et lisibles; sinon Ludovive fournit un fallback.
- Les gestes affichent toujours proximite, intention et fallback tactile.

## Gestes MVP

- `touch-phones`: telephones en contact.
- `pour-liquid`: incliner vers l'autre joueur pour pousser des ressources.
- `palm-cover`: couvrir l'ecran pour une transaction discrete.
- `ballot-drop`: poser le telephone comme un bulletin.
- `strike-phone`: attaque courte au telephone.
- `parry-phone`: parade au telephone.
- `phone-face-down`, `tilt-phone-forward`, `slow-phone-arc`: gestes de poste pour les jeux d'equipage.

## Limite actuelle

Le moteur sait recevoir un evenement normalise `gesture.detected` et le relier a une action. La detection Android reelle par NFC, BLE, Nearby Connections, accelerometre ou gyroscope reste un sprint technique separe.
