# Wolfpack Rules Notes

Wolfpack est le module Ludovive pour tester les jeux d'equipage coordonne: chaque telephone represente un poste, chaque joueur a une information partielle, et la victoire depend de la coordination en temps limite.

Le module est original. Il s'inspire du plaisir des jeux de sous-marin a postes synchronises, sans reprendre les regles d'un jeu existant.

## Objectif Du Module

Wolfpack doit prouver que Ludovive peut gerer:

- plusieurs postes asymetriques dans une meme equipe;
- des actions simultanees ou quasi simultanees;
- une vue capitaine/hote;
- des ressources partagees;
- des informations partielles;
- des alertes sonores;
- des gestes de telephone lies a des postes;
- un mode cooperatif et un mode duel.

Ce module sert aussi de patron pour d'autres jeux de coordination: passerelle spatiale, braquage, cellule de crise, expedition, salle de controle, navire, hopital d'urgence.

## Principe De Jeu

Les joueurs incarnent l'equipage d'un sous-marin pendant la Seconde Guerre mondiale.

Selon le scenario, ils doivent:

- traquer un convoi;
- echapper a des escorteurs;
- localiser un sous-marin ennemi;
- transmettre un renseignement;
- survivre a une zone dangereuse;
- ou affronter un second equipage.

Le jeu est joue en phases courtes. Les joueurs parlent entre eux en direct, mais Ludovive:

- affiche les actions disponibles selon le poste;
- enregistre les ordres;
- applique les couts simples;
- garde les compteurs;
- signale les resolutions;
- filtre les informations par poste;
- donne au capitaine une vue de commandement.

## Roles

### Capitaine

Le capitaine est l'hote technique par defaut.

Responsabilites:

- garder le rythme;
- annoncer les priorites;
- autoriser le tir;
- ordonner une plongee d'urgence;
- arbitrer les choix tactiques.

Important: le capitaine n'est pas un MJ omnipotent. Il joue avec l'equipage.

Actions actuelles:

- donner un ordre;
- autoriser le tir;
- plongee d'urgence.

### Pilote

Responsabilites:

- changer de profondeur;
- changer de cap;
- effectuer une manoeuvre evasive;
- maintenir la position tactique.

Gestes:

- incliner le telephone vers l'avant pour changer de profondeur;
- incliner sur le cote pour changer de cap;
- secouer pour eviter.

### Machiniste

Responsabilites:

- gerer les batteries;
- reduire le bruit;
- reparer;
- rerouter l'energie.

Actions actuelles:

- silence machine;
- repartir l'energie;
- reparer une avarie.

### Operateur Sonar

Responsabilites:

- ecouter;
- balayer une zone;
- classifier un contact;
- donner une distance ou direction probable.

Le sonar ne donne pas toujours une verite complete. Il produit des indices exploitables.

Actions actuelles:

- balayage sonar;
- classifier le contact;
- ecoute passive.

### Officier Torpilles

Responsabilites:

- armer une torpille;
- calculer une solution de tir;
- tirer si le capitaine autorise.

Le tir ne doit pas etre un simple bouton. Il doit arriver apres coordination entre sonar, pilote, torpilles et capitaine.

Actions actuelles:

- armer une torpille;
- calculer une solution;
- tirer.

### Radio

Responsabilites:

- decoder les messages;
- intercepter;
- emettre au risque d'etre detecte.

Le role radio peut etre fusionne avec sonar dans une petite table.

Actions actuelles:

- decoder un message;
- emission breve;
- intercepter un signal.

## Ressources

### Coque

Etat structurel du sous-marin.

A 0, le sous-marin est neutralise ou doit abandonner.

### Oxygene

Pression de temps en plongee.

Pas encore automatiquement consomme dans le MVP, mais le compteur existe pour les scenarios.

### Batteries

Energie disponible pour manoeuvres, sonar, silence machine, reparations.

La batterie est le carburant tactique principal.

### Bruit

Plus le bruit monte, plus l'ennemi detecte le sous-marin.

Silence machine reduit ce compteur.

### Torpilles

Munitions lourdes.

Une torpille chargee est un statut; les torpilles restantes sont une ressource.

### Solution De Tir

Preparation tactique produite par l'officier torpilles.

Elle servira ensuite dans l'attaque contestee.

### Renseignements

Informations privees ou partielles.

Le capitaine, le sonar et la radio peuvent commencer avec un renseignement.

## Phases

### Briefing

Mise en place de la mission.

Actions typiques:

- lire l'objectif;
- decoder un message initial;
- repartir les postes;
- regler les compteurs.

### Navigation Silencieuse

Phase de placement et d'approche.

Actions typiques:

- changer de profondeur;
- changer de cap;
- reduire le bruit.

### Contact Sonar

Phase d'information.

Actions typiques:

- balayage sonar;
- ecoute passive;
- classification;
- interception radio.

### Passe D'attaque

Phase courte, tendue.

Actions typiques:

- autorisation du capitaine;
- manoeuvre evasive;
- armer une torpille;
- calculer une solution;
- tirer.

### Avaries

Phase de recuperation.

Actions typiques:

- reparer la coque;
- rerouter l'energie;
- decider s'il faut continuer ou rompre le contact.

## Modes De Jeu

### Mode Cooperatif

Un seul equipage joue contre une menace geree par le scenario ou par l'hote.

Exemples:

- convoi a localiser;
- escorteurs qui grenadent;
- message a intercepter puis rapporter;
- sous-marin ennemi abstrait.

Ce mode est le plus simple pour un premier test.

### Mode Duel

Deux equipages jouent en miroir.

Chaque equipe a:

- son capitaine;
- ses postes;
- ses compteurs;
- ses informations filtrees;
- ses tirs et esquives.

Le dashboard hote doit alors separer les vues par equipe.

Ce mode demande plus de moteur et n'est pas le premier MVP.

## Gestes

Les gestes doivent aider la table a rester physique:

- `hold-phone-up`: ordre du capitaine, emission radio;
- `tilt-phone-forward`: plongee ou changement de profondeur;
- `tilt-phone-side`: changement de cap;
- `phone-face-down`: silence machine ou ecoute passive;
- `slow-phone-arc`: balayage sonar ou calcul;
- `slide-resource-to-edge`: charger une torpille ou transferer de l'energie;
- `strike-phone`: tir torpille;
- `shake-phone`: manoeuvre evasive;
- `tap-and-hold`: reparation ou decodage.

Dans le navigateur MVP, ces gestes restent des labels ou des boutons. Sur Android, ils deviendront des signaux capteurs.

## Ce Que Ludovive Doit Automatiser

Priorite MVP:

- rejoindre une session;
- assigner les postes;
- filtrer les actions par poste et par phase;
- afficher les ressources;
- appliquer les couts simples;
- enregistrer les ordres et messages;
- ouvrir une resolution de tir;
- afficher les alertes;
- garder l'audit.

Plus tard:

- vrai graphe de carte tactique;
- double equipage en duel;
- sonar incertain avec bruit et distance;
- IA de menace;
- resolution automatisee torpille contre evasion;
- avaries par systeme;
- sons reels.

## Scenario De Test Court

Objectif: localiser un convoi, faire une passe d'attaque, survivre a la riposte.

Joueurs minimum:

- capitaine;
- pilote;
- machiniste;
- sonar;
- torpilles.

Deroule:

1. Briefing: le capitaine lit l'objectif.
2. Navigation silencieuse: pilote change la profondeur, machiniste reduit le bruit.
3. Contact sonar: sonar fait un balayage, radio peut intercepter.
4. Passe d'attaque: torpilles arme, calcule une solution, capitaine autorise, tir.
5. Avaries: si la riposte arrive, machiniste repare.
6. Debrief: regarder le dashboard, les ressources, l'audit et les moments de friction.

Pass criteria:

- chaque poste a compris quoi faire sans chercher longtemps;
- le capitaine voit l'etat global;
- au moins une action par poste est jouee;
- un tir ouvre une resolution;
- les joueurs parlent entre eux au lieu de regarder longtemps leur ecran.

## Points A Trancher

- Les ressources partagees doivent-elles etre portees par un participant "sous-marin" plutot que par les joueurs?
- Le capitaine doit-il pouvoir declencher des actions au nom de l'equipage?
- Le mode duel doit-il etre prioritaire ou rester apres le MVP?
- Le sonar doit-il donner des indices textuels, une mini-carte, ou les deux?
- Les avaries doivent-elles toucher des systemes precis ou seulement la coque?

