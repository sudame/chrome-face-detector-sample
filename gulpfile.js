const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('server', () => {
    browserSync({
        server: {
            baseDir: './',
            index: 'index.html'
        }
    });
});