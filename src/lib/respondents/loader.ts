import parse from "csv-parse";
import fs from "fs";
import { RespondentMatch } from "./respondent";
import { Project, Respondent } from "../types";
import { calculateTopRespondents } from "./top";

/**
 * Loads the respondent rows from the csv, ranks the top ones according to the number
 * of participants required by the project, and returns them as a promise.
 */
export const loadTopRespondents = (project: Project): Promise<Respondent[]> =>
	new Promise((resolve, reject) => {
		let topRespondents: Respondent[] = [];
		const fileStream = fs.createReadStream(
			"./data/respondents_data_test.csv",
			"utf8"
		);
		const parserStream = parse();
		fileStream.on("open", () => fileStream.pipe(parserStream));

		parserStream.on("readable", () => {
			let record: string[];
			while ((record = parserStream.read())) {
				const respondent = RespondentMatch(record, project);
				topRespondents = calculateTopRespondents(
					respondent,
					topRespondents,
					project
				);
			}
		});

		parserStream.on("end", () => resolve(topRespondents));
		parserStream.on("error", (err) => reject(err));
		fileStream.on("error", (err) => reject(err));
	});
