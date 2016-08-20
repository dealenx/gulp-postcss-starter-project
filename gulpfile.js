var gulp = require('gulp'),
	postcss = require('gulp-postcss');

// Plugins
var processors = [
	require('autoprefixer')({ browsers: ['last 2 versions', 'Firefox > 20']  }), //https://github.com/postcss/autoprefixer
	require('cssnext')(), //https://github.com/MoOx/postcss-cssnext
	require('postcss-quantity-queries')(), //https://github.com/pascalduez/postcss-quantity-queries
	require('postcss-short')(), //https://github.com/jonathantneal/postcss-short
	require('postcss-import')(), //https://github.com/postcss/postcss-import
	require('postcss-assets')(), //https://github.com/assetsjs/postcss-assets
	require('postcss-short')(), //https://github.com/jonathantneal/postcss-short
	require('postcss-nested')(), //https://github.com/postcss/postcss-nested
];

// CSS task
gulp.task('css', function() {
	return gulp
		.src('app/css/global.css') //Input
		.pipe(postcss(processors))
		.pipe(gulp.dest('dist')); // Output
});
