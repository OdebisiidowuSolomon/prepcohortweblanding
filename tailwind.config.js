/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        baseColor: "#1F4497",
      },
      screens: {
        tablet: "992px",
        phone: "767px",
        miniphone: "307px",
      },
    },
  },
  plugins: [],
};
