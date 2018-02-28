//Built in nodejs package, which will difen the path for the current file
// css-loader -> will handle the css imports in the javascript file
// 

var path = require('path');
var webpack = require('webpack');
module.exports = {
// Where should be start the journey
// relative path!!
	entry:  "./src/js/app.js",
	output:{
//Where to store the bundle		
//Absolute path, wepback needs to create files
		path: path.resolve(__dirname,"dist"),
//outputted filename		
		filename:"bundle.js",
//Tell webpack-dev-server, where the assets will be stored
		publicPath:"/dist"
	},
//How wepback should treat the different modules/imported files	
	module:{
		rules:[
		{
//checking the filenames with regular expression
			test:/\.css/,
			// loader:"css-loader" 1 loader
//you can determine multiple loader, order is imporant!
//Wepback will execute the loaders in reversed order
			use:[
			'style-loader',  //2nd
			"css-loader"	 //1st
			]
		}

		]
	},
//This is where you could put your plugins
	// plugins:[
	// new webpack.optimize.UglifyJsPlugin({
	// 	//... options
	// })
	// ]
};