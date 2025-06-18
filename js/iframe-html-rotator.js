  // Hardcoded array of HTML links
  const htmlFiles = [
    "page1.html",
    "page2.html",
    "page3.html",
    "page4.html",
    "page5.html",
    "page6.html",
    "page7.html",
    "page8.html",
    "page9.html",
    "page10.html",
    "page11.html",
    "page12.html",
    "page13.html",
    "page14.html",
    "page15.html",
    "page16.html",
    "page17.html",
    "page18.html",
    "page19.html",
    "page20.html"
  ];

  // Shuffle function
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const shuffledLinks = shuffleArray([...htmlFiles]);
  let currentIndex = 0;
  let iframeCount = 0;
  const maxIframes = 15;

  function loadNextIframe() {
    if (currentIndex >= shuffledLinks.length || iframeCount >= maxIframes) return;

    const iframe = document.createElement("iframe");
    iframe.src = shuffledLinks[currentIndex];
    document.body.appendChild(iframe);

    currentIndex++;
    iframeCount++;

    if (currentIndex < shuffledLinks.length && iframeCount < maxIframes) {
      setTimeout(loadNextIframe, 15000); // wait 15 seconds before next iframe
    }
  }

  // Start the loop
  loadNextIframe();
