'use strict';

import plugins  from 'gulp-load-plugins';
import gulp     from 'gulp';

var exec = require('child_process').execSync;

var VERSION = require('../package.json').version;

gulp.task('deploy',
  gulp.series('build', deploy_commit, deploy_cdn));

// Writes a commit with the changes to the version numbers
function deploy_commit(done){
  exec('git add . ');
  exec('git commit -m "Bump to version "' + VERSION);
  exec('git tag v' + VERSION);
  exec('git push origin master');
  exec('git push --tags');
  exec('git subtree push --prefix dist origin gh-pages');
  done();
}

// Publishes to AWS S3 bucket
function deploy_cdn(done){
  exec('aws s3 sync dist/assets/css s3://yaleui.yale.edu/' + VERSION + '/css/');
  exec('aws s3 sync dist/assets/js s3://yaleui.yale.edu/' + VERSION + '/js/');
  exec('aws s3 sync dist/assets/img s3://yaleui.yale.edu/' + VERSION + '/img/');
  exec('aws s3 sync dist/assets/fonts s3://yaleui.yale.edu/' + VERSION + '/fonts/');
done();
}