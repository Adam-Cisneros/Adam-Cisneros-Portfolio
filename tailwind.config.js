export const content = [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
];
export const safelist = [
    "translate-y-0",
    "-translate-y-full",
    "top-0",
    "sticky",
    // or use a regex for patterns:
    // { pattern: /^(bg|text|hover:bg|hover:text|md):/ }
];
export const theme = {
    extend: {},
};
export const plugins = [];