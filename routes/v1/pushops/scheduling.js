"use strict";

module.exports = async function (fastify, opts) {
	fastify.get("/schedule", {
		handler: async function (request, reply) {
			// axios get
			const { data } = await fastify.axios.pushops.post("/api/v1/ios/login", {
				userName: fastify.secrets.pushOpsusername,
				passWord: fastify.secrets.pushOpspassword,
			});
			reply.send({
				status: data.status,
			});
		},
	});
};
