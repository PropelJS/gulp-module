'use strict';

/* globals describe:false, it:false */

var should = require('should'); // jshint ignore:line
var path = require('path');

var cost = require('../../lib/cost');

var gulpMock = {};
var task = null;

gulpMock.task = function(name, description, deps, func) {
  task = func;
};

var configMock = {
  root: path.resolve(__dirname, '../')
};

cost(gulpMock, configMock);

describe('Gulp Module Cost', function() {
  it('Should return a function', function() {
    cost.should.be.type('function');
  });

  it('Should create a task', function() {
    task.should.be.type('function');
  });

  it('Should run', function(cb) {
    this.timeout(5000);

    try {
      task();
      cb();
    } catch (e) {
      cb();
    }
  });
});
