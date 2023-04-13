"use strict";

const fp = require("fastify-plugin");

module.exports = fp(async function (fastify, opts) {
	fastify.register(require("fastify-axios"), {
		clients: {
			pushops: {
				baseURL: fastify.secrets.pushOpsapiaddr,
				headers: {
					"Content-Type": "application/json",
					"User-Agent": "PushScheduler/132 CFNetwork/1408.0.1 Darwin/22.5.0",
				},
			},
		},
	});
});
