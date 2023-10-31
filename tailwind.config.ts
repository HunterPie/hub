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
                "container": "50px minmax(900px, 1fr) 100px"
            }
        },
        colors: {
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
            sans: ['WorkSans', 'sans-serif']
        }
    },
    plugins: [],
}
export default config
