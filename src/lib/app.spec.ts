import app from "./app";

describe("app entry point", () => {
	test("starts without crashing", async () => {
		let err;
		try {
			await app();
		} catch (error) {
			err = error;
		} finally {
			expect(err).toBeUndefined();
		}
	});
});
