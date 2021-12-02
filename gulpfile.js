var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var connect = require('gulp-connect');

gulp.task('server', function() {
	connect.server({
		port: 3000,
		livereload: true,
	});
});

gulp.task('html', function() {
	return gulp.src('demo/*.html')
		.pipe(connect.reload());
});

gulp.task('script', function() {
	return gulp.src('snowf.js')
		.pipe(uglify())
		.pipe(rename('snowf.min.js'))
		.pipe(gulp.dest('./'))
		.pipe(connect.reload());
});

gulp.task('build', function() {
	return gulp.src('snowf.js')
		.pipe(uglify())
		.pipe(rename('snowf.min.js'))
		.pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
	gulp.watch('demo/snowf.html', ['html']);
	gulp.watch('snowf.js', ['script']);
});

gulp.task('default', gulp.series('server', 'watch'));