"use strict";

module.exports = async function (fastify, opts) {
	fastify.get(
		"/",
		{
			config: {
				rateLimit: {
					max: 300,
					timeWindow: "1 minute",
				},
			},
		},
		async function (request, reply) {
			return fastify.secrets.pushOpsusername;
		}
	);
	fastify.get("/verify", {
		handler: function (request, reply) {
			reply.send(request.user);
		},
		preValidation: fastify.authenticate,
	});

	fastify.get("/test", {
		handler: async function (request, reply) {
			// axios get
			const { data } = await fastify.axios.pushops.post("/api/v1/ios/login", {
				userName: fastify.secrets.pushOpsusername,
				passWord: fastify.secrets.pushOpspassword,
			});
			reply.send(data.status);
		},
	});
};
