"use strict";

module.exports = async function (fastify, opts) {
	fastify.get(
		"/",
		{
			config: {
				rateLimit: {
					max: 3,
					timeWindow: "1 minute",
				},
			},
		},
		async function (request, reply) {
			return "yeet";
		}
	);
};
