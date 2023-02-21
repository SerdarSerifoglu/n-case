const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");

gulp.task("html", function () {
  return gulp.src(["./src/**/*.html"]).pipe(gulp.dest("./dist"));
});

gulp.task("sass", function () {
  return gulp
    .src("src/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("dist/css"));
});

gulp.task("uglify", function () {
  return gulp.src("src/scripts/*.js").pipe(uglify()).pipe(gulp.dest("dist/js"));
});

gulp.task("default", gulp.parallel("sass", "uglify", "html"));
