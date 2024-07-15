import fileinclude from 'gulp-file-include';

export const components = () => {
 return app.gulp
  .src(app.path.src.components)
  .pipe(fileinclude())
  .pipe(app.plugins.browsersync.stream());
};
