'use strict';

/* globals describe:false, it:false */

require('should');

var benchTests = require('../../lib/bench');

var gulpMock = {};
var task = null;

gulpMock.task = function gulpTask (name, description, deps, func) {
  task = func;
};

var configMock = {
  root: __dirname,
  soften: ['**/*.js', '**/*.json', '!./node_modules/**', '!./docs/**'],
  src: ['**/*.js', '!./node_modules/**', '!./docs/**']
};

benchTests(gulpMock, configMock);

describe('Gulp module benchmarks', function() {
  it('Should return a function', function retFunc () {
    task.should.be.type('function');
  });
});
