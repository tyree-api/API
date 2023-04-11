const V1Index = require("./v1");

// root Router
const rootRouter = (instance, options, done) => {
	instance.register(V1Index, { prefix: "/v1" });
	instance.get(
		"/",
		{
			config: {
				rateLimit: {
					max: 3000,
					timeWindow: "30 seconds",
				},
			},
		},
		(req, reply) => {
			reply.send({
				response_time: `${Math.round(reply.getResponseTime() * 100) / 100}ms`,
			});
		}
	);
	done();
};

module.exports = rootRouter;
