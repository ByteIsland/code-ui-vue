const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");
const clean = require("gulp-clean");

/* 清空项目文件 */
function cleanDist() {
  return gulp.src("../dist/*", { read: false }).pipe(clean({ force: true }));
}

// 编译sass
function styles() {
  return gulp
    .src("../src/theme/index.scss")
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions", "ie > 8"]
      })
    )
    .pipe(cleanCSS())
    .pipe(rename("codeui.css"))
    .pipe(gulp.dest("../dist/styles"));
}
// 字体库迁移
function fonts() {
  return gulp
    .src("../src/theme/iconfont/*.*")
    .pipe(gulp.dest("../dist/styles/iconfont"));
}

const build = gulp.series(cleanDist, gulp.parallel(styles, fonts));

exports.clean = cleanDist;
exports.styles = styles;
exports.fonts = fonts;
exports.build = build;

exports.default = build;
