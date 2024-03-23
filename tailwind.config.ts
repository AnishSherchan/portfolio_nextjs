import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      dark_primary_background: "000000",
      dark_secondary_background: "111111",
      dark_heading: "FFFFFF",
      dark_text: "C3C3C3",
      dark_active_link: "0072F5",
      dark_stroke: "373737",
      dark_primary_btn: "EDEDED",
    },
    fontSize: {
      sm: "0.75rem",
      base: "0.875rem",
      xl: "1rem",
      "2xl": "1.125rem",
      "3xl": "2.5rem",
    },
  },
  plugins: [],
};
export default config;
