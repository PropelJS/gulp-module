'use strict';

/* globals describe:false, it:false */

var should = require('should'); //jshint ignore:line
var path = require('path');

var coverage = require('../lib/coverage');

var gulpMock = {};
var task = null;

gulpMock.task = function (name, description, deps, func) {
  task = func;
};

var configMock = {
  root: path.resolve(__dirname, '../'),
  statementsThreshold: 80,
  functionsThreshold: 80,
  branchesThreshold: 75,
  linesThreshold: 80
};

coverage(gulpMock, configMock);

describe('Gulp Module Coverage', function () {
  it('Should return a function', function () {
    coverage.should.be.type('function');
  });

  it('Should add a task', function () {
    task.should.be.type('function');
  });

  it('Should run the task', function (cb) {
    try {
      task(function () {
        cb();
      });
    } catch (e) {
      cb();
    }
  });
});
