import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{ts,jsx,tsx}",
    "./src/components/**/*.{ts,jsx,tsx}",
    "./src/app/**/*.{ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        current: "currentColor",
        red: "#ffc82c",
        primary: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        grayDark: "#273444",
        gray: "#8492a6",
        grayLight: "#d3dce6",
        white: "#FFFFFF",
      },
      typography: {
        // Customizing prose styles
        'prose': {
          css: {
            color: '#333', // Default text color
            h2: {
              color: 'red', // Custom heading color
              fontSize: '2.5rem', // Custom heading font size
            },
            // Other customizations...
          },
        },
    },

    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
    // plugins: [
    //   require('@tailwindcss/typography'),
    //   // other plugins...
    // ],
  },
}
export default config;
