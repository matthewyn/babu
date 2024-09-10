import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "building-architecture": "url('/building-architecture.jpg')",
        "product-detail-clean": "url('/product-detail-clean.jpg')",
        "product-detail-safe": "url('/product-detail-safe.jpg')",
        "cleaner-single": "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('/cleaner-single.jpg')",
        "login-banner": "url('/login-banner.png')",
      },
      colors: {
        "green-shade": "#008000",
        "green-tint": "#22ad01",
        "green-medium-tint": "#7ccc6c",
        "green-extra-tint": "#d5f8cc",
        "green-extra-shade": "#0c3d37",
        "green-special": "#00d959",
        "beige-shade": "#f4f2f0",
        "gray-tint": "#f5f5f7",
        "gray-shade": "#d2d2d7",
        "orange-tint": "#ffae62",
        "purple-tint": "#d48bc8",
        "pink-tint": "#ff808b",
        "blue-tint": "#74d2e7",
      },
      rotate: {
        "250": "250deg",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            success: {
              DEFAULT: "#22ad01",
              foreground: "#fff",
            },
            default: {
              DEFAULT: "#0f0f0f",
              foreground: "#fff",
            },
            secondary: {
              DEFAULT: "#EEEDEB",
              foreground: "#000",
            },
          },
        },
      },
    }),
  ],
};
export default config;
