'use strict';

var exec = require('child_process').exec;
var path = require('path');

var gulp = null;
var config = null;

/**
 * Sets up the coverage task
 *
 * @param {Object} gulpRef The gulp instance to attach the task to
 * @param {Object} conf The configuration object
 **/
function setupCoverage (gulpRef, conf) {
  gulp = gulpRef;
  config = conf;

  gulp.task('cover', false, [
    'unit'
  ], coverageTask);
}

/**
 * Runs the coverage task
 *
 * @param {Function} done The callback function
 * @return {Object|null} err An error if one occurs otherwise null
 **/
function coverageTask (done) {
  var istanbulPath = path.resolve(__dirname, '../node_modules/istanbul/lib/cli.js');
  // splitting this line up due to interference with the doc generator
  var coverageFiles = path.resolve(config.root, 'docs/coverage/' + '**/coverage*.json');

  var cmd = 'node --harmony ';
  cmd += istanbulPath;
  cmd += ' check-coverage';
  cmd += ' --statements ' + config.statementsThreshold;
  cmd += ' --functions ' + config.functionsThreshold;
  cmd += ' --branches ' + config.branchesThreshold;
  cmd += ' --lines ' + config.linesThreshold;
  cmd += ' ' + coverageFiles;

  exec(cmd, function execCallback (err, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);

    done(err);
  });
}

module.exports = setupCoverage;
