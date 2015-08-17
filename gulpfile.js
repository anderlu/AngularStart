/**
 * User: Anderlu
 * Date: 15/8/17
 * Time: 上午11:47
 */
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


gulp.task('browserSync', function () {
    var files = [
        'src/**/*.html',
        'src/**/*.css',
        'src/**/*.js'
    ];

    // Serve files from the root of this project
    browserSync.init(files, {
        open: true,
        port: 9527,
        server: {
            baseDir: "./"
        }
    });
    //gulp.watch("src/**/*.html").on("change", browserSync.reload);
    //gulp.watch("**/*.css").on("change", browserSync.reload);
});

gulp.task('default', ['browserSync']);