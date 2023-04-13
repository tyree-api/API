"use strict";

module.exports = async function (fastify, opts) {
	fastify.get("/verify", {
		preValidation: fastify.authenticate,
		handler: function (request, reply) {
			reply.send(request.user);
		},
	});

	fastify.get("/has-role", (req, reply) => {
		reply.send(fastify.guard.hasRole(req, "read:basic"));
	});

	fastify.get("/has-scope", (req, reply) => {
		reply.send(fastify.guard.hasScope(req, "read:basic"));
	});
	fastify.get(
		"/test",
		{
			preValidation: fastify.authenticate,
			preHandler: [fastify.guard.scope("read:basic")],
		},
		(req, reply) => {
			reply.send(req.user);
		}
	);
};
