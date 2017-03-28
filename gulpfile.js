var gulp = require('gulp'),
    sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var fontIcon = require("gulp-font-icon");  /* https://www.npmjs.com/package/gulp-font-icon */
var htmlGen = fontIcon.htmlGen;

gulp.task(('sass'),function()
{
    return gulp.src('dist/sass/style.sass')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream:true}))
});
gulp.task('watch',['browser-sync','sass'],function()
{
    gulp.watch('dist/sass/style.sass',['sass']);
    gulp.watch('dist/index.html',browserSync.reload());
    gulp.watch('dist/js/*.js',browserSync.reload());
});


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
});
gulp.task("fonticon", function() {
    const options = {
        fontName: "iconfont",   // �������� ������
        fontAlias: "mf"         // �����
    };
    return gulp.src(["dist/img/*.svg"])  // �� ���� ����� ������
        .pipe(htmlGen(options))       // ������� html ��� ��������� ��� ������������ �����
        .pipe(fontIcon(options))
        .pipe(gulp.dest("dist/fonts/"));   // ���� ������� �����
});
