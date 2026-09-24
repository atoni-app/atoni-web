# ATONI website

Public website for the ATONI mobile game, including Polish, English and Spanish landing pages, privacy policies and terms of use.

## Local development

```bash
npm install
npm run dev
npm run build
npm test
```

The application uses standard Next.js App Router, matching the technology and GitHub-to-Vercel deployment flow used by the Młodzi Arkowcy website.

## Routes

- `/`, `/en`, `/es`
- `/privacy`, `/en/privacy`, `/es/privacy`
- `/terms`, `/en/terms`, `/es/terms`

Legal source documents are stored in `content/`.
