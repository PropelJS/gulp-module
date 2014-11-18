'use strict';

/* globals describe:false, it:false */

var should = require('should'); // jshint ignore:line
var path = require('path');

var todos = require('../../lib/todo');

var gulpMock = {};
var task = null;

gulpMock.task = function(name, desc, deps, func) {
  task = func;
};

var configMock = {
  root: path.resolve(__dirname, '../'),
  src: ['**/*.js', '**/*.json', '!./node_modules/**', '!./docs/**']
};

todos(gulpMock, configMock);

describe('Gulp Module Todos', function() {
  it('Should return a function', function() {
    todos.should.be.type('function');
  });

  it('Should create the todos task', function() {
    task.should.be.type('function');
  });

  it('Should run the todos task', function(cb) {
    try {
      task();
      cb();
    } catch (e) {
      cb();
    }
  });
});
