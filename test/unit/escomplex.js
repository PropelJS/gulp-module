'use strict';

/* globals describe:false, it:false */

var should = require('should'); // jshint ignore:line

var escomplex = require('../../lib/escomplex');

var gulpMock = {};
var task = null;

gulpMock.task = function (name, description, deps, func) {
  task = func;
};

var configMock = {
  mod: 'escomplex',
  root: __dirname,
  src: ['**/*.js', '!./node_modules/**', '!./docs/**']
};

escomplex(gulpMock, configMock);

describe('Gulp Module ESComplex', function () {
  it('Should return a function', function () {
    escomplex.should.be.type('function');
  });

  it('Should add the escomplex task', function () {
    task.should.be.type('function');
  });

  it('Should run the escomplex task', function (cb) {
    try {
      task();
    } catch (e) {
      cb();
    }
  });
});
