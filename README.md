# HTML Iframe Page Rotator Autosurf Tool

A lightweight, client-side JavaScript autosurf tool that automatically rotates and loads up to 20 HTML pages into multiple iframes. Built for web automation testing, traffic simulation, SEO backlink verification, and content previewing.

This open-source utility uses randomized loading logic to simulate real-time page visits — a great fit for autosurf projects, bot traffic emulation, and web crawler experiments.

---

## 🚀 What It Does

- 🔁 Automatically loads **15 iframes** with different local HTML pages
- 🎲 Randomizes file selection using **Fisher-Yates shuffle**
- ⏱ Reloads each iframe every **15 seconds** with a new random page
- 📄 Supports **up to 20 HTML files** in `/pages/`
- ⚡️ 100% browser-based — no server, no dependencies, just open `index.html`

---

## ✅ Use Cases

This project is great for:

- **Autosurf browser loops** for web automation
- **SEO backlink testing** and referral monitoring
- **Traffic emulation** for test environments
- **HTML preview cycling** (e.g. portfolio/demo rotator)
- **Botnet simulation and anti-bot testing**
- **Dynamic iframe loaders for kiosk or embedded views**

---

## 📁 File Structure

html-iframe-page-rotator-autosurf-tool/
├── index.html # Main launcher file
├── js/
│ └── rotator.js # JavaScript logic to shuffle and load pages
└── pages/
├── page1.html
├── page2.html
├── ...
└── page20.html

yaml
Copy
Edit

---

## 📄 How It Works

When you open `index.html`, it initializes 15 hidden `<iframe>` elements. Each iframe is assigned a random HTML file from the `/pages/` folder and is reloaded every 15 seconds with another randomized page.

This loop continues endlessly, giving the effect of automated browsing behavior.

---

## 🧠 Technology Stack

- ✅ Vanilla JavaScript (ES6+)
- ✅ Fisher-Yates shuffle algorithm
- ✅ HTML5
- ✅ Runs in any modern browser

---

## 🔧 Setup Instructions

1. **Clone the repo:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/html-iframe-page-rotator-autosurf-tool.git
