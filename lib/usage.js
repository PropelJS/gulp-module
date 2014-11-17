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

  gulp.task('usage', 'Runs the memory and CPU usage tests and ensures they meet guidelines', [], usageTask);
}

/**
 * Runs the usage task
 *
 */
function usageTask() {
  console.log('usage functionality goes here');
}

module.exports = setupUsage;
