import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // Listen on all network interfaces (for deployment)
    port: process.env.PORT || 5173, // Use the PORT env variable, fallback to 5173
  },
  plugins: [react()],
});
