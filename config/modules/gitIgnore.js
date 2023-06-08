import { app } from '../../gulpfile.js'

function cb() { }

const gitIgnore = () => {
	if (!app.plugins.fs.existsSync('.gitignore')) {
		app.plugins.fs.writeFile('.gitignore', '', cb)
		app.plugins.fs.appendFile('.gitignore', 'node_modules/\r\n', cb)
		app.plugins.fs.appendFile('.gitignore', 'phpmailer/\r\n', cb)
		app.plugins.fs.appendFile('.gitignore', '.gitignore\r\n', cb)
		app.plugins.fs.appendFile('.gitignore', '**/*.zip\r\n', cb)
		app.plugins.fs.appendFile('.gitignore', 'build/\r\n', cb)
		app.plugins.fs.appendFile('.gitignore', 'temp/\r\n', cb)
	}

	return app.gulp.src(app.paths.srcFolder)
}

export { gitIgnore }
