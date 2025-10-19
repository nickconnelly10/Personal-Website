# 🏠 Nicholas Connelly Box

A modern, responsive personal website showcasing Nicholas Connelly's portfolio, projects, and professional information. Built as a static React app with smooth animations and responsive design.

## ✨ Features

- **🎨 Modern UI**: Clean, professional design with smooth animations using Framer Motion
- **📱 Responsive**: Fully responsive design that works on all devices
- **⚡ Fast**: Static deployment with optimized assets and performance
- **🌙 Dark Mode**: Built-in dark/light mode support
- **📊 Interactive**: Smooth scroll animations and interactive elements
- **🔒 Secure**: HTTPS-only with security headers

## 🏗️ Architecture

```
Frontend (React/TypeScript) → Static Site → Portfolio Content
```

- **Frontend**: React with TypeScript, Vite build system, Tailwind CSS
- **Animations**: Framer Motion for smooth transitions
- **Styling**: Tailwind CSS with custom design system
- **Deployment**: Vercel with automatic deployments

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS with custom color scheme
- **Build**: Vite with TypeScript compilation
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Vercel account (for deployment)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/nickconnelly10/nicholasconnelly.box.git
cd nicholasconnelly.box
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect to Vercel**:
   ```bash
   npx vercel login
   ```

2. **Deploy**:
   ```bash
   npx vercel --prod
   ```

3. **Custom Domain**: Set to `nickconnelly.com` in the Vercel dashboard

## 📁 Project Structure

```
src/
├── components/     # React UI components
├── pages/         # Page components
├── types/         # TypeScript type definitions
└── utils/         # Utility functions
public/            # Static assets (favicon, legal pages)
```

## 🎨 Design System

The site uses a custom professional theme with:
- **Colors**: Clean, modern palette with accent colors
- **Typography**: Professional, readable fonts
- **Components**: Consistent button, card, and layout patterns
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: WCAG compliant design

## 🔗 Related Projects

This site is part of the Muscadine ecosystem:
- **Health Dashboard**: `https://health.nickconnelly.com`
- **DeFi Dashboard**: `https://defi.nickconnelly.com`

## 🌐 Domain Configuration

This repository serves the following domains:
- **Primary**: `https://nickconnelly.com`
- **WWW**: `https://www.nickconnelly.com`

## 📄 Legal Pages

Static legal pages are served from the `public/` directory:
- `/privacy.html` - Privacy Policy
- `/terms.html` - Terms of Service

## 🧪 Testing

Run linting with:
```bash
npm run lint
```

## 📦 Deployment Hygiene: What to Commit

| File/Folder         | Required for Deployment? | Commit to Repo? | Notes                                 |
|---------------------|-------------------------|-----------------|---------------------------------------|
| `node_modules/`     | No                      | No              | Only for local dev/build. Should be in `.gitignore`. |
| `package-lock.json` | Yes                     | Yes             | Ensures consistent dependency install |
| `vercel.json`       | Yes (if using Vercel)   | Yes             | Custom Vercel config                  |
| `dist/`             | No                      | No              | Build output, auto-generated          |
| `public/`           | Yes                     | Yes             | Static assets (favicon, legal, etc)   |
| `src/`              | Yes                     | Yes             | Source code                           |
| `.gitignore`        | Yes                     | Yes             | Ensures build artifacts are ignored   |

**Delete or do not commit:**
- `node_modules/` (never commit)
- `dist/` (never commit)
- Any backup files like `package-lock 2.json`, `vercel 2.json`, etc.

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with tree shaking and code splitting
- **Loading Speed**: Sub-second initial load times
- **SEO**: Optimized meta tags and structured data

## 🤝 Contributing

- PRs welcome! Please open an issue for feature requests or bugs.
- Follow the existing code style and conventions.
- Ensure all builds pass before submitting.

## 📄 License

MIT License - see LICENSE file for details.

---

*Built on BITCOIN • Secure • Transparent • Professional • Strava Club*
