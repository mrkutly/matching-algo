import { loadProject } from "./project/loader";
import { loadTopRespondents } from "./respondents/loader";
import { printRespondents } from "./respondents/respondent";

/**
 * Runs the application.
 */
async function main() {
	const project = await loadProject();
	const topRespondents = await loadTopRespondents(project);

	if (process.env.NODE_ENV !== "test") {
		printRespondents(topRespondents.slice().reverse());
	}
}

export default main;
