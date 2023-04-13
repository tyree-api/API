"use strict";
require("dotenv").config();
const path = require("path");
const AutoLoad = require("@fastify/autoload");

// Pass --options via CLI arguments in command to enable these options.
module.exports.options = {};

module.exports = async function (fastify, opts) {
	// !

	// Do not touch the following lines
	// Plugins
	fastify.register(AutoLoad, {
		dir: path.join(__dirname, "plugins"),
		options: Object.assign({}, opts),
	});
	// Routes
	fastify.register(AutoLoad, {
		dir: path.join(__dirname, "routes"),
		options: Object.assign({}, opts),
	});
};
