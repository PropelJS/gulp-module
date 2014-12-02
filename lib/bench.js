'use strict';

var gulp = null;
var config = null;
var path = require('path');
var exec = require('child_process').exec;

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
 * @param {Function} done - the callback function
 */
function benchTask(done) {
  var benchPath = path.resolve(__dirname, '../node_modules/benchmark/bin/_benchmark');

  var cmd = 'node --harmony ';
  cmd += benchPath;
  cmd += ' test/benchmarks';

  exec(cmd, function execCallback (err, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);

    done(err);
  });
}

module.exports = setupBench;
