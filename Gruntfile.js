module.exports = function(grunt)
{
	grunt.initConfig(
	{
		typescript: 
		{
			base:
			{
				src: ['ts/*.ts'],
				dest: 'js',
				options: 
				{
					module: 'amd',
					target: 'es5',
					sourceMap: true,
					declaration: true,
				}
			}
		},
		watch: 
		{
			scripts:
			{
				files: ['ts/*.ts', 'index.html'],
				tasks: ['typescript'],
				options:
				{
					spawn: false 
				}
			}
		}

	});

	// grunt.loadNpmTasks('grunt-contrib-connect'); 
	grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-ts'); 
	grunt.loadNpmTasks('grunt-typescript');
	grunt.registerTask('default', ["typescript", "watch"]); 
}