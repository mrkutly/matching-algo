import app from './lib/app';

async function run() {
	console.log("============ Top Respondents ============");
	try {
		await app();
	} catch (e) {
		console.error(e);
	} finally {
		process.exit(0);
	}
}

run();