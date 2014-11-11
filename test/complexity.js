'use strict';

/* globals describe:false, it:false */

var should = require('should'); //jshint ignore:line

var complexity = require('../lib/complexity');

var gulpMock = {};
var task = null;

gulpMock.task = function gTask (name, description, deps, func) {
  task = func;
};

var configMock = {
  src: ['**/*.js', '!./node_modules/**', '!./docs/**']
};

complexity(gulpMock, configMock);

describe('Gulp Module Complexity', function () {
  it('Should return a function', function () {
    complexity.should.be.type('function');
  });

  it('Should add the complexity task', function () {
    task.should.be.type('function');
  });

  it('Should run the complexity task', function (cb) {
    try {
      task();
    } catch (e) {
      cb();
    }
  });
});
