const supertest = require("supertest");
const app = require("../../app");

test("GET `/` route", async () => {
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
