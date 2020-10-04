/* istanbul ignore file */
import faker from "faker";
import { City, Project, Respondent } from "../types";

export const arrayFrom = <T>(
	factoryFunc: (x: any) => T,
	length: number,
	opts: any = {}
) => {
	const array = [];
	while (array.length < length) {
		array.push(factoryFunc(opts));
	}
	return array;
};

export const respondent = (opts: any = {}): Respondent => ({
	firstName: faker.name.firstName(),
	gender: "any",
	jobTitle: faker.name.jobTitle(),
	industry: arrayFrom(faker.company.bsBuzz, 5),
	city: faker.address.city(),
	location: {
		latitude: faker.address.latitude(),
		longitude: faker.address.longitude(),
	},
	distance: faker.random.number(6000),
	score: faker.random.number(30),
	...opts,
});

export const city = (opts: any = {}): City => {
	const _city = faker.address.city();
	const state = faker.address.state();
	const country = faker.address.country();

	return {
		location: {
			id: faker.random.alpha({ count: 12 }),
			city: _city,
			state,
			country,
			formattedAddress: `${_city}, ${state}, ${country}`,
			location: {
				latitude: Number(faker.address.latitude()),
				longitude: Number(faker.address.longitude()),
			},
			...opts,
		},
	};
};

export const project = (opts: any = {}): Project => ({
	cities: arrayFrom(city, 10),
	numberOfParticipants: faker.random.number(10),
	timezone: faker.address.timeZone(),
	genders: "N/A",
	country: faker.address.country(),
	incentive: faker.random.number(400),
	name: faker.company.bsBuzz(),
	professionalJobTitles: arrayFrom(faker.name.jobTitle, 8),
	professionalIndustry: arrayFrom(faker.company.bsBuzz, 5),
	education: faker.random.arrayElements([
		"High School",
		"Bachelors",
		"Masters",
		"Doctorate",
		"PhD",
	]),
	...opts,
});

export const NYC = () => ({
	location: {
		id: "ChIJOwg_06VPwokRYv534QaPC8g",
		city: "New York",
		state: "NY",
		country: "US",
		formattedAddress: "New York, NY, USA",
		location: {
			latitude: 40.7127753,
			longitude: -74.0059728,
		},
	},
});
