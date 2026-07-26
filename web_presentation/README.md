# 上海近代住宅建築 Shanghai Modern Residential Architecture

This project is a web-based architectural exhibition focusing on the evolution of modern residential architecture in Shanghai from 1930-1940. It explores the transition from Beaux-Arts and Eclectic traditions towards Modernism through three case studies: Sun Ke Villa, Rong Zhai, and the Wu Tongwen Residence.

The presentation is designed as a digital museum experience, prioritizing editorial layout, high-quality photography, and subtle animations.

## Technology Stack

*   **Vite**: Frontend tooling and development server.
*   **Vanilla JavaScript**: For all application logic and interactivity.
*   **Tailwind CSS**: For utility-first styling.
*   **GSAP (GreenSock Animation Platform)**: For high-performance animations.
*   **Lenis**: For smooth scrolling effects.
*   **Heroicons**: For UI icons.

## Folder Structure

The project follows a standard Vite project structure, with application code located in the \`src\` directory.

\`\`\`
/web_presentation
├── public/              # Static assets (images, fonts)
│   ├── images/
│   ├── plans/
│   └── ...
├── src/
│   ├── components/      # Reusable UI components (JS, CSS)
│   ├── sections/        # Major content sections
│   ├── layouts/         # Layout definitions
│   ├── styles/          # Global and component-specific styles
│   ├── scripts/         # Core JavaScript modules
│   ├── assets/          # JS-imported assets
│   ├── data/            # Data modules (e.g., story content)
│   ├── app.js           # Main application class
│   └── main.js          # Application entry point
├── index.html           # Main HTML file
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
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

All images are placeholders located in \`public/images\`. To replace them, simply overwrite the placeholder files with your own images, keeping the file names the same. For the villa sections, the placeholder is a gray box. You can modify the \`renderSection\` method in \`src/app.js\` to include \`<img>\` tags with the correct paths.

### Customize Colors and Fonts

Colors and fonts are defined in \`tailwind.config.js\`. You can modify the \`theme.extend.colors\` and \`theme.extend.fontFamily\` objects to change the visual theme of the presentation.

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
