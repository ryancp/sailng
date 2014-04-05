/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */



// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
  'styles/**/*.css'
];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [
  'bower_components/angular/angular.js',
  'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
  'bower_components/angular-ui-router/release/angular-ui-router.js',
  'bower_components/angular-ui-utils/modules/route/route.js',
  'bower_components/socket.io-client/dist/socket.io.min.js',
  'bower_components/sails.io.js/dist/sails.io.js',
  'bower_components/angular-sails/dist/angular-sails.js',
  'bower_components/lodash/dist/lodash.js',
  'bower_components/moment/moment.js',
  'bower_components/angular-moment/angular-moment.js',
  'bower_components/angular-translate/angular-translate.js',
  'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',

  //
  // *->    you might put other dependencies like jQuery or Angular here   <-*
  //

  // All of the rest of your app scripts
  'src/**/*.js'
];

module.exports.jsFilesToInjectNoPathChange = jsFilesToInject;


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  // 'templates/**/*.html'
  'src/**/*.tpl.html'
];


// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});
