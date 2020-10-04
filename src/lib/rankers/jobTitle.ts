import { Respondent, Project } from "../types";

export const rankJobTitle = (respondent: Respondent, project: Project) =>
	project.professionalJobTitles.includes(respondent.jobTitle) ? 10 : 0;
