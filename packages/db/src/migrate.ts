// packages/db/src/migrate.ts

import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";

// Load same env file you use in drizzle.config.ts
config({ path: "../../apps/server/.env" });

const url = process.env.DATABASE_URL;
if (!url) {
	throw new Error("DATABASE_URL is not set");
}

const sql = neon(url);
const db = drizzle(sql);

async function main() {
	try {
		await migrate(db, { migrationsFolder: "./src/migrations" });
		console.log("✅ Migrations applied successfully");
	} catch (error) {
		console.error("❌ Error running migrations:", error);
		process.exit(1);
	}
}

main();
