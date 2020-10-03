import { rankLocation } from './location';
import * as factory from '../utils/factory';

describe('Location ranker', () => {
	test('returns 0 if the distance is greater than 100km', () => {
		const respondent = factory.respondent({ distance: 101 });
		expect(rankLocation(respondent)).toBe(0);
	});

	test('returns 1/10th the difference between 100km and the distance for matches', () => {
		let respondent = factory.respondent({ distance: 20 });
		expect(rankLocation(respondent)).toBe(8);

		respondent = factory.respondent({ distance: 10 });
		expect(rankLocation(respondent)).toBe(9);
	});
});