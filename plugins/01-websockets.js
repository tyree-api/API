"use strict";

const fp = require("fastify-plugin");

module.exports = fp(async function (fastify) {
	fastify.register(require("@fastify/websocket"));

	fastify.get("/ws", { websocket: true }, (connection, req) => {
		connection.socket.on("message", (message) => {
			connection.socket.send(message);
		});
	});
});
