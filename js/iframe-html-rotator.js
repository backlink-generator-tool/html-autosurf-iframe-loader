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
  "https://backlink-generator-tool.github.io/iframe-html-rotator/pages/page1.html",
  "https://backlink-generator-tool.github.io/iframe-html-rotator/pages/page2.html",
  "https://backlink-generator-tool.github.io/iframe-html-rotator/pages/page3.html",
  "https://backlink-generator-tool.github.io/iframe-html-rotator/pages/page4.html",
  "https://backlink-generator-tool.github.io/iframe-html-rotator/pages/page5.html",
  "https://backlink-generator-tool.github.io/iframe-html-rotator/pages/page6.html",
  "https://backlink-generator-tool.github.io/iframe-html-rotator/pages/page7.html",
  "https://backlink-generator-tool.github.io/iframe-html-rotator/pages/page8.html",
  "https://backlink-generator-tool.github.io/iframe-html-rotator/pages/page9.html",
  "https://backlink-generator-tool.github.io/iframe-html-rotator/pages/page10.html",
  "https://backlink-generator-tool.github.io/iframe-html-rotator/pages/page11.html",
  "https://backlink-generator-tool.github.io/iframe-html-rotator/pages/page12.html",
  "https://backlink-generator-tool.github.io/iframe-html-rotator/pages/page13.html",
  "https://backlink-generator-tool.github.io/iframe-html-rotator/pages/page14.html",
  "https://backlink-generator-tool.github.io/iframe-html-rotator/pages/page15.html",
  "https://backlink-generator-tool.github.io/iframe-html-rotator/pages/page16.html",
  "https://backlink-generator-tool.github.io/iframe-html-rotator/pages/page17.html",
  "https://backlink-generator-tool.github.io/iframe-html-rotator/pages/page18.html",
  "https://backlink-generator-tool.github.io/iframe-html-rotator/pages/page19.html",
  "https://backlink-generator-tool.github.io/iframe-html-rotator/pages/page20.html"
]);

const iframes = [];

// Create 15 hidden iframes on the page
for (let i = 0; i < 15; i++) {
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
