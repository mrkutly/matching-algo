import { calculateTopRespondents } from './top';
import * as factory from '../utils/factory';

describe('calculateTopRespondents function', () => {
	test('adds a top respondent if they rank higher than another', () => {
		const top = factory.arrayFrom(factory.respondent, 5, { score: 10 });
		const project = factory.project({ numberOfParticipants: 5 });
		const respondent = factory.respondent({ score: 11 });
		const nextTop = calculateTopRespondents(respondent, top, project);
		expect(nextTop).toContainEqual(respondent);
	});

	test('does not add a top respondent if they rank lower than the rest', () => {
		const top = factory.arrayFrom(factory.respondent, 5, { score: 10 });
		const project = factory.project({ numberOfParticipants: 5 });
		const respondent = factory.respondent({ score: 9 });
		const nextTop = calculateTopRespondents(respondent, top, project);
		expect(nextTop).not.toContainEqual(respondent);
	});

	test('removes the lowest scoring respondent when adding a new one', () => {
		const lowest = factory.respondent({ score: 8 });
		const top = [
			...factory.arrayFrom(factory.respondent, 4, { score: 10 }),
			lowest
		];
		const project = factory.project({ numberOfParticipants: 5 });
		const respondent = factory.respondent({ score: 9 });
		const nextTop = calculateTopRespondents(respondent, top, project);
		expect(nextTop).not.toContainEqual(lowest);
		expect(nextTop).toContainEqual(respondent);
	});
});