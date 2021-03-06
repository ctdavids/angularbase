// Define Task for 'REV'
var gulp = require('gulp');
var config = require('../gulp.config')();

gulp.task('wiredep', ['wiredep:script', 'wiredep:style']);

gulp.task('wiredep:style', function() {
    var wiredep = require('wiredep').stream;
    var options = config.wiredep();
    
   var sources = gulp.src("**/*.css", {read: false});

   return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe(gulp.dest(config.client));
});


gulp.task('wiredep:script', function() {
    var wiredep = require('wiredep').stream;
    var options = config.wiredep();
    
   var sources = gulp.src(config.clientSource, {read: false});

   return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe(gulp.dest(config.client));
});
