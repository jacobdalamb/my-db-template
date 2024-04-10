import db from "@astrojs/db";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import { authorUrlString } from "./src/utils/meta";

// https://astro.build/config
export default defineConfig({
	site: `${authorUrlString}`,
	output: "server",
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	integrations: [db()],
});
