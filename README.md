# Archivo Mac

Site Astro pour Archivo Mac, en espagnol, prêt pour Vercel.

## Commandes

```bash
npm install
npm run dev
npm run build
npm test
```

## Modifier les informations

- Nom, e-mail, ville, horaires et WhatsApp : `src/config/site.ts`
- Services : `src/data/services.ts`
- Machines, prix, statuts, références et images : `src/data/products.ts`
- FAQ : `src/data/faqs.ts`
- Témoignages provisoires : `src/data/testimonials.ts`
- SEO : `src/config/site.ts`

## Images

Place les fichiers dans `public/images`. Chaque machine utilise un duo `.webp` et `.avif` dans `src/data/products.ts`.

## Déploiement Vercel

Importer le repo dans Vercel. Framework preset : Astro. Build command : `npm run build`. Output : `dist`.

Le formulaire envoie les demandes à `/api/diagnostic`, une fonction Vercel qui les
enregistre dans le Channel Manager Olivia du compte `archivomac`. Elle obtient
l’identité du site auprès d’Olivia avec le domaine déjà enregistré
`https://macretro.vercel.app`. Aucune clé privée n’est exposée au navigateur.
Une photo JPG, PNG ou WebP de 2 Mo maximum peut accompagner la demande et apparaît
en pièce jointe dans la boîte de réception. La confirmation s’affiche uniquement
après réception des identifiants de conversation et de message enregistrés.

Pour tester aussi la fonction localement, utiliser `vercel dev` ; `npm run dev`
sert uniquement les pages Astro. Déployer depuis la racine du dépôt afin d’inclure
la fonction API, et non depuis le seul dossier `dist`.
