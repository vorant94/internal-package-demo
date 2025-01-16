import devServer from "@hono/vite-dev-server";
import { defineConfig } from 'vite'
import path from "node:path";

export default defineConfig({
	resolve: {
		alias: {
			common: path.resolve(process.cwd(), "../common"),
		},
	},
	build: {
		sourcemap: true,
		lib: {
			entry: "src/main.ts",
			formats: ["es"],
			fileName: "main",
		},
	},
  plugins: [
    devServer({
      entry: 'src/index.tsx'
    })
  ]
})
