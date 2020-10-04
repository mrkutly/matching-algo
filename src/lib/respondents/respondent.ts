import { rankLocation } from "../rankers/location";
import { rankIndustry } from "../rankers/industry";
import { rankJobTitle } from "../rankers/jobTitle";
import { distance, Location } from "../utils/distance";
import { City, GeoLocation, Project, Respondent } from "../types";
import { sortDescBy } from "../utils/array";

const sortDescByName = sortDescBy((r: Respondent) => r.firstName.length);

/**
 * Finds the closest city in a list of cities and returns the distance to it
 */
export const shortestDistance = (location: GeoLocation, cities: City[]) => {
	return cities.reduce((shortest: number, city: City) => {
		const next = distance(location, city.location.location);
		if (next < shortest) return next;
		return shortest;
	}, Infinity);
};

/**
 * Calculates the respondent's match score for a project
 */
export const getScore = (respondent: Respondent, project: Project) => {
	const locationScore = rankLocation(respondent);
	const jobTitleScore = rankJobTitle(respondent, project);
	const industryScore = rankIndustry(respondent, project);

	return industryScore + jobTitleScore + locationScore;
};

/**
 * Takes a row from the csv and a project and returns a Respondent struct with score and distance calculated.
 */
export const RespondentMatch = (
	[firstName, gender, jobTitle, industry, city, latitude, longitude]: string[],
	project: Project
): Respondent => {
	const location = Location(Number(latitude), Number(longitude));
	const distance = shortestDistance(location, project.cities);
	const resp = {
		firstName,
		gender,
		jobTitle,
		industry: industry.split(","),
		city,
		location,
		distance,
		score: 0,
	};
	const score = getScore(resp, project);

	return {
		...resp,
		score,
	};
};

/**
 * Prints a respondent nicely to the console.
 */
export const printRespondents = (respondents: Respondent[]) => {
	const nameLength = sortDescByName(respondents)[0].firstName.length;
	respondents.forEach((resp, idx) => {
		console.log(
			`${idx + 1}. ${resp.firstName.padEnd(nameLength, " ")} | ${
				resp.distance
			}km away | ${resp.score} matching score`
		);
	});
};
