var gulp = require('gulp')
var webpack = require('webpack-stream')
var named = require('vinyl-named')
var vinylPaths = require('vinyl-paths')
var del = require('del')
var config = require('./webpack.config.js')
var sass = require('gulp-sass')
var runSequence = require('gulp-run-sequence')

const jsFilePath = ['./pages/*.js']
const cssFilePath = ['./**/*.scss']
const tplFilePath = ['./tpl/*.html']

const watchPath = ['./tpl/*.html', './pages/*.js']

const jsOutput = './'
const cssOutput = './'
const tplOutput = './'

gulp.task('default', () =>
  runSequence('build-html', 'build-scss', 'build-js', 'clean')
)

gulp.task('clean', () =>
  gulp.run(['clean-css'])
)

gulp.task('build-js', () =>
  gulp.src(jsFilePath)
    .pipe(named())
    .pipe(webpack(config))
    .pipe(gulp.dest(jsOutput))
)

gulp.task('build-scss', () =>
  gulp.src(cssFilePath)
    .pipe(sass())
    .pipe(gulp.dest(cssOutput))
)

gulp.task('clean-css', () =>
  gulp.src(`${cssOutput}/**/*.css`)
    .pipe(vinylPaths(del))
)

gulp.task('build-html', () =>
  gulp.src(tplFilePath)
    .pipe(gulp.dest(tplOutput))
)

gulp.task('watch', () => {
  gulp.watch(watchPath, ['default'])
})
