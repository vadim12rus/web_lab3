module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			/*options: {
				separator: '\n\n//------------------------------------------\n',
				banner: '\n\n//------------------------------------------\n'
			},*/
			js: {
                src: ['js/*.js'],
                dest: 'build/script.js'
			},
			html: {
				src: ['*.html'],
				dest: 'build/index.html'
			}
		},
        eslint: {
            options: {
                configFile: '.eslintrc.js'
            },
            target: ['build/*.js']
        },
    
		connect: {
			sever: {
				options: {
					hostname: 'localhost',
					port: 8080,
					base: 'build/',
					livereload: true
				}
			}
		},
        cssmin: {
            target: {
                files: {
                    'build/style.min.css': ['node_modules/bootstrap/dist/css/bootstrap.min.css', 'css/*.css']
                }
            }
        },
        uglify: {
            target: {
                src: 'build/script.js',
                dest: 'build/script.min.js'
            }
        },
		watch: {
			options: {
				livereload: true,
				dateFormat: function(time) {
					grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
					grunt.log.writeln('Waiting for more changes...');
				}
			},
            css: {
                files: ['css/*.css'],
                tasks: ['cssmin', 'hashres:css'],
            },

            scripts: {
                files: ['js/*.js'],
                tasks: ['concat:js', 'uglify', 'eslint', 'hashres:scripts'],
            },

            html: {
                files: ['index.html'],
                tasks: ['concat:js'],
            }
		},

        hashres: {
            options: {
                encoding: 'utf8',
                fileNameFormat: '${name}.${hash}.${ext}',
                renameFiles: true,
            },
            scripts: {
                src: ['build/script.min.js',],
                dest: ['build/index.html'],
            },

            css: {
                src: ['build/style.min.css'],
                dest: ['build/index.html'],
            },
        },

        clean:['build/script.js']
	});


	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-hashres');
    grunt.loadNpmTasks('grunt-eslint');
	grunt.registerTask('default', ['concat', 'cssmin', 'uglify', 'connect', 'eslint', 'clean', 'hashres', 'watch']);
};