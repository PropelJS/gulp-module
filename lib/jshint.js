'use strict';

var jshint = require('gulp-jshint');

var gulp = null;
var config = null;

/**
 * Sets up the jshint task
 *
 * @param {Object} gulpRef The gulp instance to attach the task to
 * @param {Object} conf The configuration object
 */
function jsHintSetup (gulpRef, conf) {
  gulp = gulpRef;
  config = conf;

  gulp.task('jshint', false, [], jshintTask);
}

/**
 * Runs the jshint task
 *
 * @return {Stream}
 */
function jshintTask () {
  return gulp.src(config.src)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
}

module.exports = jsHintSetup;
