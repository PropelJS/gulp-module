'use strict';

/* globals describe:false, it:false */

var should = require('should'); //jshint ignore:line

var size = require('../lib/size');

var gulpMock = {};
var task = null;

gulpMock.task = function (name, description, deps, func) {
  task = func;
};

var configMock = {
  mod: 'size',
  src: ['**/*.js', '!./node_modules/**', '!./docs/**']
};

size(gulpMock, configMock);

describe('Gulp Module Size', function () {
  it('Should return a function', function () {
    size.should.be.type('function');
  });

  it('Should create the size task', function () {
    task.should.be.type('function');
  });

  it('Should run the size task', function (cb) {
    try {
      task();
    } catch (e) {
      cb();
    }
  });
});
