import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // Listen on all network interfaces (for deployment)
    port: 5173, // Use the default port or choose your custom port
  },
  plugins: [react()],
});
