/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: [
        "./index.html",
        "./src/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],
    purge: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                gunmetal: {
                    DEFAULT: "#002f3b",
                    100: "#000a0c",
                    200: "#001418",
                    300: "#001d25",
                    400: "#002731",
                    500: "#002f3b",
                    600: "#007997",
                    700: "#00c1f1",
                    800: "#4bdbff",
                    900: "#a5edff",
                },
                midnight_green: {
                    DEFAULT: "#00495a",
                    100: "#000f12",
                    200: "#001e25",
                    300: "#002d37",
                    400: "#003c49",
                    500: "#00495a",
                    600: "#008faf",
                    700: "#04d1ff",
                    800: "#58e0ff",
                    900: "#abf0ff",
                },
                caribbean_current: {
                    DEFAULT: "#00657c",
                    100: "#001418",
                    200: "#002831",
                    300: "#003c49",
                    400: "#005062",
                    500: "#00657c",
                    600: "#00a3c8",
                    700: "#16d4ff",
                    800: "#64e3ff",
                    900: "#b1f1ff",
                },
                cerulean: {
                    DEFAULT: "#00819e",
                    100: "#001a20",
                    200: "#00343f",
                    300: "#004d5f",
                    400: "#00677e",
                    500: "#00819e",
                    600: "#00bbe4",
                    700: "#2cd8ff",
                    800: "#72e5ff",
                    900: "#b9f2ff",
                },
                xanthous: {
                    DEFAULT: "#fbb84b",
                    100: "#402801",
                    200: "#805003",
                    300: "#c07804",
                    400: "#fa9e0b",
                    500: "#fbb84b",
                    600: "#fcc66f",
                    700: "#fdd493",
                    800: "#fee3b7",
                    900: "#fef1db",
                },
                keppel: {
                    DEFAULT: "#64b09d",
                    100: "#132420",
                    200: "#254940",
                    300: "#386d60",
                    400: "#4b9180",
                    500: "#64b09d",
                    600: "#83bfb0",
                    700: "#a2cfc4",
                    800: "#c1dfd8",
                    900: "#e0efeb",
                },
                cerulean: {
                    DEFAULT: "#33748e",
                    100: "#0a171c",
                    200: "#152f39",
                    300: "#1f4655",
                    400: "#295d72",
                    500: "#33748e",
                    600: "#459abc",
                    700: "#74b3cd",
                    800: "#a2cddd",
                    900: "#d1e6ee",
                },
                paynes_gray: {
                    DEFAULT: "#2a637a",
                    100: "#081418",
                    200: "#112831",
                    300: "#193b49",
                    400: "#214f61",
                    500: "#2a637a",
                    600: "#3b8dad",
                    700: "#64adca",
                    800: "#98c8dc",
                    900: "#cbe4ed",
                },
                midnight_green: {
                    DEFAULT: "#094254",
                    100: "#020d11",
                    200: "#031a21",
                    300: "#052732",
                    400: "#073542",
                    500: "#094254",
                    600: "#117e9f",
                    700: "#1cb8e7",
                    800: "#68cfef",
                    900: "#b3e7f7",
                },
                charcoal: {
                    DEFAULT: "#163a4a",
                    100: "#040c0f",
                    200: "#09181e",
                    300: "#0d232d",
                    400: "#122f3c",
                    500: "#163a4a",
                    600: "#296d8a",
                    700: "#409ec6",
                    800: "#80bed9",
                    900: "#bfdfec",
                },
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
