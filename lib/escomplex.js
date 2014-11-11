'use strict';

var complexity = require('gulp-escomplex');
var reporter = require('gulp-escomplex-reporter-json');
var path = require('path');

var gulp = null;
var config = null;

/**
 * Setups up the escomplex task
 *
 * @param {Object} gulpRef The gulp instanc to attach the task to
 * @param {Object} conf The configuration object
 */
function setupESComplex (gulpRef, conf) {
  gulp = gulpRef;
  config = conf;

  gulp.task('escomplex', false, [], esComplexTask);
}

/**
 * Runs the escomplex task
 *
 * @return {Stream} src The file stream created
 */
function esComplexTask () {
  var outputDir = path.resolve(config.root, 'docs/esComplex');

  return gulp.src(config.src)
    .pipe(complexity())
    .pipe(reporter())
    .pipe(gulp.dest(outputDir));
}

module.exports = setupESComplex;
