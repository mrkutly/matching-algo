import { GeoLocation } from "../types";

const RADIUS_OF_EARTH = 6371;
const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

export const Location = (lat: number, long: number): GeoLocation => ({
	latitude: lat,
	longitude: long,
});

// calculates distance between two points using haversine formula
// https://en.wikipedia.org/wiki/Great-circle_distance
export const distance = (a: GeoLocation, b: GeoLocation) => {
	const latDiff = toRadians(b.latitude - a.latitude);
	const longDiff = toRadians(b.longitude - a.longitude);
	const x =
		Math.sin(latDiff / 2) ** 2 +
		Math.sin(longDiff / 2) ** 2 *
			Math.cos(toRadians(a.latitude)) *
			Math.cos(toRadians(b.latitude));

	const y = 2 * Math.asin(Math.sqrt(x));
	return y * RADIUS_OF_EARTH;
};
