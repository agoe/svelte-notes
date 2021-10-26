import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

const __dirname = (() => {
  let x = path.dirname(decodeURI(new URL(import.meta.url).pathname));
  return path.resolve(process.platform == "win32" ? x.substr(1) : x);
})();

const srcPath = path.resolve(__dirname, "./src/");
console.log(__dirname);
console.log(srcPath);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],

  resolve: {
    alias: [{ find: "@", replacement: srcPath }],
  },
});

/*
const __dirname = (() => {
  let x = path.dirname(decodeURI(new URL(import.meta.url).pathname));
  return path.resolve(process.platform == "win32" ? x.substr(1) : x);
})();

    alias: {
      '@': path.resolve('/src'),
    },

      resolve: {
    alias: [{ find: "@", replacement: "src" }],
  },
*/
