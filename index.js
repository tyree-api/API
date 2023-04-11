require("./proc");

const app = require("fastify")({
	logger: true,
});
// Plugins
app.register(import("@fastify/rate-limit"), {
	global: false,
	max: 3000,
	errorResponseBuilder: function (request, context) {
		return {
			statusCode: 429,
			error: "Too Many Requests",
			message: `I only allow ${context.max} requests per ${context.after} to this route. Try again soon.`,
			date: Date.now(),
			expiresIn: Math.round(context.ttl / 1000), // milliseconds
		};
	},
});

// Routes
const routes = require("./src/routes");
app.register(routes);

// Server
const start = async () => {
	try {
		await app.listen({
			port: 3000,
		});
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};

start();
