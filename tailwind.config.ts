import type { Config } from "tailwindcss";

export default {
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all files in src folder
    "./pages/**/*.{js,jsx,ts,tsx}", // Includes files in pages folder
    "./components/**/*.{js,jsx,ts,tsx}", // Includes files in components folder
    "./app.js", // Includes app.js file
    "./layout.tsx", // Includes layout.tsx
    "./page.tsx", // Includes page.tsx
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
