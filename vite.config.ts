import { defineConfig } from "vite";
import { devSsr } from "dreamland/vite";
import { literalsHtmlCssMinifier } from "@literals/rollup-plugin-html-css-minifier";

export default defineConfig({
	plugins: [
		devSsr({
			entry: "/src/main-server.ts",
		}),
		literalsHtmlCssMinifier({
			include: ["src/**/*.tsx"],
		}),
	],
});
