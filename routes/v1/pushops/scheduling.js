"use strict";

const pushops = require("@tyree-api/api-pushoperations-module");

module.exports = async function (fastify, opts) {
	fastify.get(
		"/schedule",
		{
			config: {
				rateLimit: {
					max: 10,
					timeWindow: "30 seconds",
				},
			},
		},
		async function (request, reply) {
			const response = await pushops.getSchedules(
				fastify.secrets.pushOpsapiaddr,
				fastify.secrets.pushOpsusername,
				fastify.secrets.pushOpspassword
			);
			reply.send(response);
		}
	);
};
