const injectCSS = () => {
    let link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/gh/benjamin1234-ben/Clabs-AMADAO@master/dist/styles.css";

    let head = document.head;
    head.appendChild(link);
};

module.exports = injectCSS;