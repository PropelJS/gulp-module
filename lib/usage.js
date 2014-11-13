'use strict';

var gulp = null;
var config = null;

/**
 * Sets up the usage task
 *
 * @param {Object} gulpRef The gulp instance to attach the task to
 * @param {Object} conf The configuration object
 */
function setupUsage(gulpRef, conf) {
  gulp = gulpRef;
  config = conf;

  gulp.task('todo', false, [], usageTask);
}

/**
 * Runs the usage task
 *
 */
function usageTask() {

}

module.exports = setupUsage;
