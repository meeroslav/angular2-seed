var gulp = require('gulp');                     // main gulp

// copy images
gulp.task('copy:images', function(){
	return gulp.src('src/assets/images/**/*.*')
		.pipe(gulp.dest("dist/assets/images/"));
});

// copy fonts
gulp.task('copy:fonts', function(){
	return gulp.src('src/assets/styles/fonts/**/*.*')
		.pipe(gulp.dest("dist/assets/styles/fonts/"));
});

// copy locales
gulp.task('copy:locales', function(){
	return gulp.src('src/assets/locales/**/*.*')
		.pipe(gulp.dest("dist/assets/locales/"));
});

gulp.task('copy:webconfig', function(){
	return gulp.src('src/web.config')
		.pipe(gulp.dest("dist/"));
});

gulp.task('copy:configs', function(){
	return gulp.src('src/app/**/*.json')
		.pipe(gulp.dest("dist/app/"));
});

gulp.task('copy', ['copy:images', 'copy:fonts', 'copy:locales', 'copy:webconfig', 'copy:configs']);