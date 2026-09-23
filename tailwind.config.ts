import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coal: "#0A0A0F",
        metal: "#1A1A24",
        lime: "#C6FF3D",
        plasma: "#7C5CFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
