'use strict';

var exec = require('child_process').exec;
var path = require('path');

var gulp = null;
var config = null;

/**
 * Setups up the documentation generator task
 *
 * @param {Object} gulpRef The gulp instance to attach the task to
 * @param {Object} conf The configuration object
 */
function setupDocs(gulpRef, conf) {
  gulp = gulpRef;
  config = conf;

  gulp.task('docs', 'Generates the Documentation', [], docsTask);
}

/**
 * Runs the documentation task
 *
 * @param {Function} done Callback function
 */
function docsTask(done) {
  // read the application name from the modules package.json file
  var packageJson = require(path.resolve(config.root, 'package.json'));
  var appName = packageJson.name;

  // set the template path to the override that we use
  var templatePath = path.resolve(__dirname, '../templates/docs.jade');

  // determine the doc path
  var docPath = path.resolve(config.root, 'docs');

  // set the path to the files we're documenting (all modules should follow this scheme)
  var libPath = path.resolve(config.root, 'lib');

  // localize the path to the binary we're executing
  var cmdPath = path.resolve(__dirname, '../node_modules/.bin');

  // build up the command string
  var cmd = cmdPath + '/doxx';
  cmd += ' -t ' + appName; // set the title
  cmd += ' -T ' + docPath; // set the output directory
  cmd += ' --template ' + templatePath; // set the template to our custom template
  cmd += ' -s ' + libPath; // set the path to the library

  exec(cmd, function (err, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);

    done(err);
  });
}

module.exports = setupDocs;
