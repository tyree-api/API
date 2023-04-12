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
};
