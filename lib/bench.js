'use strict';

var gulp = null;
var config = null;

/**
 * Sets up the bench task
 *
 * @param {Object} gulpRef The gulp instance to attach the task to
 * @param {Object} conf The configuration object
 */
function setupBench(gulpRef, conf) {
  gulp = gulpRef;
  config = conf;

  gulp.task('bench', 'Runs benchmarks and ensure they pass guidelines', [], benchTask);
}

/**
 * Runs the bench task
 *
 */
function benchTask() {
  console.log('bench functionality goes here');
}

module.exports = setupBench;
