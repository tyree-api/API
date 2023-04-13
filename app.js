"use strict";
require("dotenv").config();
const Fastify = require("fastify")({
	logger: false,
	trustProxy: true,
});
const path = require("path");
const AutoLoad = require("@fastify/autoload");

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

module.exports = Fastify;
