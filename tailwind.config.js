/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                black: '#050505',
                pink: {
                    DEFAULT: '#FFB7C5',    // Very Light Pink
                    dim: '#FFB7C5',        // Consistent accent
                }
            },
            fontFamily: {
                sans: ['"Inter"', 'sans-serif'], // Cleaner font for this design
                mono: ['"Fira Code"', 'monospace'],
            },
        },
    },
    plugins: [],
}
