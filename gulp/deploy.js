'use strict';

import plugins  from 'gulp-load-plugins';
import gulp     from 'gulp';

var prompt = require('gulp-prompt').prompt;
var replace = require('gulp-replace');
var inquirer = require('inquirer');
var exec = require('child_process').execSync;

var VERSIONED_FILES = [
  'bower.json',
  'package.json',
  'src/data/yaleui.json',
];

var CURRENT_VERSION = require('../package.json').version;
var NEXT_VERSION;

gulp.task('deploy',
  gulp.series(deploy_prompt, deploy_version, deploy_cdn));


function deploy_prompt(done){
  prompt({
    type: 'input',
    name: 'version',
    message: 'What version are we moving to? (Current version is ' + CURRENT_VERSION + ')'
  }, function(res) {
    NEXT_VERSION = res.version;
  });
  done();
}


// Bumps the version number in any file that has one
function deploy_version(){
  return gulp.src(VERSIONED_FILES, { base: process.cwd() })
    .pipe(replace(CURRENT_VERSION, NEXT_VERSION))
    .pipe(gulp.dest('.'));
}

// Writes a commit with the changes to the version numbers
function deploy_commit(done){
  exec('git commit -am "Bump to version "' + NEXT_VERSION);
  exec('git tag v' + NEXT_VERSION);
  exec('git push origin master --follow-tags');
  exec('git subtree push --prefix dist origin gh-pages');
  done();
}

// Publishes to AWS S3 bucket
function deploy_cdn(done){
  exec('git commit -am "Bump to version "' + NEXT_VERSION);
  exec('git tag v' + NEXT_VERSION);
  exec('git push origin master --follow-tags');
  exec('git subtree push --prefix dist origin gh-pages');
  done();
}