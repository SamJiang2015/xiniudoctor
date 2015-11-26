var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var notifier = require('node-notifier');
var server = require('gulp-server-livereload');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

var path = {
  HTML: './src/index.html',
  IMAGES: './src/images/*',
  JS: './src/**/*.jsx',
  BOOTSTRAP_CSS: 'bootstrap/bootstrap.min.css',
  BOOTSTRAP_JS: 'bootstrap/bootstrap.min.js',
  JQUERY_JS: 'bootstrap/jquery-1.11.3.min.js',
  BOOTSTRAP_FONTS: 'bootstrap/fonts/*',
  SCSS: './src/sass/**/*.scss',
  OUT_JS: 'build.js',
  MINIFIED_OUT_JS: 'build.min.js',
  OUT_CSS: 'style.css',
  DEST: 'dist',
  DEST_IMAGES: 'dist/images',
  DEST_JS: 'dist/js',
  DEST_CSS: 'dist/css',
  DEST_FONTS: 'dist/fonts',
  ENTRY_POINT: './src/jsx/app.jsx'
};

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
};

var notify = function(error) {
  var message = 'In: ';
  var title = 'Error: ';

  if(error.description) {
    title += error.description;
  } else if (error.message) {
    title += error.message;
  }

  if(error.filename) {
    var file = error.filename.split('/');
    message += file[file.length-1];
  }

  if(error.lineNumber) {
    message += '\nOn Line: ' + error.lineNumber;
  }

  notifier.notify({title: title, message: message});
};

// copy the html over to the dist directory
gulp.task('copy-html', function(){
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});

// copy the images over to the dist directory
gulp.task('copy-images', function(){
  gulp.src(path.IMAGES)
    .pipe(gulp.dest(path.DEST_IMAGES));
});

// copy bootstrap files over to the dist directory
gulp.task('copy-bootstrap', function(){
  gulp.src(path.BOOTSTRAP_CSS)
    .pipe(gulp.dest(path.DEST_CSS));
  gulp.src(path.BOOTSTRAP_JS)
    .pipe(gulp.dest(path.DEST_JS));
  gulp.src(path.JQUERY_JS)
    .pipe(gulp.dest(path.DEST_JS));
  gulp.src(path.BOOTSTRAP_FONTS)
    .pipe(gulp.dest(path.DEST_FONTS));
});

var bundler = watchify(browserify({
  entries: [path.ENTRY_POINT],
  transform: [reactify],
  extensions: ['.jsx'],
  debug: true,
  cache: {},
  packageCache: {},
  fullPaths: true
}));

function bundle() {
  return bundler
    .bundle()
    .on('error', notify)
    .pipe(source(path.OUT_JS))
    .pipe(gulp.dest(path.DEST_JS))
}
bundler.on('update', bundle)

gulp.task('build', function() {
  bundle()
});

gulp.task('serve', function(done) {
  gulp.src(path.DEST)
    .pipe(server({
      livereload: true,
      open: true
    }));
});

gulp.task('sass', function () {
  gulp.src(path.SCSS)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat(path.OUT_CSS))
    .pipe(gulp.dest(path.DEST_CSS));
});

gulp.task('watch', function () {
  gulp.watch(path.JSX, ['build']);
  gulp.watch(path.HTML, ['copy-html']);
  gulp.watch(path.IMAGES, ['copy-images']);
  gulp.watch(path.BOOTSTRAP, ['copy-bootstrap']);
  gulp.watch(path.SCSS, ['sass']);
});

gulp.task('default', [
  'copy-html',
  'copy-images',
  'copy-bootstrap',
  'build',
  'sass',
  'serve',
  'watch']);
