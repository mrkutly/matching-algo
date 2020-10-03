import { distance, Location } from './distance';

describe('distance', () => {
	test('calculates the distance between two locations', () => {
		const locA = Location(53.32055555555556, -1.7297222222222221);
		const locB = Location(53.31861111111111, -1.6997222222222223);
		expect(distance(locA, locB)).toBe(2.0043678382716896);
	});

	test('calculates a 0 distance between the same location', () => {
		const locA = Location(53.32055555555556, -1.7297222222222221);
		const locB = Location(53.32055555555556, -1.7297222222222221);
		expect(distance(locA, locB)).toBe(0);
	});
});