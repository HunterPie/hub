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
            },
            red: {
                0: "#F41162",
                50: "#E8105D",
                100: "#DC0F58",
                200: "#C30E4E",
                300: "#AB0C45",
                400: "#920A3B",
                500: "#7A0931",
                600: "#620727",
                700: "#49051D"
            },
            green: {
                0: "#1ACA65",
                50: "#19C060",
                100: "#17B65B",
                200: "#15A251",
                300: "#128D47",
                400: "#10793D",
                500: "#0D6533",
                600: "#0A5128",
                700: "#083D1E"
            },
            blue: {
                0: "#006fee",
                50: "#0069e2",
                100: "#0064d6",
                200: "#0059be",
                300: "#004ea7",
                400: "#00438f",
                500: "#003877",
                600: "#002c5f",
                700: "#002147"
            }
        },
        fontFamily: {
            sans: ['Work Sans', 'sans-serif']
        }
    },
    plugins: [],
}
export default config
