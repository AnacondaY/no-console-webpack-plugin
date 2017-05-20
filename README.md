# no-console-webpack-plugin
A webpack plugin to clear specific type of console
install
---
```
$ npm install debug
```
usage
---
```
const NoConsolePlugin = require('no-console-webpack-plugin');

//in your webpack.config.js
{
	plugins:[new NoConsolePlugin()]
}
```

options
---

### ignores:{String|Array}  
```
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