// Proccess Managment
process.on("uncaughtException", (err) => {
	// Uncaught Exception
	console.log("Uncaught Exception");
	console.log(err);
	process.exit(1);
});

process.on("unhandledRejection", (err) => {
	// Unhandled Rejection
	console.log("Unhandled Rejection");
	console.log(err);
	process.exit(1);
});

process.on("SIGTERM", () => {
	// Proccess kill
	console.log("Terminated");
	process.exit(0);
});

process.on("SIGINT", () => {
	console.log("\n");
	console.log("Terminating");
	// Proccess Interupted
	setTimeout(() => {
		console.log("\n");
		console.log("Terminiated :(");
		console.log("\n");
		process.exit(0);
	}, 5000);
});
