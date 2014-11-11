'use strict';

/* globals describe:false, it:false */

var should = require('should'); //jshint ignore:line

var jshint = require('../lib/jshint');

var gulpMock = {};
var task = null;

gulpMock.task = function (name, description, deps, func) {
  task = func;
};

var configMock = {
  root: __dirname,
  src: ['**/*.js', '!./node_modules/**', '!./docs/**']
};

jshint(gulpMock, configMock);

describe('Gulp Module JSHint', function () {
  it('Should return a function', function () {
    jshint.should.be.type('function');
  });

  it('Should create a task', function () {
    task.should.be.type('function');
  });

  it('Should run and throw an error', function (cb) {
    try {
      task();
    } catch (e) {
      cb();
    }
  });
});
