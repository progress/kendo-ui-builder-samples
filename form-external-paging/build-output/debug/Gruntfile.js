'use strict';

module.exports = function (grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Automatically load required Grunt tasks
    require('jit-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
//                livereload: 35729
            },
            dist: {
                options: {
                    open: true,
                    middleware: function (connect) {
                        return [connect().use('/', connect.static('./'))];
                    }
                }
            }
        }
    });

    grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
//        if (target === 'dist') {
//            return grunt.task.run(['build', 'connect:dist:keepalive']);
//        }

        grunt.task.run([
//            'clean:server',
//            'wiredep',
//            'concurrent:server',
//            'autoprefixer:server',
            'connect:dist:keepalive'//,
//            'watch'
        ]);
    });
};
