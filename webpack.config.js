const  path = require('path');
const  HtmlWebpackPlugins = require('html-webpack-plugin');
     

module.exports ={
  entry:'./src/index.js',
  output:{
    filename:"xf.js",
    path:path.resolve(__dirname,'dist')
  },
  devtool:'source-map',
  resolve:{
    modules:[path.resolve(__dirname,''),path.resolve(__dirname,'./node_modules')]
  },
  plugins:[
    new HtmlWebpackPlugins({
       template:path.resolve(__dirname,'public/index.html')
    })
  ]
}