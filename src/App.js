const Alpine = require("alpinejs");
const Index = require("./html/index.html");

const initAlpine = () => {
    window.Alpine = Alpine;
    Alpine.start();

    document.getElementById("clabs").innerHTML = Index;
}

module.exports = initAlpine;