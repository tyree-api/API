"use strict";

module.exports = async function (fastify, opts) {
	fastify.get("/", async function (request, reply) {
		return Math.round((10 * reply.getResponseTime()) / 10) + "ms";
	});
};
