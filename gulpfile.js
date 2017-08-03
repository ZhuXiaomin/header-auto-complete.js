const gulp = require('gulp');
var minify = require('gulp-minify');

gulp.task('message', function() {
  return console.log('Gulp is running...');
});

gulp.task('copyHtml', function() {
  gulp.src('src/*.html').pipe(gulp.dest('dist'));
});

gulp.task('compress', function() {
  gulp.src('src/js/*.js').pipe(minify({
    ext: {
      src: '.js',
      min: '.min.js'
    },
    exclude: ['tasks'],
    ignoreFiles: ['.combo.js', '*.min.js']
  })).pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['message', 'copyHtml', 'compress']);

gulp.task('watch', function() {
  gulp.watch('src/js/*.js', ['compress']);
  gulp.watch('src/*.html', ['copyHtml']);
});
