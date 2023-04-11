"use strict";

const fp = require("fastify-plugin");

module.exports = fp(async function (fastify, opts) {
	fastify.register(require("@fastify/rate-limit"), {
		global: false,
		max: 40,
		timeWindow: "30 seconds",
		errorResponseBuilder: function (request, context) {
			return {
				code: 429,
				error: "Too Many Requests",
				message: `I only allow ${context.max} requests per ${context.after} to this Endpoint. Try again soon.`,
				date: Date.now(),
				expiresIn: context.ttl,
			};
		},
	});
});
