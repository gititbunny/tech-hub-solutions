# Tech Hub Solutions — React (Vite) Single-Page Site

Tech Hub Solutions is a Limpopo-based office equipment supplier providing sales, maintenance, and supplies to businesses across Tzaneen and surrounding areas.

---

## ✨ Features

- Identical look & layout to the original HTML/CSS
- Sticky header with smooth-scroll (80px offset)
- Mobile menu (body scroll lock + accessible close)
- Light/Dark theme toggle (saved in `localStorage`)
- Products filter + “Add to Cart” modal
- Testimonials slider (React Slick)
- Animated stats on scroll (IntersectionObserver)
- Contact form → success modal (front-end only)
- Back-to-top button
- Responsive fixes for header brand & hero image on small screens
- Bootstrap utilities loaded (visual style still controlled by your CSS)

---

## 🧰 Tech Stack

- **Vite + React**
- **Bootstrap** (CSS utilities) & **react-bootstrap** (minimal JS helpers)
- **react-slick** + **slick-carousel** (carousel)
- **Font Awesome** (icons via CDN)
- **Google Fonts** (Montserrat & Roboto via CDN)
- Plain **CSS** (original stylesheet, unchanged aside from tiny mobile tweaks)

> Note: CDN assets (fonts/icons/slick CSS) require an internet connection when viewing locally.

---

## 📁 Project Structure

```
tech-hub-solutions/
├─ public/
│  ├─ media/                # images used by the site
│  │  ├─ logo.png
│  │  ├─ hero-pic.jpg
│  │  ├─ about-pic.jpg
│  │  ├─ service1.jpg
│  │  ├─ service2.jpg
│  │  ├─ service3.jpg
│  │  ├─ laser-printer.jpg
│  │  ├─ desktop.jpg
│  │  ├─ office-chair.png
│  │  ├─ printer-ink.png
│  │  ├─ inkjet-printer.png
│  │  └─ laptop.png
│  └─ favicon.ico           # optional; we use /media/icon.png as favicon by default
├─ src/
│  ├─ components/
│  │  ├─ Header.jsx
│  │  ├─ BackToTop.jsx
│  │  ├─ Services.jsx
│  │  ├─ Products.jsx
│  │  ├─ Stats.jsx
│  │  ├─ Testimonials.jsx
│  │  ├─ Contact.jsx
│  │  ├─ MapEmbed.jsx
│  │  ├─ Footer.jsx
│  │  └─ Modals.jsx
│  ├─ hooks/
│  │  ├─ useLocalStorage.js
│  │  ├─ useLockBodyScroll.js
│  │  └─ useScrollPosition.js
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ styles.css            # original stylesheet (plus tiny mobile tweaks at bottom)
├─ index.html               # fonts/icons/slick CSS + favicon link
├─ package.json
└─ vite.config.js
```

---

## 🚀 Getting Started (View locally)

### 1) Install Node.js

- Use **Node 18+** (LTS recommended).
  Verify: `node -v` → e.g. `v18.x` or `v20.x`.

### 2) Install dependencies

```bash
npm install
```

### 3) Start the dev server

```bash
npm run dev
```

- Open the printed URL (usually `http://localhost:5173`).

### 4) Build for production

```bash
npm run build
```

- Output goes to `dist/`.

### 5) Preview the production build (optional)

```bash
npm run preview
```

---

## 🌐 Deploying

This is a static site. You can deploy the `dist/` folder to any static host.

### Netlify (easiest)

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- Click “Deploy”.

### Vercel

- Framework preset: **Vite**
- Build: `npm run build`
- Output: `dist`

### GitHub Pages

- Install `gh-pages` or use an action to deploy `dist/`.
- If hosting at a subpath, set `base` in `vite.config.js`.

---

## 🖼️ Assets (Logo, Favicon, Media)

- **Logo (navbar + favicon):** `public/media/logo.png`

  - The tab icon is set in `index.html`:

    ```html
    <link rel="icon" href="/media/logo.png" type="image/png" />
    ```

  - Replace `logo.png` with your own file (same name) or point to your preferred icon.

- **Favicon (optional):** place `favicon.ico` in `/public` and change the link in `index.html` if you prefer classic `.ico`.

- **Images:** keep filenames and paths the same under `public/media/` to avoid breaking references.
  You can swap images with same names to update visuals without touching code.

---

## 🧭 Where to Edit Content

- **Site title:**

  - `index.html` `<title>…</title>` (browser tab text)
  - `src/App.jsx` (we set `document.title` once on mount)

- **Navbar text/links:** `src/components/Header.jsx`
  The section IDs (`#home`, `#about`, etc.) must match the section `id`s.

- **Hero text/buttons:** `src/App.jsx` (Hero section)

- **About/Services/Products/Contact copy:** in their respective components.

- **Products list:** `src/components/Products.jsx` → `PRODUCTS` array at the top.

- **Testimonials:** `src/components/Testimonials.jsx` → `testimonials` array.

- **Contact “coded by” credit:** `src/components/Contact.jsx` (bottom `credit` block).

- **Google Map:** `src/components/MapEmbed.jsx` → replace the `src` URL if needed.

---

## 🖌️ Styles & Responsiveness

- All styles live in **`src/styles.css`**.
- Bootstrap CSS is loaded **before** your stylesheet so your classes win.
- Mobile polish rules added at the **bottom** of `styles.css`:

  - Header brand (logo+name) scale on narrow widths
  - Disable hero image floating on small screens to prevent overlap

> Want to adjust breakpoints? Edit only the **bottom “STEP 4” media queries**.

---

## ♿ Accessibility Notes

- Mobile menu & modals lock the body scroll.
- Buttons/links include `aria-label`s where needed.
- Smooth scrolling respects user input; if you want to respect “reduced motion”, you can disable animations with a `prefers-reduced-motion` media query in `styles.css`.

---

## 🔧 Scripts (from `package.json`)

- `dev` — start dev server
- `build` — build production bundle
- `preview` — preview the production build

Run with `npm run <script>`.

---

## 🧩 Libraries Used

- **bootstrap**, **react-bootstrap**
- **react-slick**, **slick-carousel**
- **Font Awesome** (CDN)
- **Google Fonts** (CDN)

All are already wired—no extra configuration needed.

---

## ❓ FAQ / Troubleshooting

- **Icons or fonts not showing locally?**
  Ensure you have an internet connection; Font Awesome + Google Fonts load from CDNs.

- **Images don’t appear after replacing them?**
  Confirm files are in `public/media/` with the **same filenames** used in the code.

- **Header links don’t scroll correctly after adding new sections?**

  - Make sure the nav link `href="#sectionId"` matches a real section with `id="sectionId"`.
  - Smooth scroll uses an 80px offset for the sticky header.

- **Deploy fails on Netlify/Vercel?**
  Double-check build command `npm run build` and publish/output directory `dist`.

---

## 📄 License

MIT.

---

## 👤 Credits

Design & Engineering by **Git It Bunny**.
