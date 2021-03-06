'use strict';

var gulp = require('gulp');

var config = {
  root: __dirname,
  src: ['**/*.js', '!node_modules/**', '!docs/**', '!test/docs/**'],
  watch: ['lib/**/*.js', '!node_modules/**', '!docs/**', '!/test/docs/**'],
  statementsThreshold: 80,
  functionsThreshold: 80,
  branchesThreshold: 50,
  linesThreshold: 80
};

require('./lib/index')(gulp, config);
