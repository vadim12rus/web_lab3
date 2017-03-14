module.exports = function(grunt) {
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 8080,
                    base: '',
                    livereload: true,
                }
            }
        },

        concat: {
            js: {
                src: ['js/*.js'],
                dest: 'build/script.js',
            }
        },
        uglify: {
            buld: {
                src: 'build/script.js',
                dest: 'build/script.min.js'
            }
        },
        eslint: {
            target: ['build/script.js']
            //quiet: true
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'build/style.min.css': [
                        'node_modules/bootstrap/dist/css/bootstrap.min.css',
                        'css/style.css'
                    ]
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: ['css/*.css'],
                tasks: ['clean:css_min', 'cssmin', 'hashres:css'],
            },

            scripts: {
                files: ['js/*.js'],
                tasks: [ 'clean:js_min', 'concat', 'uglify', 'clean:script', 'eslint', 'hashres:scripts'],
            },

            html: {
                files: ['index.html'],
            }
        },
        clean: {
            script: ['build/script.js'],
            js_min:  ['build/*.js'],
            css_min:  ['build/*.css']
        },

        hashres: {
            options: {
                encoding: 'utf8',
                fileNameFormat: '${name}.${hash}.${ext}',
                renameFiles: true,
            },
            scripts: {
                src: ['build/script.min.js',],
                dest: ['index.html'],
            },

            css: {
                src: ['build/style.min.css'],
                dest: ['index.html'],
            },
        },


    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-hashres');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('default', ['clean', 'concat', 'uglify', 'cssmin', 'eslint', 'clean:script', 'connect', 'hashres', 'watch']);

};