import * as Resp from './respondent';
import * as factory from '../utils/factory';
import { distance } from '../utils/distance';

describe('Respondent functions', () => {
	test('shortestDistance finds the closest city when it matches exactly', () => {
		const location = { latitude: 1, longitude: 1 };
		const matchingCity = factory.city({ location });
		const cities = [...factory.arrayFrom(factory.city, 3), matchingCity];
		expect(Resp.shortestDistance(location, cities)).toBe(0);
	});

	test('shortestDistance finds the closest city when the city matches', () => {
		const location = { latitude: 1, longitude: 1 };
		const closeLocation = { latitude: 1.0000001, longitude: 1.000001 };
		const closestCity = factory.city({ location: closeLocation });
		const cities = [...factory.arrayFrom(factory.city, 3), closestCity];
		expect(Resp.shortestDistance(location, cities)).toBe(distance(location, closeLocation));
	});

	test('getScore gets a matching score for a project that matches well', () => {
		const industries = ['Financial Services', 'Computer Software'];
		const jobTitles = ['AI/ML Scientist', '.NET Developer'];
		const nyc = factory.NYC();
		const project = factory.project({
			numberOfParticipants: 4,
			professionalIndustry: industries,
			professionalJobTitles: jobTitles,
			cities: [nyc]
		});

		const respondent = factory.respondent({
			location: nyc.location.location,
			distance: 0,
			industry: industries,
			jobTitle: jobTitles[0]
		});

		expect(Resp.getScore(respondent, project)).toBe(26);
	});

	test('getScore gets a matching score for a project that does not match', () => {
		const industries = ['Financial Services', 'Computer Software'];
		const jobTitles = ['AI/ML Scientist', '.NET Developer'];
		const nyc = factory.NYC();
		const project = factory.project({
			numberOfParticipants: 4,
			professionalIndustry: industries,
			professionalJobTitles: jobTitles,
			cities: [nyc]
		});

		const respondent = factory.respondent({
			location: { latitude: 1, longitude: 1 },
			distance: 101,
			industry: ["Pet supplies", "Marketing"],
			jobTitle: "Dog-treat specialist"
		});

		expect(Resp.getScore(respondent, project)).toBe(0);
	});

	test('RespondentMatch generates a respondent match struct', () => {
		const industries = ['Financial Services', 'Computer Software'];
		const jobTitles = ['AI/ML Scientist', '.NET Developer'];
		const nyc = factory.NYC();
		const project = factory.project({
			numberOfParticipants: 4,
			professionalIndustry: industries,
			professionalJobTitles: jobTitles,
			cities: [nyc]
		});
		const { firstName, gender } = factory.respondent();

		const respondent = Resp.RespondentMatch(
			[
				firstName,
				gender,
				jobTitles[0],
				industries.join(','),
				'New York, NY, US',
				String(nyc.location.location.latitude),
				String(nyc.location.location.longitude),
			],
			project
		);

		expect(respondent).toEqual({
			city: "New York, NY, US",
			distance: 0,
			firstName,
			gender,
			industry: industries,
			jobTitle: jobTitles[0],
			location: nyc.location.location,
			score: 26
		});
	});
});