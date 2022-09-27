/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,jsx,ts,tsx}',
		'./src/components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		colors: {
			cultured: '#F0F0F0',
			smoky: '#1E2023',
			cerulean: {
				100: '#88E7FC',
				200: '#4CDAFA',
				300: '#10CEF9',
				400: '#06C4EF',
				500: '#06B4DB',
			},
			space: {
				100: '#47509A',
				200: '#3A427E',
				300: '#2D3362',
				400: '#272C54',
				500: '#1B1F3B',
			},
			gold: {
				100: '#E2CA8D',
				200: '#D9BB6D',
				300: '#D5B35D',
				400: '#D1AB4D',
				500: '#CCA43B',
			},
		},
		fontFamily: {
			ichiji: ['Ichiji', 'cursive'],
		},
		fontSize: {
			'3xl': '4rem',
		},
		extend: {},
	},
	plugins: [],
};
