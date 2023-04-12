const Fastify = require("fastify");
const fp = require("fastify-plugin");
const App = require("../app");

function build() {
	const app = Fastify();

	beforeAll(async () => {
		await app.register(fp(App));
		await app.ready();
	});

	afterAll(() => app.close());

	return app;
}

module.exports = { build };
