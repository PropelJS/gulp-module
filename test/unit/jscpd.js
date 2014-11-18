'use strict';

/* globals describe:false, it:false */

var should = require('should'); //jshint ignore:line

var jscpd = require('../../lib/jscpd');

var gulpMock = {};
var task = null;

gulpMock.task = function gulpTask (name, description, deps, func) {
  task = func;
};

var configMock = {
  src: ['**/*.js', '!./node_modules/**', '!./docs/**']
};

jscpd(gulpMock, configMock);

describe('Gulp Module JSCPD', function () {
  it('Should return a function', function () {
    jscpd.should.be.type('function');
  });

  it('Should create a task', function () {
    task.should.be.type('function');
  });

  it('Should run the task', function (cb) {
    try {
      task();
    } catch (e) {
      cb();
    }
  });
});
