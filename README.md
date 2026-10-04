# NMMUN — 17th Edition | Official Landing Page

A responsive, high-aesthetic diplomatic landing page for the **17th Edition of Narsee Monjee Model United Nations (NMMUN)** at NMIMS Mumbai.

Designed with an editorial, prestigious diplomatic aesthetic featuring a **Deep Diplomatic Navy, Royal Blue, Crimson Red, and Crisp White Gradient** palette with subtle gold accents, glassmorphism, responsive timelines, and accessible modal dialogs.

---

## 🏛️ Project Structure

```text
NMUN/
├── index.html       # Semantic HTML5 markup, conference sections, modals & placeholders
├── style.css        # Vanilla CSS3 design system, responsive grids, gradients & animations
├── script.js        # Lightweight Vanilla JavaScript (no frameworks, zero dependencies)
└── README.md        # Documentation, customization guide & deployment instructions
```

---

## ✨ Features & Architecture

1. **Self-Contained & Static**: Built purely with HTML5, CSS3, and Vanilla JavaScript. Runs directly from a local folder or root of GitHub Pages without any build tools, node modules, or backend server.
2. **Blue, Red & White Gradient Theme**:
   - Deep midnight navy canvas (`#040812`, `#070e1e`).
   - Royal diplomatic blue (`#1d4ed8`, `#2563eb`).
   - Presidential crimson red (`#c81e3d`, `#e11d48`).
   - Crisp ivory/white typography (`#ffffff`, `#f8fafc`).
   - Subtle muted gold accents (`#d4af37`) for crests, seals, and honours.
3. **Sections Included**:
   - **Top Announcement Bar**: Replaceable dates and venue preview.
   - **Global Header**: Custom diplomatic crest SVG, responsive navigation, and mobile drawer.
   - **Hero Section**: Full-screen layout with ambient atmospheric gradients, edition pill, theme placeholder, tagline, dual CTAs, and conference metrics.
   - **About NMMUN**: Institutional mandate, substantive pillars, and secretariat disclaimers.
   - **"The Delegate Journey"**: Custom 4-stage interactive timeline (Research &rarr; Debate &rarr; Negotiate &rarr; Resolve). Horizontal on desktop, vertical on mobile.
   - **"Choose Your Room"**: 6 committee preview cards (UNSC, UNGA, UNHRC, WHO, IPC, and custom placeholder) with interactive detail modals.
   - **Why NMMUN / Experience**: 4 pedagogical core competencies.
   - **Call To Action (CTA)**: High-impact gradient conversion block with registration trigger.
   - **Footer**: Institutional credits (NMIMS), contact details, social links, and legal notice.
4. **Interactive Modal System**:
   - **Committee Explorer Modal**: Displays committee mandates, provisional agendas, and delegation sizes.
   - **Registration Portal Modal**: Guide for delegate form links, fee structures, and matrices.

---

## 📝 Placeholder Replacement Guide

All placeholders in `index.html` and `script.js` are clearly identified with bracketed annotations (e.g. `[Placeholder: ...]`). When official conference details are finalized, update these specific areas:

| Section | Location in `index.html` / `script.js` | Placeholder Item | Recommended Replacement |
|---|---|---|---|
| **Announcement Bar** | Line ~32 | `[Opening Soon — Date Placeholder]` | Official registration open date |
| **Announcement Bar** | Line ~34 | `[NMIMS Mumbai Campus — Room/Auditorium Placeholder]` | Specific campus building/hall |
| **Hero Eyebrow** | Line ~140 | `17th ANNUAL EDITION` | Keep as-is or adjust edition number |
| **Hero Theme** | Line ~160 | `[Official Theme Placeholder: Forging Multilateral Consensus...]` | Official 17th Edition theme string |
| **Hero Dates & Venue**| Line ~167–173 | `[DD – DD Month, YYYY]` and `[NMIMS Campus, Vile Parle, Mumbai]` | Exact conference dates & campus |
| **Hero Metrics** | Line ~196–212 | `[6+]`, `[300+]`, `[3]` | Actual number of committees, delegates, and days |
| **About Notice** | Line ~303 | `[Note: Official 17th Edition background guides...]` | Updated announcement or link to guide |
| **Committees (HTML)** | Line ~408–540 | Provisional agendas on each card | Official committee study agendas |
| **Committees (JS)** | `script.js` (lines 10–75) | Committee names, agendas, and matrices | Official executive board assignments |
| **CTA Form Link** | Line ~610 & `script.js` line ~200 | `[Official Registration Form Link Placeholder]` | Replace modal button `href` with your Google Form/Unstop link |
| **Footer Contact** | Line ~676–684 | `[contact.nmmun@nmims.edu]` and `[+91 XX XXXX XXXX]` | Official secretariat email & phone |
| **Footer Socials** | Line ~700–715 | Instagram, LinkedIn, and Twitter links | Official `@nmmun` social media URLs |

---

## 💻 How to Preview the Website Locally

You can preview the website immediately using any standard browser.

### Option 1: Direct File Open (Fastest)
Double-click `index.html` or right-click `index.html` &rarr; **Open With** &rarr; **Google Chrome** (or Safari / Firefox / Edge).

### Option 2: Using Python's Built-in Local Server
Open your terminal inside the `NMUN` directory and run:
```bash
python3 -m http.server 8000
```
Then visit [`http://localhost:8000`](http://localhost:8000) in your browser.

### Option 3: Using Node / npx
```bash
npx serve .
```

---

## 🚀 How to Upload to GitHub and Deploy via GitHub Pages

Because this project is built entirely with standard HTML5, CSS3, and JavaScript, it can be deployed on GitHub Pages in under 2 minutes.

### Step 1: Initialize Git and Commit
Open your terminal in the project directory:
```bash
cd /Users/bhavya/Desktop/NMUN
git init
git add .
git commit -m "feat: initial commit of NMMUN 17th edition landing page"
```

### Step 2: Create a GitHub Repository and Push
1. Go to [GitHub.com](https://github.com) and click **New Repository**.
2. Name it (for example `nmmun-17th-edition` or `nmmun`).
3. Set visibility to **Public**.
4. Do not initialize with a README (one is already created).
5. Link your local project and push:
```bash
git remote add origin https://github.com/YOUR_USERNAME/nmmun-17th-edition.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** (tab on the top right).
3. In the left sidebar, click **Pages** (under "Code and automation").
4. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and folder `/ (root)`.
5. Click **Save**.
6. Within 1–2 minutes, your website will be live at:
   ```text
   https://YOUR_USERNAME.github.io/nmmun-17th-edition/
   ```

---

## 📱 Browser & Device Compatibility
- Tested and optimized for modern standards across **Desktop (1920px, 1440px), Laptops (1280px), Tablets (iPad/Android), and Mobile Phones (iPhone/Pixel/Galaxy)**.
- Features fluid typography via `clamp()`, zero horizontal overflow, touch-friendly tap targets (&gt;44px), and keyboard focus rings for accessibility compliance.
