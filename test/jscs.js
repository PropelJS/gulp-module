'use strict';

/* globals describe:false, it:false */

var should = require('should'); //jshint ignore:line

var jscs = require('../lib/jscs');

var gulpMock = {};
var task = null;

gulpMock.task = function (name, description, deps, func) {
  task = func;
};

var confMock = {
  src: ['**/*.js', '!node_modules/**', '!docs/**']
};

jscs(gulpMock, confMock);

describe('Gulp Module JSCS', function () {
  it('Should return a function', function () {
    jscs.should.be.type('function');
  });

  it('Should create a new task', function () {
    task.should.be.type('function');
  });

  it('Should run the task and throw an error', function (cb) {
    try {
      task();
    } catch (e) {
      cb();
    }
  });
});
