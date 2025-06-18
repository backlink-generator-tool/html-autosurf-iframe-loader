# SEO Iframe HTML Rotator

A lightweight JavaScript-based iframe rotator that cycles through a shuffled list of HTML pages every 15 seconds. Perfect for:

- SEO backlink indexing
- Autosurf simulations
- Automated traffic bots
- HTML landing page rotations

## 🚀 Features

- 100% client-side JavaScript (no dependencies)
- Rotates one page at a time every 15 seconds
- Limited to 15 iframes maximum
- Optimized for indexing tools and Googlebot behavior
- Clean HTML/JS file structure, ready for deployment on GitHub Pages or any web host

## 📁 File Structure

seo-iframe-html-rotator/
├── index.html # Main launcher file
├── js/
│ └── rotator.js # JavaScript logic to shuffle and load pages
├── pages/
│ ├── page1.html
│ ├── page2.html
│ └── ... up to page20.html


## 🔧 How It Works

1. A hardcoded array of 20 HTML file links is shuffled.
2. A new iframe is added to the page every 15 seconds.
3. A maximum of 15 iframes are created and loaded.
4. Each iframe displays one of the shuffled HTML pages.

## 🌐 Usage

1. Clone this repository or download the ZIP.
2. Customize the `pages/pageX.html` files with your own content.
3. Open `index.html` in a browser or deploy it via GitHub Pages.

## 💡 SEO Tip

Use meaningful content and proper `<title>` and `<meta>` tags inside each `pageX.html` to maximize the SEO benefit.

## 📄 License

MIT License
