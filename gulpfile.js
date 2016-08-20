var gulp = require('gulp');
var	postcss = require('gulp-postcss');
var cssmin = require('gulp-cssmin');

// Plugins
var processors = [
	require('postcss-quantity-queries')(), //https://github.com/pascalduez/postcss-quantity-queries
	require('postcss-short')(), //https://github.com/jonathantneal/postcss-short
	require('postcss-import')(), //https://github.com/postcss/postcss-import
	require('postcss-assets')(), //https://github.com/assetsjs/postcss-assets
	require('postcss-short')(), //https://github.com/jonathantneal/postcss-short
	require('postcss-nested')(), //https://github.com/postcss/postcss-nested
	require('postcss-simple-vars')(), //https://github.com/postcss/postcss-simple-vars
	require('autoprefixer')(), //https://github.com/postcss/autoprefixer
];

// CSS task
gulp.task('css', function() {
	return gulp
		.src('app/css/global.css') //Input
		.pipe(postcss(processors))
		//.pipe(cssmin())
		.pipe(gulp.dest('dist')); // Output
});
