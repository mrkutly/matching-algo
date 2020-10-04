import { rankIndustry } from "./industry";
import * as factory from "../utils/factory";

describe("Industry ranker", () => {
	test("returns 0 if no matches are found", () => {
		const respondent = factory.respondent({
			industry: ["Finance", "Marketing"],
		});
		const project = factory.project({
			professionalIndustry: ["Education", "Dog Treats"],
		});
		expect(rankIndustry(respondent, project)).toBe(0);
	});

	test("returns 3 points for each match", () => {
		const respondent = factory.respondent({
			industry: ["Education", "Dog Treats"],
		});
		const project = factory.project({
			professionalIndustry: ["Education", "Dog Treats"],
		});
		expect(rankIndustry(respondent, project)).toBe(6);
	});
});
