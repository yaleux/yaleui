'use strict';

import plugins  from 'gulp-load-plugins';
import gulp     from 'gulp';

var prompt = require('gulp-prompt').prompt;
var replace = require('gulp-replace');
var inquirer = require('inquirer');
var touch = require('gulp-touch');
var exec = require('child_process').execSync;

var VERSIONED_FILES = [
  'bower.json',
  'package.json',
  'src/data/yaleui.json',
];

var CURRENT_VERSION = require('../package.json').version;
var NEXT_VERSION;

gulp.task('bump',
  gulp.series(deploy_prompt, deploy_version));

function deploy_prompt(done){
  var questions =
  [
    {
        type: 'input',
        name: 'version',
        message: 'What version are we moving to? (Current version is ' + CURRENT_VERSION + ')',
        default: CURRENT_VERSION
    }
  ];

  inquirer.prompt(questions).then(function(answers) {
    NEXT_VERSION = answers.version;
    done();
  });
};


// Bumps the version number in any file that has one
function deploy_version(){
  return gulp.src(VERSIONED_FILES, { base: process.cwd() })
    .pipe(replace(CURRENT_VERSION, NEXT_VERSION))
    .pipe(gulp.dest('.'))
    .pipe(touch());
}