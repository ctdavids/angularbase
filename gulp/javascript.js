var gulp       = require('gulp');
var config = require('../gulp.config')();
var concat     = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var plumber    = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var uglify     = require('gulp-uglify');
var livereload = require('gulp-livereload');
var jshint     = require('gulp-jshint');

// lints all JS files in dev/js
gulp.task('lint', function(){
	return gulp.src('./dev/js/*.js')
	    .pipe(jshint())
	    .pipe(jshint.reporter('default'));
});

gulp.task('js', function () {
    return gulp.src(config.source)
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(concat('app.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dest + 'js/'))
        .pipe(livereload());
});

gulp.task('js:watch', ['js'], function () {
    livereload.listen();
    gulp.watch(config.source, ['js'])
});