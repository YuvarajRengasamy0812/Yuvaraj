import { defineConfig } from "vite";
import visitorLog from "./server/visitorLog.js";

export default defineConfig({
  plugins: [visitorLog()],
  server: {
    // the log file changes on every visit; don't let it trigger reloads
    watch: { ignored: ["**/analytics/**"] },
  },
});
