/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["'Inter'", "system-ui", "sans-serif"],
                pixel: ["'Press Start 2P'", "cursive"],
            },
            colors: {
                // Dark, bold, and neutral color scheme
                'bg-primary': '#1A1A1A',        // Dark charcoal background
                'bg-secondary': '#252525',      // Slightly lighter dark gray
                'text-primary': '#FFFFFF',      // Pure white for strong contrast
                'text-secondary': '#B0B0B0',    // Light gray for secondary text
                'accent': '#00D9FF',            // Vibrant cyan - strong and modern
                'border': '#404040',            // Medium gray border
                'tag-game': '#FF3366',          // Bold red-pink
                'tag-tool': '#00E5A0',          // Vibrant teal
                'tag-personal': '#FFB800',      // Bold amber/gold
            },
            boxShadow: {
                'card': '0 4px 12px rgba(0, 0, 0, 0.5)',
                'card-hover': '0 8px 24px rgba(0, 0, 0, 0.6)',
                'pixel': '6px 6px 0px rgba(0, 0, 0, 0.8)',
                'pixel-hover': '8px 8px 0px rgba(0, 0, 0, 0.9)',
            }
        },
    },
    plugins: [],
}
