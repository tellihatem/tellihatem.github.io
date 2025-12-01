# Hatem Telli - Professional Portfolio

This is a lightweight, professional, and animated portfolio built with **React (Vite)** and **Tailwind CSS**.
## Live Demo

Check out the live view of this project here: [tellihatem.github.io](https://tellihatem.github.io)

## 🚀 Getting Started

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run Development Server:**
    ```bash
    npm run dev
    ```

3.  **Build for Production:**
    ```bash
    npm run build
    ```

## 🛠️ Customization

### Data
All personal information is stored in `src/data/portfolio.jsx`. specific sections:
- `personalInfo` object contains Name, Titles, Contact, Summary, Skills, Experience, Education, Projects, etc.
- Update this file to instantly update the content of your website.

### Styling
- **Tailwind CSS** is used for styling. Configuration is in `tailwind.config.js`.
- Theme colors are defined in `tailwind.config.js`:
    - `primary`: Dark Slate (Background)
    - `secondary`: Lighter Slate (Cards/Sections)
    - `accent`: Sky Blue (Highlights/Buttons)
    - `text`: Off-white

### Icons
- **Lucide React** is used for icons. You can find more icons at [lucide.dev](https://lucide.dev).

### Animations
- **Framer Motion** handles the scroll reveals and interactive elements.

## 📂 Structure

- `src/components`: Individual UI components (Hero, About, Skills, etc.)
- `src/data`: Data separation.
- `src/App.jsx`: Main layout.

## 📦 Deployment

This project is static-site ready. You can deploy to:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

Just run `npm run build` and deploy the `dist` folder.
