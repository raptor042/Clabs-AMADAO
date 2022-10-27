const $ = require("jquery");
const Index = require("./html/index.html");

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