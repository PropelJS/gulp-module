'use strict';

/* globals describe:false, it:false */

var should = require('should');// jshint ignore:line

var plato = require('../lib/plato');

var gulpMock = {};
var task = null;

gulpMock.task = function (name, description, deps, func) {
  task = func;
};

var configMock = {
  mod: 'plato',
  root: __dirname,
  src: ['**/*.js', '!./node_modules/**', '!./docs/**']
};

plato(gulpMock, configMock);

describe('Gulp module plato', function () {
  it('Should return a function', function () {
    plato.should.be.type('function');
  });

  it('Should create the plato task', function () {
    task.should.be.type('function');
  });

  it('Should run the plato task', function (cb) {
    try {
      task();
    } catch (e) {
      cb();
    }
  });
});
