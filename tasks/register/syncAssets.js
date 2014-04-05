module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
		'html2js:dev',
		'less:dev',
		'sync:dev',
		'coffee:dev'
	]);
};
