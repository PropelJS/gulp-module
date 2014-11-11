'use strict';

var complexity = require('gulp-complexity');

var gulp = null;
var config = null;

/**
 * Sets up the complexity task
 *
 * @param {Object} gulpRef The gulp instance to attach the task to
 * @param {Object} conf The configuration Object
 */
function complexitySetup (gulpRef, conf) {
  gulp = gulpRef;
  config = conf;
  gulp.task('complexity', false, [], complexityTask);
}

/**
 * Runs the complexity task
 *
 * @return {Stream} src The created file stream
 */
function complexityTask() {
  return gulp.src(config.src)
    .pipe(complexity({
      cyclomatic: [5, 10, 15],
      halstead: [15, 30, 45],
      maintainability: 100,
      breakOnErrors: true
    }));
}

module.exports = complexitySetup;
