module.exports = function(grunt){

    grunt.initConfig({

        injector: {
            options:{
                addRootSlash:false
            },
            local_dependencies: {
                files: {
                    'index.html': ['scripts/**/*.js', 'styles/**/*.css']
                }
            }
            /*
            bower_dependencies: {
                files: {
                    'index.html': ['bower.json'],
                }
            }
            */
        },
        //Move the dependencies from bower components directory to the wanted directories
        bower: {
            dev: {
                js_dest: 'scripts/',
                css_dest: 'styles/',
                fonts_dest:'styles/fonts',
                options: {
                    keepExpandedHierarchy: false
                }
            }
        },
        watch:{

        }
        /*
        bowerInstall: {

            target: {
                src: [
                    'index.html'
                ],
                cwd: '',
                dependencies: true,
                devDependencies: true
            }
        }
        */

    });


    grunt.loadNpmTasks('grunt-bower');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-bower-install');
    grunt.loadNpmTasks('grunt-asset-injector');

    grunt.registerTask('default',['bower','injector']);

}

