module.exports = {
	mode: 'jit',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'board-blue': '#48ACC3',
				'board-green': '#B8C9B9',
				'board-coral': '#FFAB8A',
				'background' : '#97B3CC',
			},
		},
		
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
};
