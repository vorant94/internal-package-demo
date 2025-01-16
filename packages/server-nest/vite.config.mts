import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import path from "node:path";

export default defineConfig({
  resolve: {
      alias: {
          common: path.resolve(process.cwd(), "../common"),
      },
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'nest',
      appPath: './src/main.ts',
      tsCompiler: 'swc',
    }),
  ],
});