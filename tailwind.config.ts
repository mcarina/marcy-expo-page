import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        primaryforeground: "var(--primary-foreground)", 
        secondary: "var(--secondary)",
        secondaryforeground:"var(--secondary-foreground)",
        card: "var(--card)",
        cardforeground: "var(--card-foreground)",
        mutedforeground: "var(--muted-foreground)",
        colorSelects: "var(--color-selects)"
      },
    },
  },
  plugins: [],
};
export default config;