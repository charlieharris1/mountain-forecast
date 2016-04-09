import gulp from 'gulp' ;
import rename from 'gulp-rename' ;
import browserify from 'browserify' ;
import babelify from 'babelify' ;
import source from 'vinyl-source-stream';
import es from 'event-stream';
import glob from 'glob';

const destPath = 'src/ui/dist';
const srcPath = 'src/ui/scripts';
const jsDest = `${destPath}/js`;
const jsSrc = `${srcPath}/**.js`;

gulp.task('build', ['build:browserify']);

gulp.task('build:browserify', (done) => {
  glob(jsSrc, (err, widgetFiles) => {
    if (err) { return done(err); }

    const widgets = widgetFiles.map((widget) =>
      browserify({ entries: widget, extensions: ['.js'], debug: true })
        .transform(babelify.configure({
          presets: ['es2015', 'react'],
          plugins: ['syntax-class-properties', 'transform-class-properties'],
        }))
        .bundle()
        .pipe(source(widget))
        .pipe(rename({ dirname: '' }))
        .pipe(gulp.dest(jsDest)));

    es.merge(widgets).on('end', done);
  });
});

gulp.task('watch', ['build'], () =>
  gulp.watch([jsSrc], ['build'])
    /* eslint-disable no-console */
    .on('change', (e) => { console.log(`File ${e.path} was ${e.type}, running js task`); }));
