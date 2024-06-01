/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "2px 8px 10px 0px rgba(228,229,246,0.6), -2px 8px 8px 0px rgba(228,229,246,0.6)",
      },
      maxWidth: {
        desktop: "1440px",
      },
      colors: {
        "Soft-Blue": "hsl(231, 69%, 60%)",
        "Soft-Red": "hsl(0, 94%, 66%)",
        "Grayish-Blue": "hsl(229, 8%, 60%)",
        "Very-Dark-Blue": "hsl(229, 31%, 21%)",
      },
      fontFamily: {
        rubik: "Rubik, sans-serif",
      },
    },
  },
  plugins: [],
};
