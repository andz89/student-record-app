
const path = require('path')
module.exports ={
   
    entry: './app/scripts/App.js',
    output: {
        filename:"bundled.js",
        path: path.resolve(__dirname, "app")
    },
    mode: "development",
    watch: true,
    
    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: ['style-loader', 'css-loader', "sass-loader"],
          },
        ],
      },
}
