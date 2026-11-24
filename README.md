# Sweta Foundation Website

Official static website for **Sweta Foundation** — a charitable trust dedicated to animal welfare, animal protection, rescue operations, and educational support.

## Stack

- React.js + Vite
- React Router DOM
- Lucide React icons
- Custom CSS (Peduli Anak–inspired green NGO theme)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Content

All copy lives in `src/data/websiteContent.js`.

### Client confirmations needed

1. **Establishment date** — About section uses `December, 2025`; source footer uses `October 20, 2025`.
2. **Email / phone** — left empty in `siteConfig.contact` until verified.
3. **Donation details** — Donate CTA currently links to Contact; set `siteConfig.donateUrl` when ready.
4. Contact form is frontend-only until backend integration is added.
