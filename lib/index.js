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
  ]);
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
//  require('./escomplex')(gulp, config);
//  require('./cost')(gulp, config);

  gulp.task('comp', 'Runs Complexity Analysis on Source Files', [
    'size',
    'complexity',
    'plato'
//    'escomplex',
//    'cost'
  ]);
}

module.exports = gulpSetup;
