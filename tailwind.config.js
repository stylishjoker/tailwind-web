/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 3s linear infinite',
				wiggle: 'wiggle is ease-in-out infinite',
				'icon-spin': 'icon 0.3s linear',
			},
			keyframes: {
				wiggle: {
					'0%,100%': { transform: 'rotate(-12deg)' },
					'50%': { transform: 'rotate(12deg)' },
				},
				icon: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
			},
			boxShadow: {
				btn: '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',
			},
			transitionProperty: {
				menu: 'all 0.3s ease',
			},
		},
		screens: {
			xsm: '490px',

			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [],
};
