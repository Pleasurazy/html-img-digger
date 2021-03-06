import gulp from 'gulp'
import gulpBabel from 'gulp-babel'
import gulpPlumberNotifier from 'gulp-plumber-notifier'

gulp.task('dev', devTask)
gulp.task('babel', babelTask)

function devTask() {
  gulp.watch('./src/**/*.js', ['babel'])
}

function babelTask() {
  return gulp.src('./src/**/*.js')
  .pipe(gulpPlumberNotifier())
  .pipe(gulpBabel({ modules: 'umd' }))
  .pipe(gulp.dest('./dist'))
}
