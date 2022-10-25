const injectCSS = () => {
    let link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "./dist/styles.css";

    let head = document.head;
    head.appendChild(link);
};

module.exports = injectCSS;

// export default injectCSS;