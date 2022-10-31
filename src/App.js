const $ = require("jquery");
let Index;

const initHTML = () => {
    fetch("https://cdn.jsdelivr.net/gh/benjamin1234-ben/Clabs-AMADAO@master/src/html/index.html")
    .then(res => res.text())
    .then(text => {
        console.log(text);
        Index = text;
    }).catch(err => console.log(err));
}

const initJquery = () => {
    $(function() {
        $("#clabs").html(Index);

        $("a.clabs-underline").on("click", () => {
            $("#download").hide();
        })
    });
};

module.exports = { initJquery, initHTML };