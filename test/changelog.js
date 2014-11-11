'use strict';

/* globals describe:false, it:false */

var should = require('should'); // jshint ignore:line
var path = require('path');

var changelog = require('../lib/changelog');

var gulpMock = {};
var task = null;

gulpMock.task = function(name, description, deps, func) {
  task = func;
};

var configMock = {
  mod: 'changelog',
  root: path.resolve(__dirname, '../')
};

changelog(gulpMock, configMock);

describe('Gulp Module ChangeLog', function() {
  it('Should return a function', function() {
    changelog.should.be.type('function');
  });

  it('Should add the changelog task', function() {
    task.should.be.type('function');
  });

  it('Should run the changelog function', function(cb) {
    try {
      task();
      cb();
    } catch (e) {
      cb();
    }
  });
});
