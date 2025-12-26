import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import history from "connect-history-api-fallback";
import type { Connect } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "spa-fallback",
      configureServer(server) {
        // explicitly cast to the type Connect.NextHandleFunction
        const middleware = history({
          index: "/index.html",
          htmlAcceptHeaders: ["text/html", "application/xhtml+xml"],
        }) as unknown as Connect.NextHandleFunction;

        server.middlewares.use(middleware);
      },
    },
  ],
});
