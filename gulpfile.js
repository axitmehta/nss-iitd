var gulp = require('gulp'),
    clean = require('gulp-clean'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    compass = require('gulp-compass'),
    del = require('del'),
    runSequence = require('run-sequence');

gulp.task('clean', function() {
  return del([
    'dist/**/*'
  ]);
});
gulp.task('build-bower-lib', function() {
  return gulp.src('bower_components/**/*')
    .pipe(gulp.dest('dist/bower_components'));
});
gulp.task('build-root', function() {
  return gulp.src(['index.html','themify-icons.css'])
    .pipe(gulp.dest('dist/'));
});

gulp.task('build-bower-js', function() {
  return gulp.src(['bower_components/angular/angular.min.js',
                    'bower_components/angular-material/angular-material.min.js',
                  'bower_components/angular-sanitize/angular-sanitize.min.js',
                  'bower_components/angular-animate/angular-animate.min.js',
                  'bower_components/angular-aria/angular-aria.min.js',
                  'bower_components/angular-messages/angular-messages.min.js',
                  'bower_components/angular-route/angular-route.min.js',
                'bower_components/angular-carousel/dist/angular-carousel.js',
              'bower_components/angular-touch/angular-touch.js'])
    .pipe(concat('libs.min.js'))
    .pipe(gulp.dest('dist/js'));
});
gulp.task('build-images', function() {
  return gulp.src(['images/**'])
    .pipe(gulp.dest('dist/images'));
});
gulp.task('build-fonts', function () {
  return gulp.src('fonts/**')
    .pipe(gulp.dest('dist/fonts'));
});
gulp.task('build-templates', function () {
  return gulp.src('templates/*.html')
    .pipe(gulp.dest('dist/templates/'));
});
gulp.task('build-sourcejs', function() {
  return gulp.src(['main.js', 'js/*.js'])
    .pipe(concat('nssiitd.js'))
    .pipe(gulp.dest('dist/js'));
});
gulp.task('build-customcss', function() {
  return gulp.src(['css/*.css'])
    .pipe(gulp.dest('dist/css'));
});
gulp.task('compass-build', function() {
  gulp.src('sass/*.scss')
    .pipe(compass({
      config_file: 'config.rb',
      css: 'css',
      sass: 'sass'
    }))
    .pipe(gulp.dest('dist/css'));
});
gulp.task('watch-js', function() {
  gulp.watch('js/*.js', ['build-sourcejs']);
});
gulp.task('watch-css', function() {
  gulp.watch('css/*.css', ['build-customcss']);
});
gulp.task('compass-watch', function () {
  gulp.watch('sass/*.scss', ['compass-build']);
});
gulp.task('watch-html', function() {
  gulp.watch('templates/*.html', ['build-templates']);
});
gulp.task('watch-root', function() {
  gulp.watch(['index.html','main.js'], ['build-root']);
});
gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    port: 6006,
    host: '0.0.0.0'
  });
});

// default task
gulp.task('default', function() {
  return runSequence('clean','build-bower-lib', 'build-bower-js', 'build-root', 'build-templates', 'build-fonts','build-sourcejs', 'build-images', 'compass-build', 'build-customcss',
    ['watch-js', 'watch-css', 'watch-html','watch-root','compass-watch','connect']
  );
});
