// Karma configuration
// Configurar por IVAN DIESEL

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angularjs-datepicker/dist/angular-datepicker.min.js',
      'node_modules/angular/d3.min.js',
      'src/main/controllers/bhaskara-modular.js',
      'src/main/**/*.js',
      'src/test/unitario/**/*-spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'src/**/*.js': ['coverage']

    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },
    port: ['PORT'],
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
