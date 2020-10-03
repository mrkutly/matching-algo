export interface GeoLocation {
	latitude: number;
	longitude: number;
}

export interface City {
	location: {
		id: string;
		city: string;
		state: string;
		country: string;
		formattedAddress: string;
		location: GeoLocation;
	};
}

export interface Respondent {
	firstName: string;
	gender: string;
	jobTitle: string;
	industry: string[];
	city: string;
	location: GeoLocation;
	distance: number;
	score: number;
}

export interface Project {
	cities: City[];
	numberOfParticipants: number;
	timezone: string;
	genders: string;
	country: string;
	incentive: number;
	name: string;
	professionalJobTitles: string[];
	professionalIndustry: string[];
	education: string[];
}
