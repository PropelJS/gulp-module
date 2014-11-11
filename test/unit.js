'use strict';

/* globals describe:false, it:false */

var should = require('should'); //jshint ignore:line
var path = require('path');
var rimraf = require('rimraf');

var unitTests = require('../lib/unit');

var gulpMock = {};
var task = null;

gulpMock.task = function gulpTask (name, description, deps, func) {
  task = func;
};

var configMock = {
  root: __dirname,
  soften: ['**/*.js', '**/*.json', '!./node_modules/**', '!./docs/**'],
  src: ['**/*.js', '!./node_modules/**', '!./docs/**']
};

unitTests(gulpMock, configMock);

describe('Gulp Module Unit Tests', function desc () {
  it('Should return a function', function retFunc () {
    task.should.be.type('function');
  });

  it('Should create a docs directory', function createDoc () {
    task();
  });

  it('Should remove the directory', function removeDoc (cb) {
    this.timeout(6000);
    setTimeout(function removeDir () {
      rimraf(path.resolve(__dirname, 'docs'), cb);
    }, 5000);
  });
});
