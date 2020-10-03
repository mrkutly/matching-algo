import { Respondent } from '../types';

// finds the closest city and returns its distance as a score. If nothing is in range, returns 0.
export const rankLocation = (respondent: Respondent) => {
	if (respondent.distance > 100) return 0;
	return (100 - respondent.distance) / 10;
};