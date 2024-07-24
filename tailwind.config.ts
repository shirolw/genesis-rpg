module.exports = {
  content: [
    "./source/presentation/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./source/presentation/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./source/presentation/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "var(--font-primary)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#111827",
          "primary-content": "#f3f4f6",
          secondary: "#312e81",
          "secondary-content": "#e0e7ff",
          accent: "#701a75",
          "accent-content": "#fae8ff",
          neutral: "#f3f4f6",
          "neutral-content": "#000",
          "base-100": "#1f2937",
          "base-200": "#374151",
          "base-300": "#4b5563",
          "base-content": "#f3f4f6",
          info: "#a5f3fc",
          "info-content": "#164e63",
          success: "#bbf7d0",
          "success-content": "#14532d",
          warning: "#fde68a",
          "warning-content": "#7c2d12",
          error: "#fda4af",
          "error-content": "#881337",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
