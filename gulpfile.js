'use strict';

var gulp = require('gulp');

var fs = require('fs');
var browserify = require('browserify');
var watchlify = require('watchify');

var b = browserify({
    entries: ['./src/app/index.js'],
    cache: [],
    packageCache: [],
    verbose: true,
    debug: true
});

b.on('update', bundle);
b.transform('babelify');

function bundle(){
    b.bundle()
    .on('error', function(err){
        console.log(err.message);
        console.log(err.stack);
    })
    .pipe(fs.createWriteStream('./www/dist/bundle.js'))
    ;
}

gulp.task('default', bundle);

gulp.task('watch', function(){
    b.plugin(watchlify);
    bundle();
});
