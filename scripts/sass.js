"use strict";

// Requirements
var sass = require('sass');
var fs = require('fs');
var mkdirp = require('mkdirp');
var getDirName = require('path').dirname;

function compileSass(options) {
    // set default options
    options = Object.assign({
        style: 'expanded'
    }, options);

    // render the result

    var result = sass.compile(options.src, {
        style: options.style,
        sourceMap: options.sourceMap,
        verbose: options.debug
    });

    // write the result to file

    mkdirp(getDirName(options.dest)).then(function () {
        fs.writeFileSync(options.dest, result.css);
    });

    // log successful compilation to terminal
    console.log(' ' + options.dest + ' built.');
}

// Compile all SCSS files in scss/ that do not start with _
var path = require('path');
fs.readdirSync('scss').forEach(function (file) {
    if (file.endsWith('.scss') && !file.startsWith('_')) {
        compileSass({
            src: path.join('scss', file),
            dest: path.join('css', file.replace(/\.scss$/, '.min.css')),
            style: 'compressed',
            sourcemap: false,
            debug: false
        });
    }
});
