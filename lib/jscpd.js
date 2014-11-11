'use strict';

var jscpd = require('gulp-jscpd');

var gulp = null;
var config = null;

/**
 * Sets up the jscpd task
 *
 * @param {Object} gulpRef The gulp instance to attach the task to
 * @param {Object} conf The configuration object
 */
function setupJSCPD (gulpRef, conf) {
  gulp = gulpRef;
  config = conf;

  gulp.task('jscpd', false, [], jscpdTask);
}

/**
 * Runs the jscpd task
 *
 * @return {Stream} src The file stream created
 */
function jscpdTask () {
  return gulp.src(config.src)
    .pipe(jscpd({
      'min-lines': true
    }));
}

module.exports = setupJSCPD;
