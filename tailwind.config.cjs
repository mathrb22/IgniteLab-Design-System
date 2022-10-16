/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.tsx'],
	theme: {
		screens: {
			xxs: '450px',

			xs: '540px',

			sm: '640px',

			md: '768px',

			lg: '1024px',

			xl: '1280px',

			'2xl': '1536px',
		},
		fontSize: {
			xs: 14,
			sm: 16,
			md: 18,
			lg: 20,
			xl: 24,
			'2xl': 32,
		},
		colors: {
			black: '#000000',
			white: '#ffffff',
			transparent: 'transparent',

			gray: {
				900: '#121214',
				800: '#202024',
				400: '#7C7C8A',
				200: '#C4C4CC',
				100: '#E1E1E6',
			},

			cyan: {
				500: '#81D8F7',
				300: '#9BE1FB',
			},
		},
		extend: {
			fontFamily: {
				sans: 'Inter, sans-serif',
			},
		},
	},
	plugins: [],
};
