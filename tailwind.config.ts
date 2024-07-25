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
    colors: {
      primary: {
        light: "#9f45b0",
        DEFAULT: "#44008b",
      },
      secondary: {
        DEFAULT: "#00076f",
      },
      accent: {
        light: "#ffe4f2",
        DEFAULT: "#e54ed0",
      },
      base: {
        100: "#3F3F3f",
        DEFAULT: "#000000",
      },
    },
  },
  plugins: [],
};
