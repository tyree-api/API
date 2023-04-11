const test0Route = (instance, options, done) => {
	instance.get("/test0", async (request, reply) => {
		return {
			testID: 0,
			response_time: reply.getResponseTime(),
		};
	});

	instance.get("/test1", async (request, reply) => {
		return {
			testID: 1,
			response_time: `${Math.round(reply.getResponseTime() * 100) / 100}ms`,
		};
	});
	done();
};

module.exports = test0Route;
