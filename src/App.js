const Alpine = require("alpinejs");
const Index = require("./html/index.html");

// import Alpine from "alpinejs";
// import Index from "./html/index.html";


const initAlpine = () => {
    document.addEventListener("DOMContentLoaded", event => {
        if(!window.Alpine) {
            window.Alpine = Alpine;

            Alpine.start();

            document.getElementById("clabs").innerHTML = Index;
        }
    })
}

module.exports = initAlpine;

// export default initAlpine;