# Archivo Mac

Site Astro pour Archivo Mac, en espagnol, prêt pour Vercel.

## Commandes

```bash
npm install
npm run dev
npm run build
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
