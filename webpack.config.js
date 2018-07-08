function rewriteUrl(replacePath) {
    return function (req, opt) {
        var queryIndex = req.url.indexOf('?');
        var query = queryIndex >= 0 ? req.url.substr(queryIndex) : "";
        req.url = req.path.replace(opt.path, replacePath) + query;
    };
}
let htmlWebpack=require('html-webpack-plugin');
const VueLoaderPlugin=require('vue-loader/lib/plugin');
module.exports={
/*    devServer: {
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
    },*/
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.(jpg|png|gif)$/,
                use:['url-loader?limit=8192']
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpack({
            template:'./src/index.html',
            //filename:'login.html'
        }),
        new VueLoaderPlugin()
    ]
}