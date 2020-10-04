import { Respondent, Project } from "../types";

const countMatches = (a: string[], b: string[]): number =>
	a.reduce((matches, el) => {
		if (b.includes(el)) return matches + 1;
		return matches;
	}, 0);

export const rankIndustry = (respondent: Respondent, project: Project) =>
	countMatches(project.professionalIndustry, respondent.industry) * 3;
