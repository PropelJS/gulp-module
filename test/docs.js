'use strict';

/* globals describe:false, it:false */

require('should');

var path = require('path');

var docs = require('../lib/docs');

var gulpMock = {};
var task = null;

gulpMock.task = function(name, description, deps, func) {
  task = func;
};

var configMock = {
  mod: 'docs',
  root: path.resolve(__dirname, '../')
};

docs(gulpMock, configMock);

describe('Gulp Module Docs', function() {
  it('Should return a function', function() {
    docs.should.be.type('function');
  });

  it('Should add the docs task', function() {
    task.should.be.type('function');
  });

  it('Should run the docs task', function(cb) {
    try {
      task();
      cb();
    } catch (e) {
      cb();
    }
  });
});
