var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var paths = {
  scripts: [
    'assets/vendor/angular/angular.js',
    'assets/vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
    'assets/vendor/angular-ui-router/release/angular-ui-router.js',
    'assets/vendor/angular-ui-utils/modules/route/route.js',
    'assets/vendor/socket.io-client/dist/socket.io.min.js',
    'assets/vendor/sails.io/sails.io.js',
    'assets/vendor/angular-sails/angular-sails.js',
    'assets/vendor/lodash/dist/lodash.js',
    'assets/vendor/moment/moment.js',
    'assets/vendor/angular-moment/angular-moment.js',
    'assets/vendor/angular-translate/angular-translate.js',
    'assets/vendor/angular-translate-loader-static-files/angular-translate-loader-static-files.js',

    'assets/src/**/*.js'
  ]
};

gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(concat('production.js'))
    .pipe(gulp.dest('.tmp/public/min-gulp'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch(paths.scripts, ['scripts']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'watch']);