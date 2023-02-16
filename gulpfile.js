const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");

gulp.task("styles", function () {
  return gulp
    .src("src/styles/**/*.scss")
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("public"));
});

gulp.task("watch", function () {
  gulp.watch("src/styles/**/*.scss", gulp.series("styles"));
});

gulp.task("default", gulp.series("styles", "watch"));
