const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compileSass() {
  return src("src/sass/**/*.scss").pipe(sass()).pipe(dest("src/css/"));
}

function watchSass() {
  return watch("src/sass/**/*.scss", series(compileSass));
}

exports.default = series(compileSass, watchSass);
