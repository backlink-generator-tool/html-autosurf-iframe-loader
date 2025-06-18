# HTML Autosurf Iframe Loader

Auto-load and cycle through local HTML files using JavaScript iframes — ideal for autosurf traffic tools, web stress tests, and automation setups.

## 🔍 Features

- Loads **15 iframes simultaneously**
- Each iframe loads a **random local HTML file**
- Automatically reloads each iframe every **15 seconds**
- Uses **Fisher-Yates shuffle** to randomize file order
- Lightweight, no dependencies, and runs entirely client-side

---

## 📁 File Structure

seo-iframe-html-rotator/
├── index.html # Main launcher file
├── js/
│ └── rotator.js # JavaScript logic to shuffle and load pages
├── pages/
│ ├── page1.html
│ ├── page2.html
│ └── ... up to page20.html


---

## 🚀 How to Use

1. Clone or download this repository.
2. Add your own HTML content into the `/pages/` directory.
3. Open `index.html` in a browser to start the iframe autosurf loop.

> ✅ Tip: All 15 iframes load at once and continue reloading new random pages every 15 seconds.

---

## 🧠 Use Cases

- Autosurf traffic bots
- Web automation testing
- HTML preview rotator
- Network load simulations
- Background content rotation

---

## 📄 License

MIT — free to use, modify, and share.
