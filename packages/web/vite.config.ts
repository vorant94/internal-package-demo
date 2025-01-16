import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			common: path.resolve(process.cwd(), "../common"),
		},
	},
  plugins: [react()],
})
