"use strict";

const pushops = require("@tyree-api/api-pushoperations-module");

module.exports = async function (fastify, opts) {
	fastify.get(
		"/schedule",
		{
			preValidation: fastify.authenticate,
			preHandler: [fastify.guard.scope(["read:schedules"])],
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

	fastify.get(
		"/wwt",
		{
			// preValidation: fastify.authenticate,
			// preHandler: [fastify.guard.scope(["read:schedules"])],
			config: {
				rateLimit: {
					max: 10,
					timeWindow: "30 seconds",
				},
			},
		},
		async function (request, reply) {
			const response = await pushops.getWhosWorkingToday(
				fastify.secrets.pushOpsapiaddr,
				fastify.secrets.pushOpsusername,
				fastify.secrets.pushOpspassword
			);
			reply.send(response);
		}
	);
};
