import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default {
  server: {
    host: "0.0.0.0", // Listen on all interfaces
    port: 5173, // You can use a custom port or rely on the default
  },
};
