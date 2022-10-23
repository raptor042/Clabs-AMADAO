let mix = require("laravel-mix");

mix.js("index.js", "dist/index.js").setPublicPath("dist");

mix.webpackConfig({
    module : {
        rules : [
            {
                test : /\.html$/,
                loader : "html-loader"
            }
        ]
    }
});