import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Need to add svg gradient colours to tailwind config
      colors: {
        lightcyan: "#84ffff",
        gradientLeft: "#8e24aa",
        gradientRight: "#1e88e5",
      },
      animation: {
        scalepulse: "scalepulse 8s ease-in-out infinite",
      },
      keyframes: {
        scalepulse: {
          "0%": { scale: "1" },
          "50%": { scale: "1.05" },
          "100%": { scale: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
