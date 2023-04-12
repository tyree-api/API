"use strict";

const fp = require("fastify-plugin");
const FastifySecretsHashiCorp = require("fastify-secrets-hashicorp");

module.exports = fp(async function (fastify, opts) {
	fastify.register(FastifySecretsHashiCorp, {
		secrets: {
			pushOpsusername: {
				name: "serviceKeys/pushoperations",
				key: "userName",
			},
			pushOpspassword: {
				name: "serviceKeys/pushoperations",
				key: "passWord",
			},
		},
		clientOptions: {
			vaultOptions: {
				token: process.env.VAULT_KEY,
				endpoint: process.env.VAULT_ADDR,
			},
			mountPoint: "api-core",
		},
	});
});
