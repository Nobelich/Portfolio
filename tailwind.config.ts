import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        page: "#000000",
        ink: "#f5f5f5",
        muted: "#888888",
        surface: "#141414",
        border: "#2a2a2a",
      },
    },
  },
  plugins: [],
};

export default config;
