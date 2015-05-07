module.exports = function(grunt) {
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        copy: {
            main: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "bootstrap/dist/css/bootstrap.min.css",
                    "bootstrap/dist/css/bootstrap.css.map",
                    "jquery/dist/jquery.min.js"
                ],
                "dest": 'server/public/assets/vendors/'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    //Default Tasks
    grunt.registerTask('default', ['copy']);

};