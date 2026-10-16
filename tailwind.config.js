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
          bg: "#0B1220",
          sidebar: "#0F172A",
          panel: "#111C2E",
          elevated: "#172338",
          border: "#263449",
          borderLight: "#33455E",
          primary: "#818CF8",
          primaryHover: "#6366F1",
          secondary: "#38BDF8",
          secondaryHover: "#0EA5E9",
          textPrimary: "#F1F5F9",
          textSecondary: "#94A3B8",
          textMuted: "#64748B",
          success: "#34D399",
          warning: "#FBBF24",
          error: "#F87171",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};
