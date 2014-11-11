'use strict';

var path = require('path');
var plato = require('gulp-plato');

var config = null;
var gulp = null;

/**
 * Sets up the plato task
 *
 * @param {Object} gulpRef The gulp instance to attach the task to
 * @param {Object} conf The configuration object
 */
function setupPlato (gulpRef, conf) {
  gulp = gulpRef;
  config = conf;

  gulp.task('plato', false, [], platoTask);
}

/**
 * Runs the plato task
 *
 * @return {Stream}
 */
function platoTask () {
  // determine the output path
  var outPath = path.resolve(config.root, 'docs/complexity');

  return gulp.src(config.src)
    .pipe(plato(outPath, {
      jshint: false
    }));
}

module.exports = setupPlato;
