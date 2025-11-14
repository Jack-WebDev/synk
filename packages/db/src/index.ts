import dotenv from "dotenv";
import { eq } from "drizzle-orm";

dotenv.config({
	path: "../../apps/server/.env",
});

import { drizzle } from "drizzle-orm/node-postgres";

export const db = drizzle(process.env.DATABASE_URL || "");
export { eq };
