"use strict";

const fp = require("fastify-plugin");

module.exports = fp(async function (fastify, opts) {
	fastify.register(require("@fastify/rate-limit"), {
		global: true,
		max: 3,
		timeWindow: "30 seconds",
	});
});
