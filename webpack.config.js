function rewriteUrl(replacePath) {
    return function (req, opt) {
        var queryIndex = req.url.indexOf('?');
        var query = queryIndex >= 0 ? req.url.substr(queryIndex) : "";
        req.url = req.path.replace(opt.path, replacePath) + query;
    };
}
module.exports={
    devServer: {
       port:9094,
       contentBase:'/dist',
       proxy:[
           {
               path: /^\/api\/(.*)/,
               target: "http://localhost:8080/",
               rewrite: rewriteUrl('/$1\.json'),
               changeOrigin: true
           }
       ]
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}