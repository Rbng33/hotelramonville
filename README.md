# Comfort Hotel Ramonville — site vitrine

Site vitrine one-page réalisé en React + Vite, projet de démonstration
(non affilié à Choice Hotels).

## Structure du projet

```
comfort-hotel-site/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx           # point d'entrée React
│   ├── App.jsx             # assemble toutes les sections
│   ├── index.css           # feuille de style complète
│   ├── data.js              # contenu du site (chambres, salons, avis...)
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx         # + bloc "chiffres clés"
│       ├── Rooms.jsx
│       ├── Restaurant.jsx
│       ├── Seminars.jsx
│       ├── Access.jsx
│       ├── Reviews.jsx
│       ├── Contact.jsx
│       └── Illustrations.jsx  # illustrations SVG (façade, logo)
```

## Lancer le projet en local

Prérequis : [Node.js](https://nodejs.org/) 18 ou plus récent.

```bash
npm install
npm run dev
```

Le site est alors accessible sur http://localhost:5173

## Générer une version de production

```bash
npm run build
```

Le résultat est généré dans le dossier `dist/`, prêt à être déployé sur
n'importe quel hébergeur statique (Netlify, Vercel, GitHub Pages, OVH, etc.).

## Personnaliser le contenu

Toutes les informations affichées (chambres, salons, avis, adresse,
téléphone) sont centralisées dans `src/data.js` — c'est le seul fichier à
modifier pour changer le texte du site.

Les couleurs et la typographie sont définies en haut de `src/index.css`
(variables `--brick`, `--cream`, `--ink`, etc.).

## À faire avant une mise en ligne réelle

- Remplacer les avis de démonstration par de vrais avis vérifiés
- Vérifier les capacités et noms réels des salons de séminaire
- Intégrer une vraie carte (Google Maps ou OpenStreetMap) dans la section Accès
- Connecter le formulaire de contact à un service d'envoi d'e-mails
- Ajouter un lien vers le véritable moteur de réservation
