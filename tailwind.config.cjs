/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                playfair: ["\"Playfair Display\"", "serif"],
                rokkitt: ["\"Rokkitt\"", "serif"]
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
};
