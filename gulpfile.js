/*eslint-env node */

var gulp = require('gulp');
var jasmine = require('gulp-jasmine-phantom');

gulp.task('tests', function () {
	gulp.src('tests/spec/extraSpec.js')
		.pipe(jasmine({
			integration: true,
			vendor: 'js/**/*.js'
		}));
});
