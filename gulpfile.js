import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import rename from 'gulp-rename';
// import htmlmin from 'gulp-htmlmin';
import terser from 'gulp-terser';
import squoosh from 'gulp-libsquoosh';
import svgo from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import del from 'del';
import browser from 'browser-sync';

// 1 найти файлы
// 2 действие над файлами
// 3 разместить

// Styles

export const styles = () => { // имя
  return gulp.src('source/sass/style.scss', { sourcemaps: true }) // 1. search style.scss

    .pipe(plumber()) // 2. обработка ошибок
    .pipe(sass().on('error', sass.logError)) // style.scss -> style.css
    // min css
    .pipe(postcss([ // style.css
      autoprefixer(), // style.css -> style.css[prefix]
      // csso() // style.css[prefix] -> style.css[prefix, min]
    ]))

    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' })) // 3. разместить в source/css
    .pipe(browser.stream());
};

// HTML

// export const html = () => {
//   return gulp.src('source/*.html')
//     .pipe(htmlmin({ collapseWhitespace: true }))
//     .pipe(gulp.dest('build'));
// };
export const html = () => {
  return gulp.src('source/*.html')
    .pipe(gulp.dest('build'));
};

// Scripts

const scripts = () => {
  return gulp.src('source/js/*.js')
  .pipe(terser())
  .pipe(gulp.dest('build/js'));
};

// Images

const optimizeImages = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
  .pipe(squoosh())
  .pipe(gulp.dest('build/img'));
};


const copyImages = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
  .pipe(gulp.dest('build/img'));
};

// WebP

const createWebp = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
  .pipe(
    squoosh({
      webp: {}
      // avif: {},
    })
  )
  .pipe(gulp.dest('build/img'));
};

// SVG

// function svg() {
//   gulp.src(['source/img/*.svg', '!source/img/icons/*.svg'])
//   // return gulp.src('source/img/**/*.svg')
//     .pipe(svgo())
//     .pipe(gulp.dest('build/img'));
// }
const svg = (done) => {
  gulp.src(['source/img/*/*.svg', '!source/img/icon/sprites/*.svg', '!source/img/sprites.svg'])
    .pipe(svgo())
    .pipe(gulp.dest('build/img'));
    done();
};

// Sprite

// export const sprite = () => {
//   return gulp.src('source/img/sprites/*.svg')
//       .pipe(gulpCheerio({
//         run: function ($) {
//           $('[fill]').removeAttr('fill');
//           $('[opacity]').removeAttr('opacity');
//           $('[fill-rule]').removeAttr('fill-rule');
//           $('[clip-rule]').removeAttr('clip-rule');
//         },
//         parserOptions: { xmlMode: true }
//       }))
//     .pipe(svgo())
//     .pipe(svgstore( {
//       inlineSvg: true
//     }))
//     .pipe(rename('sprites.svg'))
//     .pipe(gulp.dest('build/img'));
// };

// Copy

const copy = (done) => {
  gulp.src([
    'source/fonts/*.{woff2,woff}',
    'source/*.ico',
    'source/manifest.webmanifest',
    'source/img/sprites.svg',
    ], {
      base: 'source'
    })
  .pipe(gulp.dest('build'));
  done();
};

// Clean

export const clean = (done) => {
  return del('build/*');
};

// Server

function server(done) {
  browser.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Reload

const reload = (done) => {
  browser.reload();
  done();
};

// Watcher

const watcher = () => {
  gulp.watch('source/sass/**/*.scss', gulp.series(styles));
  gulp.watch('source/js/script.js', gulp.series(scripts));
  // gulp.watch('source/*.html').on('change', browser.reload);
  gulp.watch('source/*.html', gulp.series(html, reload));
};

// Build

export const build = gulp.series(
  clean,
  copy,
  optimizeImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    svg,
    // sprite,
    createWebp
  ),
  gulp.series(
    server,
    watcher
  )
);

// Default

export default gulp.series(
  clean,
  copy,
  copyImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    svg,
    // sprite,
    createWebp
  ),
  gulp.series(
    server,
    watcher
  )
);
