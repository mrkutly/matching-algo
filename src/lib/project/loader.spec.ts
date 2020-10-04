import { loadProject } from "./loader";

describe("Project loader", () => {
	test("loads the project.json file", async (done) => {
		const project = await loadProject();
		expect(project.numberOfParticipants).toBeGreaterThan(0);
		done();
	});
});
