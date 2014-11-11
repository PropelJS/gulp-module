'use strict';

var size = require('gulp-size');

var gulp = null;
var config = null;

/**
 * Sets up the size task
 *
 * @param {Object} gulpRef The gulp instance to attach the task to
 * @param {Object} conf The configuration object
 */
function setupSize (gulpRef, conf) {
  gulp = gulpRef;
  config = conf;

  gulp.task('size', false, [], sizeTask);
}

/**
 * Runs the size task
 *
 * @return {Stream}
 */
function sizeTask () {
  return gulp.src(config.src)
    .pipe(size({showFiles: true}));
}

module.exports = setupSize;
