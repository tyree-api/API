const supertest = require("supertest");
const app = require("../../app");

describe("Push Operations Endpoint Checks", () => {
	test("GET `/v1/pushops/schedule` NO AUTH endpoint", async () => {
		await app.ready();
		const response = await supertest(app.server)
			.get("/v1/pushops/schedule")
			.expect(401)
			.expect("Content-Type", "application/json; charset=utf-8");

		expect(response.status).toEqual(401);
	});
});
