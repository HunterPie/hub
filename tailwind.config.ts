import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {

            borderWidth: {
                "thin": "1px"
            },
            gridTemplateRows: {
                "container": "65px minmax(900px, 1fr) 100px"
            },
            animation: {
                slideUp: "slideUp 100ms cubic-bezier(0, 0, 0.7, 1)",
                slideDown: "slideDown 100ms cubic-bezier(0, 0, 0.7, 1) forwards",
                scaleDown: "scaleDown 200ms cubic-bezier(0, 0, 0.3, 1)",
                scaleUp: "scaleUp 200ms cubic-bezier(0, 0, 0.3, 1) forwards",
            },
            keyframes: {
                slideUp: {
                    "0%": { transform: "translateY(+25%)", opacity: "0" },
                    "100%": { transform: "translateY(0%)", opacity: "1" }
                },
                slideDown: {
                    "0%": { transform: "translateY(0%)", opacity: "1" },
                    "100%": { transform: "translateY(+25%)", opacity: "0" }
                },
                scaleDown: {
                    "0%": { transform: "scale(1.02)", opacity: "0" },
                    "100%": { transform: "scale(1)", opacity: "1" }
                },
                scaleUp: {
                    "0%": { transform: "scale(1)", opacity: "1" },
                    "100%": { transform: "scale(1.02)", opacity: "0" }
                }
            }
        },
        colors: {
            transparent: "transparent",
            accent: {
                start: "#4B8EEE",
                end: "#10B9DE"
            },
            gray: {
                0: "#3A3E40",
                50: "#24282B",
                100: "#202427",
                200: "#1D2022",
                300: "#191C1E",
                400: "#16181A",
                500: "#121416",
                600: "#0E1011",
                700: "#0B0C0D",
                800: "#070809",
                900: "#040404"
            },
            white: {
                0: "#FFFFFF",
                50: "#E9EAEA",
                100: "#D3D4D5",
                200: "#BDBFBF",
                300: "#A7A9AA",
                400: "#929495",
                500: "#7C7E80",
                600: "#66696B",
                700: "#505355"
            }
        },
        fontFamily: {
            sans: ['Work Sans', 'sans-serif']
        }
    },
    plugins: [],
}
export default config
