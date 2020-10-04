import { Project, Respondent } from "../types";
import { sortAscBy } from "../utils/array";

const sortAscByScore = sortAscBy((r) => r.score);

/**
 * Takes a new respondent, the current list of top respondents and a project.
 * Adds the respondent to the topRespondents list if they have a higher score than any
 * of the topRespondents or if the project's participant pool is not yet full.
 */
export const calculateTopRespondents = (
	respondent: Respondent,
	topRespondents: Respondent[],
	project: Project
) => {
	topRespondents = sortAscByScore(topRespondents);

	if (topRespondents.length < project.numberOfParticipants) {
		return [respondent, ...topRespondents];
	}
	if (topRespondents[0].score < respondent.score) {
		return [respondent, ...topRespondents.slice(1)];
	}
	return topRespondents;
};
