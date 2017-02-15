/**
* @Author: Daniil Godoriloff
* @Date:   2016-10-25T22:31:19+07:00
* @Last modified by:   Daniil Godoriloff
* @Last modified time: 2017-02-15T23:36:49+07:00
*/




var //gulp plugins
	postcss = require('gulp-postcss'),
	browserSync  = require('browser-sync').create(),
  cssmin = require('gulp-cssmin'),
  gulp = require('gulp');

var //variables
	input = "./app";
	output = "./build";


// Plugins
var processors = [
	require('postcss-quantity-queries')(), //https://github.com/pascalduez/postcss-quantity-queries
	require('postcss-short')(), //https://github.com/jonathantneal/postcss-short
	require('postcss-import')(), //https://github.com/postcss/postcss-import
	require('postcss-closure-mixins'), //https://github.com/dynatrace-innovationlab/postcss-closure-mixins
	require('postcss-assets')(), //https://github.com/assetsjs/postcss-assets
	require('postcss-grid'), //https://github.com/andyjansson/postcss-grid
	require('postcss-short')(), //https://github.com/jonathantneal/postcss-short
	require('postcss-simple-vars')(), //https://github.com/postcss/postcss-simple-vars
	require('postcss-nested')(), //https://github.com/postcss/postcss-nested
	require('autoprefixer')(), //https://github.com/postcss/autoprefixer

];

gulp.task('js', function() {
	return gulp
		.src(input + "/**/*.js")
		//
		.pipe(gulp.dest(output))
		.pipe(browserSync.stream());
});

gulp.task('php', function() {
	return gulp
		.src(input + "/**/*.php")
		//
		.pipe(gulp.dest(output))
		.pipe(browserSync.stream());
});

gulp.task('htaccess', function() {
	return gulp
		.src(input + "/**/.htaccess")
		//
		.pipe(gulp.dest(output))
		.pipe(browserSync.stream());
});


gulp.task('upload', function() {
	return gulp
		.src(input + "/upload/**/*.*")
		//
		.pipe(gulp.dest(output +'/upload/'))
		.pipe(browserSync.stream());
});



// CSS task
gulp.task('css', function() {
	return gulp
		.src(input + '/css/*.prod.css') //Input
		.pipe(postcss(processors))
		//.pipe(cssmin())
		.pipe(gulp.dest(output +'/css')) // Output
		.pipe(browserSync.stream());
});


gulp.task('serve', ['css','js','php','htaccess','upload'], function() {

    browserSync.init({
        proxy: "gulp-postcss-my-php-project"
    });

    gulp.watch(input + "/css/*.css", ['css']);
    gulp.watch(input + "/**/*.js", ['js']);
    gulp.watch(input + "/upload/*.*", ['upload']);
		gulp.watch(input + "/**/.htaccess", ['htaccess']);
		gulp.watch(input + "/**/*.php", ['php']).on('change', browserSync.reload);
});


gulp.task('default', ['serve']);
