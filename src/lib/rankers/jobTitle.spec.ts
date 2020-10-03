import { rankJobTitle } from './jobTitle';
import * as factory from '../utils/factory';

describe('Job Title ranker', () => {
	test('returns 0 if no matches are found', () => {
		const respondent = factory.respondent({ jobTitle: "NodeJS Developer" });
		const project = factory.project({ professionalJobTitles: ["Dogsitter", "Catsitter"] });
		expect(rankJobTitle(respondent, project)).toBe(0);
	});

	test('returns 10 points for a match', () => {
		const respondent = factory.respondent({ jobTitle: "Dogsitter" });
		const project = factory.project({ professionalJobTitles: ["Dogsitter", "Catsitter"] });
		expect(rankJobTitle(respondent, project)).toBe(10);
	});
});