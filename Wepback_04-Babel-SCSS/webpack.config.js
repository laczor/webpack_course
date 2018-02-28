var path = require('path');

//Import our plugin, which will make seperate css files from the transpiled code
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//We need to instantiate the object and determine it's css name
var extractPlugin = new ExtractTextPlugin({
	filename:"main.css"			//will be placed in the /dist
});

module.exports = {
	entry:  "./src/js/app.js",
	output:{
		path: path.resolve(__dirname,"dist"),
		filename:"bundle.js",
		publicPath:"/dist"
	},
	module:{
		rules:[
		{
			test:/\.js$/,
			use:[
//configure the options of the loader
			{	
				loader:"babel-loader",
				options:{
					presets:["es2015"]
				}
			}
			]

		},
//want to extract the transpiled code into a seperate file
//So we can't just simply populate the use array	
//We have to use the instatiate plugin
//It will execute it's extract method, in which you have to include all of the loaders
//loaders are executed in reversed order
//It is telling the plugin, what to extract
		{
			test:/\.scss/,
			use: extractPlugin.extract({
				use:['css-loader',"sass-loader"]
			})
		}

		]
	},
//Will execute our plugin	
	plugins:[
		extractPlugin
	]
};