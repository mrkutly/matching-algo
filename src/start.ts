import app from './lib/app';

try {
	app();
} catch (e) {
	console.error(e);
} finally {
	process.exit(0);
}