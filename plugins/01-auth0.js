"use strict";

const fp = require("fastify-plugin");
const Auth0Verify = require("fastify-auth0-verify");
const fastifyGuard = require("fastify-guard");

module.exports = fp(async function (fastify, opts) {
	fastify.register(fastifyGuard, {
		errorHandler: (result, req, reply) => {
			return reply.unauthorized("You are not allowed to call this endpoint");
		},
	});

	fastify.register(Auth0Verify, {
		domain: fastify.secrets.auth0domain,
		audience: fastify.secrets.auth0audience,
	});
});
