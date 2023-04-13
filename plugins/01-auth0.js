"use strict";

const fp = require("fastify-plugin");
const Auth0Verify = require("fastify-auth0-verify");

module.exports = fp(async function (fastify, opts) {
	fastify.register(Auth0Verify, {
		domain: fastify.secrets.auth0domain,
		audience: fastify.secrets.auth0audience,
	});
});
