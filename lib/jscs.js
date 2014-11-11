'use strict';

var jscs = require('gulp-jscs');

var gulp = null;
var config = null;

/**
 * Sets up the jscs task
 *
 * @param {Object} gulpRef The gulp instance to attach the task to
 * @param {Object} conf The configuration object
 */
function jscsSetup (gulpRef, conf) {
  gulp = gulpRef;
  config = conf;

  gulp.task('jscs', false, [], jscsTask);
}

/**
 * Runs the jscs task
 *
 * @return {Stream}
 */
function jscsTask () {
  return gulp.src(config.src)
    .pipe(jscs());
}

module.exports = jscsSetup;
