'use strict';

var todo = require('gulp-todo');
var path = require('path');
var fs = require('fs');

var gulp = null;
var config = null;

/**
 * Sets up the todo task
 *
 * @param {Object} gulpRef The gulp instance to attach the task to
 * @param {Object} conf The configuration object
 */
function setupTodos(gulpRef, conf) {
  gulp = gulpRef;
  config = conf;

  gulp.task('todo', false, [], todosTask);
}

/**
 * Runs the todo task
 *
 * @return {Stream}
 */
function todosTask() {
  var todoFile = path.resolve(config.root, 'todo.md');

  fs.writeFileSync(todoFile, '', {encoding: 'UTF-8'});

  return gulp.src(config.src)
    .pipe(todo({fileName: 'todo.md'}))
    .pipe(gulp.dest('./'));
}

module.exports = setupTodos;
