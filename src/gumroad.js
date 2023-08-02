{
  const script = document.createElement("script");
  script.src = "https://assets.gumroad.com/packs/js/overlay-902617c9f13ff823507a.js";
  script.charset = "utf-8";
  document.head.appendChild(script);
    document.head.innerHTML += '<link rel="stylesheet" href="https://assets.gumroad.com/packs/css/overlay-f5583d1f.css" />';

    const loaderScript = document.querySelector("script[src*='/js/gumroad.js']");
    loaderScript.dataset.stylesUrl = "https://assets.gumroad.com/packs/css/design-4f4956d8.css";
}
