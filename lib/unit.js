'use strict';

var exec = require('child_process').exec;
var path = require('path');

var gulp = null;
var config = null;

/**
 * Sets up the unit task
 *
 * @param {Object} gulpRef The gulp instance to attach the task to
 * @param {Object} conf The configuration object
 **/
function setupUnit (gulpRef, conf) {
  gulp = gulpRef;
  config = conf;

  gulp.task('unit', false, [], unitTask);
}

/**
 * Runs the unit test task
 *
 * @param {Function} done The callback function
 */
function unitTask (done) {
  var istanbulPath = path.resolve(__dirname, '../node_modules/istanbul/lib/cli.js');
  var mochaPath = path.resolve(__dirname, '../node_modules/mocha/bin/_mocha');
  var outputDir = path.resolve(config.root, 'docs/coverage');

  var cmd = 'node --harmony ';
  cmd += istanbulPath;
  cmd += ' cover';
  cmd += ' --dir ' + outputDir;
  // breaking up the following line since it's messing with the docs generator
  cmd += ' -x "**' + '/docs/' + '**"';
  cmd += ' ' + mochaPath;
  cmd += ' -- --harmony --recursive test/unit';

  exec(cmd, function execCallback (err, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);

    done(err);
  });
}

module.exports = setupUnit;
