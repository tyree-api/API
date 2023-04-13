// "use strict";

// const fp = require("fastify-plugin");
// const helmet = require("@fastify/helmet");
// const Cron = require("fastify-cron");

// module.exports = fp(async function (fastify, opts) {
// 	fastify.register(Cron, {
// 		jobs: [
// 			{
// 				cronTime: "*/1 * * * *", // Everyday at midnight UTC
// 				onTick: async () => {
// 					console.log("Cron job running");
// 				},
// 				start: true,
// 			},
// 		],
// 	});
// });
