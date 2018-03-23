var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var watchify = require("watchify");
var tslint = require("gulp-tslint");
var typedoc = require("gulp-typedoc");

var watchedBrowserify = watchify(browserify({
  basedir: '.',
  debug: true,
  entries: ['src/index.ts'],
  cache: {},
  packageCache: {}
}).plugin(tsify));

function bundle() {
  return watchedBrowserify
    .transform('babelify', {
      presets: ['es2015'],
      extensions: ['.ts']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
}


gulp.task("tslint", () => {
  gulp.src("src/index.ts")
    .pipe(tslint({
      formatter: "verbose"
    }))
    .pipe(tslint.report());
});

gulp.task("typedoc", function() {
  return gulp
    .src(["src/**/*.ts"])
    .pipe(typedoc({
      module: "commonjs",
      target: "es5",
      out: "docs/",
      name: "CTCI"
    }))
  ;
});

gulp.task('default', [], bundle);
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);
