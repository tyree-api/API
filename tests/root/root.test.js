const supertest = require("supertest");
const app = require("../../app");

describe("Root Endpoint Checks", () => {
	test("GET `/` endpoint", async () => {
		await app.ready();
		const response = await supertest(app.server)
			.get("/")
			.expect(501)
			.expect("Content-Type", "application/json; charset=utf-8");

		expect(response.body).toEqual({
			statusCode: 501,
			error: "Not Implemented",
			message: "Not Implemented",
		});
	});
});
