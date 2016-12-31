const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const minifycss = require('gulp-minify-css');
const rename = require('gulp-rename');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const livereload = require('gulp-livereload');
const imagemin = require('gulp-imagemin');

// compiler and compress less
gulp.task('styles', () => {
  gulp.src('./app/assets/stylesheets/**/*.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .on('error', notify.onError('Error: <%= error.message %>'))
    .pipe(autoprefixer())
    .pipe(concat('index.css'))
    .pipe(gulp.dest('./public/assets/stylesheets'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/assets/stylesheets'))
    .pipe(livereload());
});

// compress images
gulp.task('images', () => {
  gulp.src('./app/assets/images/**/*')
  .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
  .pipe(gulp.dest('./public/assets/images/'))
  .pipe(livereload());
});

gulp.task('watch', () => {
  gulp.watch('./app/assets/stylesheets/**/*.less', ['styles']);
  gulp.watch('./app/assets/images/**/*', ['images']);
});

gulp.task('default', ['styles', 'watch']);
