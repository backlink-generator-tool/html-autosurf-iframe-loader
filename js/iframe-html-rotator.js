// Utility: Fisher-Yates shuffle
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Array of local HTML files to load (edit this list as needed)
const htmlFiles = shuffleArray([
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page1.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page2.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page3.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page4.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page5.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page6.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page7.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page8.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page9.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page10.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page11.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page12.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page13.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page14.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page15.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page16.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page17.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page18.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page19.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page20.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page21.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page22.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page23.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page24.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page25.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page26.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page27.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page28.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page29.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page30.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page31.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page32.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page33.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page34.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page35.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page36.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page37.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page38.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page39.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page40.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page41.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page42.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page43.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page44.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page45.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page46.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page47.html",
    "https://backlink-generator-tool.github.io/html-autosurf-iframe-loader/pages/page48.html"
]);

const iframes = [];

// Create 15 hidden iframes on the page
for (let i = 0; i < 5; i++) {
  const iframe = document.createElement("iframe");
  iframe.classList.add("loop", "hidden-iframe");
  //iframe.style.display = "none";
  document.body.appendChild(iframe);
  iframes.push(iframe);
}

// Randomly load a new HTML file into iframe every 15 seconds
function startIframeLoop() {
  if (!htmlFiles.length) {
    console.error("🚫 No HTML files to load.");
    return;
  }

  for (const iframe of iframes) {
    function loadNext() {
      const htmlFile = htmlFiles[Math.floor(Math.random() * htmlFiles.length)];
      iframe.src = htmlFile;
    }

    iframe.onload = () => {
      setTimeout(loadNext, 15000); // wait 15 seconds
    };

    loadNext(); // initial load
  }
}

// Start the loop
startIframeLoop();
