"use strict";

const fp = require("fastify-plugin");
const helmet = require("@fastify/helmet");
const cors = require("@fastify/cors");

module.exports = fp(async function (fastify, opts) {
	fastify.register(helmet, { contentSecurityPolicy: false });
	fastify.register(cors, {
		origin: "*",
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Authorization", "Content-Type"],
		exposedHeaders: ["Authorization"],
	});
});
