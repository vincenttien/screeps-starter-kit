module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        creds: grunt.file.readJSON('screeps.config.json'),
        screeps: {
            options: {
                email: '<%= creds.username %>',
                password: '<%= creds.password %>'
            },
            dist: {
                src: ['dist/*.js']
            }
        }
    });
}