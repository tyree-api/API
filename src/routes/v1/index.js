const test0Route = require("./tests/test0.route");

// v1 Router
const v1Router = (instance, options, done) => {
	instance.register(test0Route, { prefix: "/tests" });
	done();
};

module.exports = v1Router;
