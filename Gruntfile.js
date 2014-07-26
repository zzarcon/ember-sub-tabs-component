'use strict';

module.exports = function(grunt) {
  require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    concat: {
      libraries: {
        src: ['lib/jquery/dist/jquery.js', 'lib/handlebars/handlebars.js', 'lib/ember/ember.js'],
        dest: 'demo/libraries.js'
      },
    },
    watch: {
      tests: {
        files: ['test/**/*.js'],
        tasks: ['qunit'],
        options: {
          debounceDelay: 100
        }
      }
    },
    connect: {
      demo: {
        options: {
          port: 9092,
          base: ['.', 'demo']
        }
      }
    }
  });


  grunt.registerTask('build', ['clean']);
  grunt.registerTask('compile', ['concat']);
  grunt.registerTask('default', ['compile', 'watch']);
};