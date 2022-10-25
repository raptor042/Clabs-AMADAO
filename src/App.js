const Alpine = require("alpinejs/dist/module.cjs");
const Index = require("./html/index.html");

// import Alpine from "alpinejs";
// import Index from "./html/index.html";


const initAlpine = () => {
    window.Alpine = Alpine;

    // console.log(window.Alpine);

    Alpine.start();

    document.getElementById("clabs").innerHTML = Index;
}

module.exports = initAlpine;

// export default initAlpine;