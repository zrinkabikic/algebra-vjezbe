const{ src, dest } = require("gulp");
const minifyJS = require("gulp-uglify");
const minifyCSS = require("gulp-clean-css");

const bundleJS = () => {
    return src("./dist/script.js").pipe(minifyJS()).pipe(dest("./dist/min/"));
};

const bundleCSS = () => {
    return src("./dist/main.css").pipe(minifyJS()).pipe(dest("./dist/min/"));
};


const devWatch = () => {
    watch ("./dist/script.js", bundleJS);
};

exports.bundleJS = bundleJS;
exports.bundleCSS = bundleCSS;
exports.devWatch = devWatch;