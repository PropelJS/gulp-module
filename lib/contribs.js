'use strict';

var contribs = require('gulp-contribs');
var path = require('path');

var gulp = null;
var config = null;

/**
 * Setups up the contributors task
 *
 * @param {Object} gulpRef The gulp instance to attach the task to
 * @param {Object} conf The configuration object
 */
function setupContribs(gulpRef, conf) {
  gulp = gulpRef;
  config = conf;

  gulp.task('contribs', false, [], contribsTask);
}

/**
 * Runs the contributors task
 *
 * @return {Stream} src The created file stream
 */
function contribsTask() {
  var fp = path.resolve(config.root, 'contributors.md');
  return gulp.src(fp)
    .pipe(contribs())
    .pipe(gulp.dest(config.root));
}

module.exports = setupContribs;
