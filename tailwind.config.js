/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        workspace: {
          bg: "#0D1315",
          sidebar: "#101719",
          panel: "#141D20",
          panelLight: "#182226",
          panelHover: "#1C272B",
          border: "#243034",
          borderLight: "#2E3D43",
          orange: "#FF7417",
          orangeHover: "#FF8533",
          textPrimary: "#F0F4F5",
          textSecondary: "#839BA8",
          textMuted: "#526673",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};
