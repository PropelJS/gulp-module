'use strict';

var changeLog = require('conventional-changelog');
var path = require('path');
var fs = require('fs');

var config = null;
var file = null;

/**
 * Sets up the gulp task for changelog generation
 *
 * @param {Object} gulp The gulp instance
 * @param {Object} conf The configuration object
 */
function setupChangeLog(gulp, conf) {
  gulp.task('changelog', false, [], function() {
    config = conf;
    changeLogTask();
  });
}

/**
 * Creates the changelog since the last published tag
 *
 */
function changeLogTask() {
  // read the version, repository, and versionName from the package.json
  var packageJson = require(path.resolve(config.root, 'package.json'));
  var version = packageJson.version;
  var repo = packageJson.repository.url;
  var versionName = packageJson.versionName;

  // set the path to the output file
  file = path.resolve(config.root, 'changelog.md');

  // run the module to get the new file contents
  changeLog({
    version: version,
    subtitle: versionName,
    repository: repo,
    file: file
  }, changeLogCallback);
}

/**
 * Writes the updated changelog back to disk
 *
 * @param {Object} err Any error thrown by the changeLog module
 * @param {Buffer} log The buffer representing the new change log
 */

function changeLogCallback(err, log) {
  // if there's an error we need to stop execution
  if (err) {
    throw err;
  }

  // output the new contents to the file
  fs.writeFileSync(file, log, {encoding: 'UTF-8'});
}

module.exports = setupChangeLog;
