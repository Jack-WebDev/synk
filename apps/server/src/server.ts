import { env } from "@synk/config";
import { createServer } from "./index.js";

createServer()
	.then((app) => {
		app.listen({ port: env.API_PORT, host: "0.0.0.0" }, (err) => {
			if (err) {
				app.log.error(err);
				process.exit(1);
			}
			console.log(`Server running on port ${env.API_PORT}`);
		});
	})
	.catch((err) => {
		console.error("Failed to create server:", err);
		process.exit(1);
	});
