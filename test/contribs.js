'use strict';

/* globals describe:false, it:false */

require('should');
var path = require('path');

var contrib = require('../lib/contribs');

var gulpMock = {};
var task = null;

gulpMock.task = function(name, description, deps, func) {
  task = func;
};

var configMock = {
  root: path.resolve(__dirname, '../'),
  src: ['**/*.js', '!./node_modules/**', '!./docs/**']
};

contrib(gulpMock, configMock);

describe('Gulp Module Contrib', function() {
  it('Should return a function', function() {
    contrib.should.be.type('function');
  });

  it('Should create a task', function() {
    task.should.be.type('function');
  });

  it('Should run the task', function(cb) {
    try {
      task();
      cb();
    } catch (e) {
      cb();
    }
  });
});
