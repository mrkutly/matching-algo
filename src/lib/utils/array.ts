enum Order {
	ASC = "ASC",
	DESC = "DESC",
}

const identity = (x: any) => x;

/**
 * Curried sort for creating custom sorting functions.
 */
const sort = (order: Order) => (getValue = identity) => (list: any[]) =>
	list.slice().sort((a, b) => {
		if (order === Order.ASC) return getValue(a) - getValue(b);
		return getValue(b) - getValue(a);
	});

/**
 * HOF for creating custom ascending sorts
 */
export const sortAscBy = sort(Order.ASC);

/**
 * HOF for creating custom descending sorts
 */
export const sortDescBy = sort(Order.DESC);
