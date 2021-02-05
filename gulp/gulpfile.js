const { src, dest, parallel } = require('gulp');
const rename = require('gulp-rename');
const minifyJS = require('gulp-uglify');
const minifyCSS = require('gulp-uglifycss');
const image = require('gulp-image');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const cssimport = require('gulp-cssimport');

sass.compiler = require('node-sass');

// Função para comprimir .js
function javascript() {
    return src('src/js/*.js')
        .pipe( babel({
            presets:['@babel/env']
        }))
        .pipe(minifyJS())
        .pipe(rename( { extname:'.min.js' } ))
        .pipe(dest('dist/assets/js/'));
}

// Função para comprimir .css
function css() {
    return src('src/css/*.css')
        .pipe( cssimport() )
        .pipe(minifyCSS( {'maxLineLen':80, 'uglyComments':true} ))
        .pipe(rename( {extname:'.min.css'} ))
        .pipe(dest('dist/assets/css/'));
}

// Função para comprimir images
function optimizeImage() {
    return src('src/images/*.jpg')
        .pipe(image())
        .pipe(dest('dist/assets/images/'))
}

// Função para comprimir .sass
function convertSass() {
    return src('src/css/*.scss')
        .pipe( sass({outputStyle:'compressed'}) )
        .pipe( rename({extname:'.min.css'}) )
        .pipe( dest('dist/assets/css/') )
}

exports.default = parallel(javascript, css, convertSass, optimizeImage );