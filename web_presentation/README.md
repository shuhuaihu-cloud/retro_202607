# 上海近代住宅建築 Shanghai Modern Residential Architecture

This project is a web-based architectural exhibition focusing on the evolution of modern residential architecture in Shanghai from 1930-1940. It explores the transition from Beaux-Arts and Eclectic traditions towards Modernism through three case studies: Sun Ke Villa, Rong Zhai, and the Wu Tongwen Residence.

The presentation is designed as a digital museum experience, prioritizing editorial layout and high-quality photography.

## Technology Stack

*   **Vite**: Frontend tooling and development server.
*   **Vanilla JavaScript**: For all application logic and interactivity.
*   **Plain CSS**: Hand-written stylesheets with CSS custom properties as design tokens. No CSS framework.
*   **PostCSS + Autoprefixer**: Vendor prefixing at build time.

There is deliberately no CSS framework, no animation library, and no UI component library. See **Optional Tooling** below for what was considered and why it was left out.

## Optional Tooling

These tools are *not* installed. They were evaluated for this project and set aside, but are recorded here so the reasoning does not have to be rediscovered — and so they can be picked up later if the project's needs change.

### Tailwind CSS

A utility-first CSS framework. Instead of naming a class and writing rules for it in a stylesheet, you compose single-purpose classes directly in the markup:

\`\`\`html
<!-- current approach: named class + rules in base.css -->
<div class="villa-grid">…</div>

<!-- Tailwind approach -->
<div class="grid grid-cols-2 gap-6">…</div>
\`\`\`

**Why it was left out.** This is a single-page, single-maintainer exhibition site whose layouts are highly bespoke — most sections need their own treatment rather than reusing a shared component vocabulary. Tailwind trades away per-element freedom in exchange for enforced consistency, and that trade pays off when styling is *repetitive*. Here it is mostly *custom*, so the framework would have added a build step and a class vocabulary without removing much work. Effects such as layered gradient backgrounds and \`clamp()\` fluid type would have had to be written as arbitrary-value escape hatches (\`bg-[linear-gradient(…)]\`), which is more verbose than plain CSS, not less. Rendering also happens through string concatenation in \`src/app.js\`, so there is no component layer to absorb long class lists.

**When to reconsider.** Adopt it if the project grows a real component vocabulary (repeated cards, buttons, form controls across many pages), gains additional contributors who need a shared spacing and colour scale, moves to a component framework such as React or Vue, or starts needing many responsive and state variants (\`md:\`, \`hover:\`, \`focus-visible:\`) that are tedious to hand-write.

**How to add it back.**

\`\`\`bash
npm install -D tailwindcss
npx tailwindcss init
\`\`\`

Then register the plugin in \`postcss.config.js\`, point \`content\` at \`./index.html\` and \`./src/**/*.{js,html}\`, mirror the palette from \`.ai/DESIGN_RULES.md\` into \`theme.extend\`, and add the three directives to the top of \`src/styles/base.css\`:

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

That last step is essential — an earlier version of this project had the config and the PostCSS plugin in place but no directives and no utility classes in the markup, so the entire pipeline ran on every build and produced nothing.

**A lighter alternative.** If the goal is only consistency rather than a full framework, CSS custom properties already provide it. \`src/styles/variables.css\` defines colour and font tokens; extending it with a spacing and radius scale (\`--space-4\`, \`--radius-card\`) and using those everywhere instead of ad-hoc values gets most of the benefit at none of the cost.

### GSAP, ScrollTrigger and Lenis

Animation and smooth-scroll libraries. \`.ai/DESIGN_RULES.md\` specifies scroll-driven motion — image reveals, masks, parallax, text stagger — and \`gsap\`, \`lenis\` and \`heroicons\` were once listed as dependencies, but no animation code was ever written and the packages have been removed. The site currently relies on CSS \`scroll-snap\` and \`scroll-behavior: smooth\` alone. Reinstate them if the motion design in \`DESIGN_RULES.md\` is revisited; note that \`prefers-reduced-motion\` should be honoured if so.

## Folder Structure

The project follows a standard Vite project structure, with application code located in the \`src\` directory.

\`\`\`
/web_presentation
├── public/
│   └── images/          # One folder per topic, served as-is
├── src/
│   ├── styles/
│   │   ├── base.css        # All styling that is actually applied
│   │   ├── variables.css   # Design tokens (not yet imported)
│   │   ├── layout.css      # (not yet imported)
│   │   └── typography.css  # (not yet imported)
│   ├── app.js           # Story data + all rendering
│   └── main.js          # Application entry point
├── index.html           # Main HTML file
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS (autoprefixer) configuration
└── vite.config.js       # Vite configuration
\`\`\`

## How to Run

1.  **Install dependencies:**
    \`\`\`bash
    npm install
    \`\`\`
2.  **Run the development server:**
    \`\`\`bash
    npm run dev
    \`\`\`
    The application will be available at \`http://localhost:5173\`.

## How to Customize

### Replace Images

Images live in \`public/images\`, grouped into one folder per topic. Each story entry in \`src/app.js\` references them by path relative to \`public/images\`; the \`asset()\` helper resolves them through \`import.meta.env.BASE_URL\` so they work under the GitHub Pages sub-path.

### Add or Replace Images

**Always compress before committing.** Files in \`public/\` are copied to \`dist\` untouched — Vite does not optimise them — so whatever you drop in is exactly what every visitor downloads, and it stays in git history forever. A camera or phone original is typically 5–50 MB against a slot that renders at 300–1200 px.

1.  Drop the file into the appropriate folder under \`public/images\`.
2.  Run the optimiser:
    \`\`\`bash
    npm run optimize:images              # scan everything
    npm run optimize:images -- 榮宅       # or just one folder
    \`\`\`
3.  Reference it from the relevant story entry in \`src/app.js\`, using the path relative to \`public/images\` (no leading slash, no \`public/\`).
4.  \`npm run build\` and check the result with \`npm run preview\`.

The script resizes anything over a 2000 px long edge and re-encodes at JPEG q80, in place. It uses only \`sips\`, which ships with macOS, so there is nothing to install.

It is safe to re-run: files already within the limits are skipped rather than re-compressed, and a result that is not meaningfully smaller than its input is discarded. This matters because every JPEG re-encode loses a little quality, so a naive script run twice would quietly degrade the whole library.

PNGs are always converted to JPEG, since photographic PNGs are usually more than twice the size for no visible benefit. **A converted PNG changes the file extension, so the reference in \`src/app.js\` must be updated too** — the script prints the list of affected files when this happens. Verify with \`grep -rn '\.png' src/\`. A PNG that genuinely compresses better than JPEG (line art, flat colour) is detected and left alone.

If you need a transparent background, keep the file as PNG and exclude it from the script — flattening transparency to JPEG produces a black background.

### Customize Colors and Fonts

The palette that is actually rendered is the \`:root\` block at the top of \`src/styles/base.css\`. Note that \`src/styles/variables.css\` holds a second, different palette (the one specified in \`.ai/DESIGN_RULES.md\`) and is not currently imported — the two have diverged and should eventually be reconciled.

### Add Additional Buildings

To add a new building:
1.  Add a new object to the \`this.story\` array in \`src/app.js\`.
2.  Follow the structure of the existing \`villa\` objects.
3.  The new section will be rendered automatically.

## Deployment

To create a production-ready build:

\`\`\`bash
npm run build
\`\`\`

This will generate a \`dist\` folder containing the optimized and bundled static assets. You can deploy the contents of this folder to any static hosting service.

### GitHub Pages (automated)

The site is deployed automatically to GitHub Pages on every push to \`main\`:

**Live site:** https://shuhuaihu-cloud.github.io/retro_202607/

How it works:

*   \`.github/workflows/deploy.yml\` (at the repository root) builds \`web_presentation/\` and publishes \`dist\` via GitHub Pages.
*   The base path is derived automatically from the repository name and passed to the build as \`VITE_BASE=/<repo>/\`. \`vite.config.js\` reads it (\`base: process.env.VITE_BASE || '/'\`), and image URLs in \`src/app.js\` are resolved through \`import.meta.env.BASE_URL\`, so everything works under the \`/<repo>/\` sub-path.

To publish updates:

\`\`\`bash
git add -A
git commit -m "your message"
git push
\`\`\`

Then watch the **Actions** tab for progress. The finished site updates within a few minutes.

One-time setup (already done for this repo): in **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.
