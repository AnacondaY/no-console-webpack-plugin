# no-console-webpack-plugin
A webpack plugin to clear specific type of console
## Install
```bash
	npm install no-console-webpack-plugin --save-dev
```
Or
```bash
	yarn add no-console-webpack-plugin --dev
```
## Usage
```js
const NoConsolePlugin = require('no-console-webpack-plugin');
module.exports = {
	//in your webpack.config.js
	//o
	plugins:[
		new NoConsolePlugin()
	]
}
```

## Options

### ignores:{String|Array}  
```js
new NoConsolePlugin({
	ignores:'log'
});
//or
new NoConsolePlugin({
	ignores:[
		'log',
		'info',
		'warn'
	]
})
```