var gulp = require('gulp');
	pug = require('gulp-pug');
	less = require('gulp-less');
	autoprefixer = require('gulp-autoprefixer');
	minifyCSS = require('gulp-csso');
	concat = require('gulp-concat');
	image = require('gulp-image');
	uglify = require('gulp-uglify');
	util = require('gulp-util');
	jsonMinify = require('gulp-json-minify');
	data = require('gulp-data'),
	fs = require('fs');
	rimraf = require('rimraf');
	rename = require("gulp-rename");
	plumber = require("gulp-plumber");
	watch = require('gulp-watch');
	connect = require('gulp-connect');


var path = {
	build: {
		htaccess: 'build/',
		html: 'build/',
		css: 'build/templates/_ares/css/',
		js: 'build/templates/_ares/js/',
		fonts: 'build/templates/_ares/fonts/',
		image: 'build/templates/_ares/img/'
	},
	src: {
		pug: 'src/pug/**/[^_]*.pug',
		css: 'src/less/styles.less',
		js: 'src/js/app.js',
		image: 'src/img/**/*',
		fonts: 'src/fonts/**/*',
		json: 'src/json/*',
		htaccess: 'src/.htaccess'
	},
	watch: {
		pug: 'src/pug/**/*',
		css: 'src/less/**/*',
		js: 'src/js/**/*',
		image: 'src/img/**/*',
		fonts: 'src/fonts/**/*',
		htaccess: 'src/.htaccess',
	},
	clean: './build',
	outputDir: './build'
};

gulp.task('connect', function(){
    connect.server({
        root: [path.outputDir],
        port: 9999,
        livereload: true
    });
});

gulp.task('pug:build', function() {
  return gulp.src(path.src.pug)
    .pipe(pug())
    .pipe(gulp.dest(path.build.html));
});

gulp.task('css:build', function(){
  return gulp.src([
        ('src/less/vendor/foundation/foundation.css'),
        ('src/less/vendor/owl-carousel/owl.carousel.css'),
        ('src/less/vendor/fancybox/jquery.fancybox.css'),
        ('src/less/vendor/form-styler/jquery.formstyler.css'),
        ('src/less/vendor/form-styler/jquery.formstyler.theme.css'),
	    (path.src.css)
	])
    .pipe(less())
    .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
    .pipe(concat('styles.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(path.build.css))
});

gulp.task('js:build', function(){
  return gulp.src([
	(path.src.js),
	])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(path.build.js))
});

gulp.task('image:build', function () {
  gulp.src(path.src.image)
    .pipe(image())
    .pipe(gulp.dest(path.build.image));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts)) //выгружаем в build
});

gulp.task('htaccess:build', function() {
    gulp.src(path.src.htaccess)
        .pipe(gulp.dest(path.build.htaccess)) //выгружаем в build
});

// билдим все
gulp.task('build', [
    'pug:build',
	'css:build',
	'js:build',
    'fonts:build',
	'image:build',
	'htaccess:build'
]);

// чистим папку билда
gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

// watch
gulp.task('watch', function(){
     //билдим pug в случае изменения
    gulp.watch([path.watch.pug], function () {
        gulp.start('pug:build');
    });
     //билдим css в случае изменения
    gulp.watch([path.watch.css], function () {
        gulp.start('css:build');
    });
     //билдим js в случае изменения
    gulp.watch([path.watch.js], function () {
        gulp.start('js:build');
    });
     //билдим статичные изображения в случае изменения
    gulp.watch([path.watch.image], function () {
        gulp.start('image:build');
    });
     //билдим шрифты в случае изменения
    gulp.watch([path.watch.fonts], function () {
        gulp.start('fonts:build');
    });
     //билдим htaccess в случае изменения
    gulp.watch([path.watch.htaccess], function () {
        gulp.start('htaccess:build');
    });
});

// действия по умолчанию
gulp.task('default', ['build','watch','connect']);