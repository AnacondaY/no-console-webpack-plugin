const debug = require('debug')('no-console-webpack-plugin');

class NoConsolePlugin{
    constructor(options = {}){
        this.options = options;
        //all methods of console
        this.types = [
            'log', 
            'info', 
            'warn', 
            'error',
            'assert',
            'count',
            'clear',
            'group' ,
            'groupEnd',
            'groupCollapsed',
            'trace' ,
            'debug', 
            'dir' ,
            'dirxml', 
            'profile',
            'profileEnd' ,
            'time',
            'timeEnd',
            'timeStamp' ,
            'table',
            'exception'
        ];
        if(typeof options.ignores === 'string'){
            options.ignores = [options.ignores];
        }
        if(!options.ignores || !Array.isArray(options.ignores)){
            options.ignores = [];
        }
        debug('ignores');
        options.ignores.forEach((type, index) => {
            if(this.types.indexOf(type) !== -1){
                this.types.splice(index, 1);
            }
        });
    }


    /**
     * invoked when webpack plugins calling
     * @param {webpack:Compiler} compiler 
     */
    apply(compiler){
        const {types} = this;
        compiler.plugin('emit', function(compilation, cb){
            compilation.chunks.forEach(chunk => {
                chunk.files.forEach(function(filename){
                    let source = compilation.assets[filename].source();
                    const syntax = ['console', 'window.console'];
                    const consoleReg = new RegExp(`(${syntax.join('|')}).(?:${types.join('|')})\\s{0,}\\([^;]*\\)(?!\\s*[;,]?\\s*\\/\\*\\s*\\s*\\*\\/)\\s{0,};?`, 'gi');
                    source = source.replace(consoleReg, '');
                    compilation.assets[filename] = {
                        source: () => source,
                        size: () => source.length
                    };
                });
            });
            cb();
        });
    }
}

module.exports =  NoConsolePlugin;