module.exports = {
  content: [
    "./source/presentation/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./source/presentation/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        base: "var(--font-base)",
        primary: "var(--font-primary)",
      },
    },
  },
  plugins: [],
};
