const gulp = require('gulp');
const sass = require('gulp-sass');
const gulpConcatCss = require('gulp-concat-css');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
})

gulp.task('sass', function() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(gulpConcatCss('styles.css'))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({stream: true}))
})

gulp.task('watch', ['browser-sync', 'sass'], function(){
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch('./*.html', browserSync.reload); 
    //gulp.watch('app/js/**/*.js', browserSync.reload);
})



// const gulpCssPreprocessor = require('gulp-css-preprocessor');
// const browserSync = require('browser-sync').create();

// gulp.task('start', function() {

//     browserSync.init({
//         server: {
//             baseDir: './'
//         }
//     });

//     gulp.watch(['./*.html', './css/*.css', './scss/*.scss']).on('change', browserSync.reload);

//     gulp.src('scss/**/*')
//         .pipe(gulpCssPreprocessor())
//         .pipe(gulpConcatCss('styles.css'))
//         .pipe(gulp.dest('css'))

// })