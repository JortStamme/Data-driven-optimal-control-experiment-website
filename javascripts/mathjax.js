window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex|md-ellipsis"
  }
};

document$.subscribe(() => {
  MathJax.startup.output.clearCache();
  MathJax.typesetClear();
  MathJax.texReset();
  MathJax.typesetPromise();
});

// Render LaTeX inside MkDocs Material search results
const searchList = document.querySelector(".md-search-result__list");
if (searchList) {
  const observer = new MutationObserver(() => {
    const targets = searchList.querySelectorAll(
      ".md-search-result__title:not([data-mathjax]), .md-search-result__teaser:not([data-mathjax])"
    );
    if (!targets.length) return;

    targets.forEach((el) => {
      el.setAttribute("data-mathjax", "true");
      if (el.textContent.includes("\\(")) {
        el.innerHTML = el.innerHTML.replace(/\\\([\s\S]*?\\\)/g, (match) => {
          const clean = match.replace(/<\/?mark[^>]*>/gi, "");
          return `<span class="arithmatex">${clean}</span>`;
        });
      }
    });

    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([searchList]);
    }
  });

  observer.observe(searchList, { childList: true, subtree: true });
}