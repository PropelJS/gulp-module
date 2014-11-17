'use strict';

var help = require('gulp-help');

/**
 * Sets up the gulp tasks
 *
 * @param {Object} gulp The instance of gulp to attach the tasks to
 * @param {Object} config The configuration object
 */
function gulpSetup(gulp, config) {
  help(gulp);

  defineLint(gulp, config);
  defineComplexity(gulp, config);
  defineTest(gulp, config);
  defineBuild(gulp, config);
  defineDev(gulp, config);
}

/**
 * Defines the lint task
 *
 * @param {Object} gulp The instance of gulp to attach the tasks to
 * @param {Object} config The configuration object
 */
function defineLint(gulp, config) {
  require('./jsvalidate')(gulp, config);
  require('./jshint')(gulp, config);
  require('./jscs')(gulp, config);
  require('./jscpd')(gulp, config);

  gulp.task('lint', 'Lints Source Files for Errors and Coding Style', [
    'jsvalidate',
    'jshint',
    'jscs',
    'jscpd'
  ], function() {});
}

/**
 * Defines the complexity task
 *
 * @param {Object} gulp The instance of gulp to attach the tasks to
 * @param {Object} config The configuration object
 */
function defineComplexity (gulp, config) {
  require('./size')(gulp, config);
  require('./complexity')(gulp, config);
  require('./plato')(gulp, config);
  require('./escomplex')(gulp, config);
  require('./cost')(gulp, config);

  gulp.task('comp', 'Runs Complexity Analysis on Source Files', [
    'size',
    'complexity',
    'plato',
    'escomplex',
    'cost'
  ], function() {});
}

/**
 * Defines the test task
 *
 * @param {Object} gulp The instance of gulp to attach the tasks to
 * @param {Object} config The configuration object
 */
function defineTest (gulp, config) {
  require('./unit')(gulp, config);
  require('./coverage')(gulp, config);

  gulp.task('test', 'Runs Unit Tests Against Source Files', [
    'unit',
    'cover'
  ], function() {});
}

/**
 * Defines the build task
 *
 * @param {Object} gulp The instance of gulp to attach the tasks to
 * @param {Object} config The configuration object
 */
function defineBuild (gulp, config) {
  require('./contribs')(gulp, config);
  require('./todo')(gulp, config);
  require('./changelog')(gulp, config);
  require('./docs')(gulp, config);
  require('./bench')(gulp, config);
  require('./usage')(gulp, config);

  gulp.task('build', 'Runs the Tools Needed for a Complete Build', [
    'lint',
    'test',
    'comp',
    'bench',
    'usage',
    'contribs',
    'todo',
    'changelog',
    'docs'
  ], function() {});
}

/**
 * Defines the dev task
 *
 * @param {Object} gulp The instance of gulp to attach the tasks to
 * @param {Object} config The configuration object
 */
function defineDev (gulp, config) {
  gulp.task('dev', 'Runs the Development Workflow', [], function() {
    var watcher = gulp.watch(config.watch, ['lint', 'unit']);
    watcher.on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
  });
}

module.exports = gulpSetup;
