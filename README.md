# Saeed Ramadan - Developer Portfolio ⚡

![Portfolio Preview](./src/assets/html,css%20pro/personal.png)

A highly advanced, architecturally modern portfolio built with **React 19**, **Tailwind CSS v4**, and **Framer Motion**. Designed for a premium, cinematic user experience featuring dynamic themes, 3D interactions, parallax scrolling, and full internationalization (AR/EN).

---

## 🌟 Key Features

### 1. **Cinematic & Magnetic UI design**
- Deep dark mode with kinetic glows and holographic ambient backgrounds.
- High-performance, physics-based scroll animations powered by Framer Motion.
- Magnetic buttons, hover states, and 3D parallax elements (perspective tracking).

### 2. **Dynamic Project Theming System**
Every project detail page has its own complete psychological theme and customized layout:
- 🟡 **Bynona Details:** E-commerce focused theme (Golden Yellow). Features custom masonry grids.
- 🔵 **Propix8 Details:** Real estate focused theme (Architectural Blue). Features blueprint backdrops and 21:9 hero shots.
- 🩵 **HOPE Details:** Graduation project theme (Teal). Features interactive cards with gradient glows and a sticky tech stack layout.
- The thematic coloring automatically applies to glowing borders, tech chips, badges, and navigation arrows across the homepage.

### 3. **Internationalization (i18n)**
- Full support for **English (LTR)** and **Arabic (RTL)** directly out of the box using `react-i18next`.
- Direction-aware CSS and animations (e.g., arrows flipping dynamically based on language).

### 4. **Modern Tech Stack & Performance**
- Built on **React 19** and **Vite 7** for lightning-fast compilation.
- Utilizing **Tailwind CSS v4**'s latest alpha features for deep styling control without bloated CSS.

---

## 🛠️ Technology Stack

- **Core:** React 19, JavaScript (ES6+), React Router DOM v7
- **Styling:** Tailwind CSS v4, Custom Vanilla CSS animations
- **Animation:** Framer Motion (Scroll triggers, layout transitions, variants)
- **Internationalization:** i18next, react-i18next
- **Icons:** BoxIcons
- **Build Tool:** Vite 7
- **Deployment:** GitHub Pages / Vercel

---

## 🚀 Quick Start & Installation

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/Saeed-Ramadan/Saeed-Portfolio.git
cd Saeed-Portfolio
```

### 2. Install dependencies
Using npm:
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

---

## 📂 Project Structure

```text
src/
├── assets/         # Images, icons, and media files optimized per project
├── components/     # Reusable UI components (Navbar, Hero, Portfolio, Skills, etc.)
├── data/           # projectsData.js (Centralized data and dynamic theme configuration)
├── pages/          # Full-page components
│   ├── Home.jsx           # Main landing page assembling all components
│   ├── ProjectDetails.jsx # Generic details route handler
│   ├── BynonaDetails.jsx  # Custom E-commerce layout (Yellow)
│   ├── PropixDetails.jsx  # Custom Real Estate layout (Blue)
│   └── HopeDetails.jsx    # Custom Social Service layout (Teal)
├── i18n.js         # Configuration for Arabic/English translations
├── App.jsx         # React Router setup, layout structure, and Providers
├── index.css       # Tailwind entry and global CSS custom variables/animations
└── main.jsx        # React DOM rendering
```

---

## 🎨 Design System

The portfolio uses an advanced custom design system built into standard css variables in `index.css`:

- **Colors:** Deep containers (`#0a0a0c`), vibrant accents (`#14b8a6`, `#eab308`, `#3b82f6` depending on project selection), and crisp typography.
- **Glows:** Uses heavily modified shadow layers and radial-gradient backgrounds to create a "glassmorphic matrix" aesthetic.

---

## 👨‍💻 Author

**Saeed Ramadan**
- Frontend Web Developer based in Egypt.
- Specializing in React, building highly interactive UI, and creating unforgettable web experiences.
- [LinkedIn Profile](https://www.linkedin.com/in/saeed-ramadan-806ab3260/)
- [GitHub Profile](https://github.com/Saeed-Ramadan)

---

> *"Architecting the frontlines of the digital singularity."*
