const $ = require("jquery");
const fs = require("fs");
const Index = fs.readFileSync("./html/index.html");

// const Index = require("./html/index.html");

const initJquery = () => {
    console.log(Index);
    $(function() {
        $("#clabs").html(Index);

        $("a.clabs-underline").on("click", () => {
            $("#download").hide();
        })
    });
};

module.exports = initJquery;