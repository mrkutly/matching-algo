import { sortAscBy, sortDescBy } from './array';

describe('array utils', () => {
	test('sortAscBy sorts ascending by identity without mutating original array', () => {
		const nums = [4, 3, 6, 1, 2];
		const sorted = sortAscBy()(nums);
		expect(sorted).toEqual([1, 2, 3, 4, 6]);
		expect(nums).toEqual([4, 3, 6, 1, 2]);
	});

	test('sortAscBy sorts ascending by given property without mutating original array', () => {
		const items = [{ id: 4 }, { id: 3 }, { id: 6 }, { id: 1 }, { id: 2 }];
		const sorted = sortAscBy(x => x.id)(items);
		expect(sorted).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 6 }]);
		expect(items).toEqual([{ id: 4 }, { id: 3 }, { id: 6 }, { id: 1 }, { id: 2 }]);
	});

	test('sortDescBy sorts descending by identity without mutating original array', () => {
		const nums = [4, 3, 6, 1, 2];
		const sorted = sortDescBy()(nums);
		expect(sorted).toEqual([6, 4, 3, 2, 1]);
		expect(nums).toEqual([4, 3, 6, 1, 2]);
	});

	test('sortDescBy sorts descending by given property without mutating original array', () => {
		const items = [{ id: 4 }, { id: 3 }, { id: 6 }, { id: 1 }, { id: 2 }];
		const sorted = sortDescBy(x => x.id)(items);
		expect(sorted).toEqual([{ id: 6 }, { id: 4 }, { id: 3 }, { id: 2 }, { id: 1 }]);
		expect(items).toEqual([{ id: 4 }, { id: 3 }, { id: 6 }, { id: 1 }, { id: 2 }]);
	});

});