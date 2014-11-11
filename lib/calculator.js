'use strict';

var _ = require('lodash');

var calc = {};

/**
 * Calculates the total logical and physical sloc
 *
 * @param {Object} totals The object that will store the results
 * @param {Object} reports The object that contains the data
 * @param {Integer} len The length of the data object so we don't have to calculate it for each method
 */
calc.sloc = function calculateSLOC (totals, reports, len) {
  totals.totalLogicalSloc = 0;
  totals.totalPhysicalSloc = 0;

  _.forEach(reports, function (report) {
    totals.totalLogicalSloc += report.aggregate.sloc.logical;
    totals.totalPhysicalSloc += report.aggregate.sloc.physical;
  });

  totals.averageLogicalSloc = (totals.totalLogicalSloc / len).toFixed(0);
  totals.averagePhysicalSloc = (totals.totalPhysicalSloc / len).toFixed(0);
};

/**
 * Calculates the cyclomatic complexity
 *
 * @param {Object} totals The object that will store the results
 * @param {Object} reports The object that contains the data
 * @param {Integer} len The length of the data object so we don't have to calculate it for each method
 */
calc.cyclomatic = function calculateCyclomatic (totals, reports, len) {
  totals.totalCyclomaticComplexity = 0;
  var density = 0;

  _.forEach(reports, function (report) {
    totals.totalCyclomaticComplexity += report.aggregate.cyclomatic;
    density += report.aggregate.cyclomaticDensity;
  });

  var complexity = (totals.totalCyclomaticComplexity / len).toFixed(2);
  totals.averageCyclomaticComplexity = complexity;

  totals.averageCyclomaticDensity = (density / len).toFixed(2);
};

/**
 * Calculates the estimated effort to develop
 *
 * @param {Object} totals The object that will store the results
 * @param {Object} reports The object that contains the data
 * @param {Integer} len The length of the data object so we don't have to calculate it for each method
 */
calc.effort = function calculateEffort (totals, reports, len) {
  totals.totalEffort = 0;

  _.forEach(reports, function (report) {
    totals.totalEffort += report.aggregate.halstead.effort;
  });

  totals.averageEffort = (totals.totalEffort / len).toFixed(2);
  totals.totalEffort = totals.totalEffort.toFixed(2);
};

/**
 * Calculates the maintainability of the code
 *
 * @param {Object} totals The object that will store the results
 * @param {Object} reports The object that contains the data
 * @param {Integer} len The length of the data object so we don't have to calculate it for each method
 */
calc.maintainability = function calculateMaintainability (totals, reports, len) {
  var maintainability = 0;

  _.forEach(reports, function(report) {
    maintainability += report.maintainability;
  });

  totals.averageMaintainability = (maintainability / len).toFixed(2);
};

/**
 * Calculates the estimated difficulty in understanding the code
 *
 * @param {Object} totals The object that will store the results
 * @param {Object} reports The object that contains the data
 * @param {Integer} len The length of the data object so we don't have to calculate it for each method
 */
calc.difficulty = function calculateDifficulty (totals, reports, len) {
  var difficulty = 0;

  _.forEach(reports, function(report) {
    difficulty += report.aggregate.halstead.difficulty;
  });

  totals.averageDifficulty = (difficulty / len).toFixed(2);
};

/**
 * Calculates the estimated time to develop the code
 *
 * @param {Object} totals The object that will store the results
 * @param {Object} reports The object that contains the data
 * @param {Integer} len The length of the data object so we don't have to calculate it for each method
 */
calc.time = function calculateTime (totals, reports, len) {
  totals.totalTime = 0;

  _.forEach(reports, function(report) {
    totals.totalTime += report.aggregate.halstead.time;
  });

  totals.totalTime = totals.totalTime.toFixed(2);
  totals.averageTime = (totals.totalTime / len).toFixed(2);
};

/**
 * Calculates the estimated cost to develop
 *
 * @param {Object} totals The object that will store the results
 * @param {Integer} len The length of the data object so we don't have to calculate it for each method
 */
calc.cost = function calculateCost (totals, len) {
  totals.totalCost = (totals.totalTime * 0.013).toFixed(2);
  totals.averageCost = (totals.totalCost / len).toFixed(2);
};

/**
 * Calculates the estimated number of bugs
 *
 * @param {Object} totals The object that will store the results
 * @param {Object} reports The object that contains the data
 * @param {Integer} len The length of the data object so we don't have to calculate it for each method
 */
calc.bugs = function calculateBugs (totals, reports, len) {
  totals.totalBugs = 0;

  _.forEach(reports, function (report) {
    totals.totalBugs += report.aggregate.halstead.bugs;
  });

  totals.averageBugs = (totals.totalBugs / len).toFixed(2);
  totals.totalBugs = totals.totalBugs.toFixed(2);
};

/**
 * Calculates the number of dependencies
 *
 * @param {Object} totals The object that will store the results
 * @param {Object} reports The object that contains the data
 * @param {Integer} len The length of the data object so we don't have to calculate it for each method
 */
calc.dependencies = function calculateDependencies (totals, reports, len) {
  totals.dependencies = [];

  _.forEach(reports, function (report) {
    var deps = report.dependencies;
    deps.forEach(function depTotal (dep) {
      var name = dep.path;

      if (totals.dependencies.indexOf(name) === -1) {
        totals.dependencies.push(name);
      }
    });
  });

  totals.totalDependencies = totals.dependencies.length;
  totals.averageDependencies = (totals.totalDependencies / len).toFixed(2);
};

module.exports = calc;
