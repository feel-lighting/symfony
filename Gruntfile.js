module.exports = function(grunt){

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.initConfig({

        uglify: {
            dist: {
                files: {
                    'web/built/js/min.js': [
                        'web/app/js/jquery.min.js',
                        'web/app/js/hammer.jquery.js',
                        'web/app/js/modernizr.js',
                        'web/app/js/app.js',
                        'web/app/js/foundation.min.js',
                        'web/app/js/foundation.topbar.js',
                        'web/app/js/owl.carousel.min.js',
                        'web/app/js/ga.js'
                    ]
                }
            }
        },

        autoprefixer: {
            single_file: {
                src: 'app/Resources/public/css/app.css',
                dest: 'app/Resources/public/css/app.css'
            }
        },

        cssmin: {
            combine: {
                files: {
                    'web/built/css/min.css': ['web/app/css/css.css', 'web/app/css/app.css']
                }
            }
        },

        jshint: {
            all: ['app/Resources/public/js/app.js']
        },

        copy: {

            js: {
                files: [
                    {expand: true, cwd: 'app/Resources/public/', src: ['js/**'], dest: 'web/app/', filter: 'isFile'},
                    {src: 'bower_components/jquery/dist/jquery.min.js', dest: 'web/app/js/jquery.min.js'},
                    {src: 'bower_components/hammerjs/hammer.js', dest: 'web/app/js/hammer.jquery.js'},
                    {src: 'bower_components/modernizr/modernizr.js', dest: 'web/app/js/modernizr.js'},
                    {src: 'bower_components/foundation/js/foundation.min.js', dest: 'web/app/js/foundation.min.js'},
                    {src: 'bower_components/foundation/js/foundation/foundation.topbar.js', dest: 'web/app/js/foundation.topbar.js'},
                    {src: 'bower_components/owlcarousel/owl-carousel/owl.carousel.min.js', dest: 'web/app/js/owl.carousel.min.js'}
                ]
            },

            css: {
                files: [
                    {expand: true, cwd: 'app/Resources/public/', src: ['css/**'], dest: 'web/app/', filter: 'isFile'}
                ]
            },

            init: {
                files: [
                    {src: 'bower_components/foundation/scss/foudation/_settings.scss', dest: 'app/Resources/public/scss/_settings.scss'},
                    {src: 'bower_components/foundation/scss/foundation.scss', dest: 'app/Resources/public/scss/_foundation_mod.scss'},
                    {src: 'zz.save', dest: 'zz'},
                    {src: 'var/bootstrap.test.php.save', dest: 'var/bootstrap.test.php'}
                ]
            }

        },

        watch: {

            js: {
                files: ['**/*.js'],
                tasks: ['js'],
                options: {
                    spawn: false
                }
            },

            scss: {
                files: ['**/*.scss'],
                tasks: ['css'],
                options: {
                    spawn: false
                }
            }
        },

        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        }

    });

    grunt.registerTask('default', ['compass', 'autoprefixer', 'copy:js', 'copy:css', 'jshint', 'uglify', 'cssmin']);
    grunt.registerTask('dev', ['jsdev', 'jshint']);
    grunt.registerTask('jsdev', ['copy:js', 'css']);
    grunt.registerTask('js', ['copy:js', 'jshint', 'uglify']);
    grunt.registerTask('css', ['compass', 'autoprefixer', 'copy:css', 'cssmin']);
    grunt.registerTask('init', ['copy:init', 'default']);

};