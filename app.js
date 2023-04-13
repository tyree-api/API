"use strict";
require("dotenv").config();
const path = require("path");
const AutoLoad = require("@fastify/autoload");
const Fastify = require("fastify")({
	logger: true,
	trustProxy: true,
});

Fastify.register(AutoLoad, {
	dir: path.join(__dirname, "plugins"),
	options: Object.assign({}),
});
// Routes
Fastify.register(AutoLoad, {
	dir: path.join(__dirname, "routes"),
	options: Object.assign({}),
});

Fastify.listen({ port: 3000, host: "0.0.0.0" }, function (err, address) {
	if (err) {
		Fastify.log.error(err);
		process.exit(1);
	}
});
