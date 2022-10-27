const $ = require("jquery");

const initJquery = () => {
    $(function() {
        $("a.clabs-underline").on("click", () => {
            $("#download").hide();
        })
    });
};

module.exports = initJquery;