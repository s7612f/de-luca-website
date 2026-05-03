# De Luca Cucina & Bar — Website

A clean, modern static website for [De Luca Cucina & Bar](https://www.delucacucina.co.uk/) — an independent Italian restaurant and cocktail bar in Cambridge, UK.

**Live site:** [https://s7612f.github.io/de-luca-website/](https://s7612f.github.io/de-luca-website/)

---

## About

This is a fully rebuilt static version of the De Luca website, using all original assets (photos, logo, fonts, brand colours) from the WordPress source but redesigned as a fast, dependency-free single-page site.

**Key features:**
- Fullscreen hero with auto-cycling photo slideshow (13 restaurant photos)
- Smooth scroll-reveal animations
- Responsive — works on mobile, tablet, and desktop
- Poppins font (Google Fonts) with original burgundy `#780724` brand colour
- Individual blog-post pages for each news article
- Downloadable menu PDFs
- Contact form, booking link, and Google Maps integration
- No WordPress, no jQuery, no bloat — vanilla HTML/CSS/JS only

## Structure

```
de-luca-website/
├── index.html          # Main single-page site
├── news/               # Individual news/blog post pages
│   ├── celebrating-20-years.html
│   ├── spring-summer-menu.html
│   ├── valentines-2026.html
│   └── new-2026-menu.html
├── assets/
│   ├── css/
│   │   ├── style.css       # Main stylesheet
│   │   └── article.css     # News article page styles
│   ├── js/
│   │   └── main.js         # Slideshow, nav, scroll reveal
│   └── img/                # All restaurant photos, logos, awards
└── .claude/launch.json     # Local dev server config
```

## Running locally

```bash
python3 -m http.server 3456 --directory .
```

Then open [http://localhost:3456](http://localhost:3456).

## Hosting

Hosted via **GitHub Pages** from the `main` branch root.  
Any push to `main` automatically deploys to the live URL above.

---

*Built from original De Luca assets. All images and brand materials © De Luca Cucina & Bar.*
