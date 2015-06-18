module.exports = function() {
    var client = './src/client/';
    var server = './src/server/';
    var clientApp = client + 'app/';
    var report = './report/';
    var root = './';
    var specRunnerFile = 'specs.html';
    var dest = './.dist/';
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({devDependencies: true})['js'];
    var bower = {
        json: require('./bower.json'),
        directory: './bower_components/',
        ignorePath: '../..'
    };
    var nodeModules = 'node_modules';

    var config = {
      // Client source
      client: client,
      index: client + 'index.html',
      source: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js'
        ],
      styles: client + "/styles/**/*.less",
      assets: client + "/assets/**/*.*",
      
      // Test
      specs: clientApp + "**/*.spec.js",
      
      // Vendor sources
      bower: bower,
      packages: [
        './package.json',
        './bower.json'
      ],
      
      // Destination
      dest: dest,
      
      // Server
      server: server,
    }
    
    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };
    
    return config;
};