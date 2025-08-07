/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{jsx,tsx,html}"],
    theme: {
        extend: {
            colors: {
                "poly-black": "#000000",
                "poly-white": "#f5f5f5",
                "poly-green-1": "#9fa9ed",
                "poly-green-2": "#3577ff",
                "poly-indigo-1": "#8571FF",
                "poly-indigo-2": "#b3a8ff",
            },
            fontFamily: {
                body: ["Satoshi", "sans"],
                mono: ["Spline Sans Mono", "monospace"],
            },
        },
    },
    plugins: [],
}
