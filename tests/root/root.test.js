const Fastify = require("fastify");
const fp = require("fastify-plugin");
const App = require("../../app");

test("default root route", async () => {
	const app = Fastify();
	await app.register(fp(App));
	await app.ready();

	const res = await app.inject({
		url: "/",
	});
	expect(res.json()).toEqual({
		statusCode: 501,
		error: "Not Implemented",
		message: "Not Implemented",
	});
});
