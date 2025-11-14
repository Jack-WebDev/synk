import type { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";
import { fromNodeHeaders } from "better-auth/node";
import { auth } from "@my-better-t-app/auth";

export async function createContext({ req, res }: CreateFastifyContextOptions) {
	const session = await auth.api.getSession({
		headers: fromNodeHeaders(req.headers),
	});
	return { session };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
