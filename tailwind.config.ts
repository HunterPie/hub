import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                md: "900px"
            },
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
                end: "#10B9DE",
                solid: "#0d76ef"
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
            "light-red": {
                50: "#f51d6a",
                100: "#f52972",
                200: "#f64181",
                300: "#f75891",
                400: "#f870a1",
                500: "#fa88b1",
                600: "#fba0c0",
                700: "#fcb8d0"
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
            "light-green": {
                50: "#25cd6d",
                100: "#31cf74",
                200: "#48d584",
                300: "#5fda93",
                400: "#76dfa3",
                500: "#8de5b2",
                600: "#a3eac1",
                700: "#baefd1"
            },
            yellow: {
                0: "#F6A522",
                50: "#ea9d20",
                100: "#dd951f",
                200: "#c5841b",
                300: "#ac7318",
                400: "#946314",
                500: "#7b5311",
                600: "#62420e",
                700: "#4a320a"
            },
            "light-yellow": {
                50: "#f6aa2d",
                100: "#f7ae38",
                200: "#f8b74e",
                300: "#f9c064",
                400: "#fac97a",
                500: "#fbd291",
                600: "#fbdba7",
                700: "#fce4bd"
            },
            orange: {
                0: "#EC5D1C"
            },
            blue: {
                0: "#4B8EEE",
                50: "#4787E2",
                100: "#4480D6",
                200: "#3C72BE",
                300: "#3563A7",
                400: "#2D558F",
                500: "#264777",
                600: "#1E395F",
                700: "#172B47"
            },
            "light-blue": {
                0: "#5E8EED",
                50: "#6694ee",
                100: "#6e99ef",
                200: "#7ea5f1",
                300: "#8eb0f2",
                400: "#9ebbf4",
                500: "#afc7f6",
                600: "#bfd2f8",
                700: "#cfddfa"
            },
            violet: {
                0: "#8E51FF",
                50: "#874DF2",
                100: "#8049e6",
                200: "#7241cc",
                300: "#6339b3",
                400: "#553199",
                500: "#472980",
                600: "#392066",
                700: "#2b184d"
            },
            "light-violet": {
                50: "#945aff",
                100: "#9962ff",
                200: "#a574ff",
                300: "#b085ff",
                400: "#bb97ff",
                500: "#c7a8ff",
                600: "#d2b9ff"
            },
            pink: {
                0: "#FF4ECD",
                50: "#f24ac3",
                100: "#e646b9",
                200: "#cc3ea4",
                300: "#b33790",
                400: "#992f7b",
                500: "#802767",
                600: "#661f52",
                700: "#4d173e"
            },
            purple: {
                0: "#9353d3",
                50: "#8c4fc8",
                100: "#844bbe",
                200: "#7642a9",
                300: "#673a94",
                400: "#58327f",
                500: "#4a2a6a",
                600: "#3b2154",
                700: "#2c193f"
            }
        },
        fontFamily: {
            sans: ['Work Sans', 'sans-serif']
        }
    },
    plugins: [],
}
export default config
