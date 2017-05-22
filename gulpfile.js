var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  gulp.src('scss/style.scss')
    .pipe(autoprefixer()
    )
    .pipe(sass({
      includePaths: ['scss']
    }))
    .pipe(gulp.dest('css'));
});

// watch Sass files for changes, run the Sass preprocessor with the 'sass' task and reload
gulp.task('serve', ['sass'], function() {
  browserSync.init(["css/*.css", "js/*.js", "*.html"], {
    server: {
      baseDir: ''
    }
  });

});

gulp.task('watch', ['sass', 'serve'], function() {
  gulp.watch(["scss/*.scss"], ['sass']);
});
