var path = require('path')
var exec = require('child_process').exec;
var gulp = require('gulp')

var DOCSIFY = path.resolve(__dirname, '..', 'docsify')

gulp.task('build', function(cb) {
  exec('webpack -p', {
    cwd: DOCSIFY
  }, function (err, stdout, stderr) {
    stdout.length && console.log(stdout)
    stderr.length && console.error(stderr)
    cb(err)
  })
})

gulp.task('copy', ['build'], function() {
  gulp.src(path.join(DOCSIFY, 'build/cee.js'))
    .pipe(gulp.dest('./example'))
})