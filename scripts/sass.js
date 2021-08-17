"use strict";

// Requirements
var sass = require('node-sass');
var fs = require('fs');
var mkdirp = require('mkdirp');
var getDirName = require('path').dirname;

function compileSass(options) {
    // set default options
    options = Object.assign({
        style: 'expanded'
    }, options);

    // render the result
    var result = sass.renderSync({
        file: options.src,
        outputStyle: options.style,
        sourceMap: options.sourceMap,
        debug: options.debug
    });

    // write the result to file
    mkdirp(getDirName(options.dest)).then(function() {
        fs.writeFileSync(options.dest, result.css);
    });

    // log successful compilation to terminal
    console.log(' ' + options.dest + ' built.');
}

// Minified
compileSass({
    src : 'scss/style.scss',
    dest : 'css/style.min.css',
    style: 'compressed',
    sourcemap: false,
    debug: false
});