'use strict';

/* globals describe:false, it:false */

var should = require('should'); // jshint ignore:line

var calc = require('../../lib/calculator');

var totals = {};
var reports = [
  {
    aggregate: {
      sloc: {
        logical: 100,
        physical: 110
      },
      cyclomatic: 1,
      cyclomaticDensity: 5,
      halstead: {
        effort: 3,
        difficulty: 3,
        time: 2400,
        bugs: 0.5
      }
    },
    maintainability: 90,
    dependencies: [
      {
        path: 'dep1'
      },
      {
        path: 'dep2'
      }
    ]
  },
  {
    aggregate: {
      sloc: {
        logical: 50,
        physical: 90
      },
      cyclomatic: 1,
      cyclomaticDensity: 5,
      halstead: {
        effort: 3,
        difficulty: 1,
        time: 4800,
        bugs: 1.5
      }
    },
    maintainability: 110,
    dependencies: [
      {
        path: 'dep1'
      },
      {
        path: 'dep3'
      }
    ]
  }
];
var len = 2;

describe('Calculator', function() {
  it('Should return an object', function() {
    calc.should.be.type('object');
  });

  describe('SLOC', function() {
    it('Should have a method sloc', function() {
      calc.sloc.should.be.type('function');
    });

    it('Should run the sloc method', function() {
      calc.sloc(totals, reports, len);
    });

    it('Should have an accurate physical sloc', function() {
      totals.totalPhysicalSloc.should.be.equal(200);
    });

    it('Should have an accurate logical sloc', function() {
      totals.totalLogicalSloc.should.be.equal(150);
    });

    it('Should have an accurate average physical sloc', function() {
      totals.averagePhysicalSloc.should.be.equal('100');
    });

    it('Should have an accurate average logical sloc', function() {
      totals.averageLogicalSloc.should.be.equal('75');
    });
  });

  describe('Cyclomatic', function() {
    it('Should have a method cyclomatic', function() {
      calc.cyclomatic.should.be.type('function');
    });

    it('Should run the complexity method', function() {
      calc.cyclomatic(totals, reports, len);
    });

    it('Should have an accurate total cyclomatic complexity', function() {
      totals.totalCyclomaticComplexity.should.be.equal(2);
    });

    it('Should have an accurate average cyclomatic complexity', function() {
      totals.averageCyclomaticComplexity.should.be.equal('1.00');
    });

    it('Should have an accurate average cyclomatic density', function() {
      totals.averageCyclomaticDensity.should.be.equal('5.00');
    });
  });

  describe('Effort', function() {
    it('Should have a method effort', function() {
      calc.effort.should.be.type('function');
    });

    it('Should run the effort method', function() {
      calc.effort(totals, reports, len);
    });

    it('Should have an accurate total_effort', function() {
      totals.totalEffort.should.be.equal('6.00');
    });

    it('Should have an accurate average_effort', function() {
      totals.averageEffort.should.be.equal('3.00');
    });
  });

  describe('Maintainability', function() {
    it('Should have a method maintainability', function() {
      calc.maintainability.should.be.type('function');
    });

    it('Should run the maintainability method', function() {
      calc.maintainability(totals, reports, len);
    });

    it('Should have an accurate average maintainability', function() {
      totals.averageMaintainability.should.be.equal('100.00');
    });
  });

  describe('Difficulty', function() {
    it('Should have a method difficulty', function() {
      calc.difficulty.should.be.type('function');
    });

    it('Should run the difficulty method', function() {
      calc.difficulty(totals, reports, len);
    });

    it('Should have an accurate average difficulty', function() {
      totals.averageDifficulty.should.be.equal('2.00');
    });
  });

  describe('Time', function() {
    it('Should have a method time', function() {
      calc.time.should.be.type('function');
    });

    it('Should run the time method', function() {
      calc.time(totals, reports, len);
    });

    it('Should have an accurate total time', function() {
      totals.totalTime.should.be.equal('7200.00');
    });

    it('Should have an accurate average time', function() {
      totals.averageTime.should.be.equal('3600.00');
    });
  });

  describe('Cost', function() {
    it('Should have a method cost', function() {
      calc.cost.should.be.type('function');
    });

    it('Should run the cost method', function() {
      calc.cost(totals, len);
    });

    it('Should have an accurate total cost', function() {
      totals.totalCost.should.be.equal('93.60');
    });

    it('Should have an accurate average cost', function() {
      totals.averageCost.should.be.equal('46.80');
    });
  });

  describe('Bugs', function() {
    it('Should have a method bugs', function() {
      calc.bugs.should.be.type('function');
    });

    it('Should run the bugs method', function() {
      calc.bugs(totals, reports, len);
    });

    it('Should have an accurate total_bugs', function() {
      totals.totalBugs.should.be.equal('2.00');
    });

    it('Should have an accurate average_bugs', function() {
      totals.averageBugs.should.be.equal('1.00');
    });
  });

  describe('Dependencies', function() {
    it('Should have a method dependencies', function() {
      calc.dependencies.should.be.type('function');
    });

    it('Should run the dependencies method', function() {
      calc.dependencies(totals, reports, len);
    });

    it('Should have an array of dependencies', function() {
      totals.dependencies.length.should.be.equal(3);
    });

    it('Should have an accurate total dependencies count', function() {
      totals.totalDependencies.should.be.equal(3);
    });

    it('Should have an accurate average dependencies count', function() {
      totals.averageDependencies.should.be.equal('1.50');
    });
  });
});
