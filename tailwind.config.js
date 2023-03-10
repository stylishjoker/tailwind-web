/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 3s linear infinite',
				wiggle: 'wiggle is ease-in-out infinite',
			},
			keyframes: {
				wiggle: {
					'0%,100%': { transform: 'rotate(-12deg)' },
					'50%': { transform: 'rotate(12deg)' },
				},
			},
			boxShadow: {
				btn: '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',
			},
		},
		screens: {
			'md-3': '1200px',
		},
	},
	plugins: [],
};
