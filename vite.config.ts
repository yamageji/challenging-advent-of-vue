import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import { resolve, dirname } from "node:path";
import vue from "@vitejs/plugin-vue";
import VueI18nPlugin from "@intlify/vite-plugin-vue-i18n";
import svgLoader from "vite-svg-loader";

console.log(
  "includes",
  resolve(dirname(fileURLToPath(import.meta.url)), "./locales/**")
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    svgLoader({ defaultImport: "component" }),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), "./locales/**"),
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
