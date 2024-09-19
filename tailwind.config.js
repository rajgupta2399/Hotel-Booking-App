const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Your existing content paths
    flowbite.content(), // Add Flowbite content paths
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(), // Add Flowbite plugin
  ],
};
