'use strict';

var jsvalidate = require('gulp-jsvalidate');

var gulp = null;
var config = null;

/**
 * Sets up the jsvalidate task
 *
 * @param {Object} gulpRef The gulp instance to attach the task to
 * @param {Object} conf The configuration object
 */
function setupJSValidate (gulpRef, conf) {
  gulp = gulpRef;
  config = conf;

  gulp.task('jsvalidate', false, [], jsValidateTask);
}

/**
 * Runs the jsvalidate task
 *
 * @return {Stream}
 */
function jsValidateTask () {
  return gulp.src(config.src)
    .pipe(jsvalidate());
}

module.exports = setupJSValidate;
