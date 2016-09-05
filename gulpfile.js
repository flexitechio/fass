var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {

    // gulp.src('lib/app.scss')
    //     .pipe(sass().on('error', sass.logError))
    //     .pipe(gulp.dest('css/app.css'));

    // gulp.src('lib/vendors.scss')
    //     .pipe(sass().on('error', sass.logError))
    //     .pipe(gulp.dest('css/vendors.css'));

    gulp.src('lib/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'))

});

//Watch task
gulp.task('default',function() {
    gulp.watch('lib/*.scss',['styles']);
});