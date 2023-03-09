module.exports = {
    content: ['./src/**/*.{js,jsx}', './public/index.html'],
    theme: {
        extend: {
            colors: {
                green: '#ccd5ae',
                mint: "#e9edc9",
                yellow: "#fefae0",
                beige: "#faedcd",
                taupe: "#d4a373"
            },
            fontFamily: {
                'montserrat': ['Montserrat', 'sans-serif'],
                'noto': ['Noto Serif Display', 'serif'] ,
                'pady': ['Padyakke Expanded One', 'cursive'],
                'synco': ['Syncopate', 'sans-serif'],
                'unica': ['Unica One', 'cursive'],
              },
        },
    },
    plugins: [],
};