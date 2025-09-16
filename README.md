
# Altuura Next.js Header (Black & Gold)

This package gives you a **modern sticky header** (logo left, gold menu right) + a **hero section with a gold “Shop Now” button** for Next.js.

## Files included
- `components/Header.jsx`  → the header (mobile-ready with hamburger)
- `components/Hero.jsx`    → optional hero section
- `styles/header.css`      → styles for header + hero
- `public/logo.png`        → put your real logo here (replace this file)
- `pages/_app.js`, `pages/index.js`  → **use these if your project has a `/pages` folder**
- `app/layout.js`, `app/page.js`      → **use these if your project has an `/app` folder**

> **Important:** Use only one router style. If your project has `/app`, you’re on the **App Router**. If it has `/pages`, you’re on the **Pages Router**. Don’t use both.

## Quick setup

### Option A — Pages Router (`/pages` exists)
1. Copy:
   - `components/Header.jsx` to your project `/components`
   - `components/Hero.jsx` to `/components`
   - `styles/header.css` to `/styles`
   - `public/logo.png` to `/public` (replace with your real logo)
   - `pages/_app.js` and `pages/index.js` into your project (merge if you already have them)
2. Commit & push → Vercel redeploys.

### Option B — App Router (`/app` exists)
1. Copy:
   - `components/Header.jsx` to `/components`
   - `components/Hero.jsx` to `/components`
   - `styles/header.css` to `/styles` (imported in `app/layout.js`)
   - `public/logo.png` to `/public` (replace with your real logo)
   - `app/layout.js` and `app/page.js` (merge with your existing layout/page if needed)
2. Commit & push → Vercel redeploys.

## Common reasons "nothing changed"
- You uploaded `index.html` to a Next.js project → **Next.js ignores it**. Use the components above instead.
- Vercel didn’t redeploy → push to GitHub again or click **Redeploy** in Vercel.
- Browser cache/CDN cache → hard refresh (⌘⇧R / Ctrl+F5) or redeploy.
- Wrong asset path → in Next.js use `/logo.png` (file must be in `/public`).

