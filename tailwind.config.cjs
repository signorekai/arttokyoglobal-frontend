/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

const heights = {
	'screen-1/3': '33vh',
	'screen-1/2': '50vh',
	'screen-2/3': '67vh',
	'screen-3/4': '75vh',
	'screen-9/10': '90vh',
}

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			md: '768px',
      lg: '1140px',
			xl: '1340px',
      '2xl': '1600px',
      wide: '1920px',
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			red: '#DE2F39',
			peach: {
				default: '#F8F1F2',
			},
			black: '#111111',
			grey: {
				light: '#f9f9f9',
				mid: '#7d7d7d',
				dark: '#535353',
				darker: '#222222',
			}
		},
		extend: {
			lineHeight: {
				'11': '2.5rem'
			},
			width: {
				'screen-3/4': '75vw',
			},
			height: {
				140: '35rem',
				150: '37.5rem',
				...heights,
			},
			maxWidth: {
				'screen-2/3': '67vw',
				'screen-3/4': '75vw',
				'screen-9/10': '90vw',
			},
			maxHeight: {
				...heights,
			},
			borderWidth: {
				'1': '1px',
				'5': '5px',
				'6': '6px',
			},
			borderRadius: {
				'4xl':  '2rem',
			},
			fontWeight: {
				bold: 600,
				extrabold: 700,
				black: 800,
				heavy: 900,
			},
			fontSize: {
				'body': ['clamp(1rem, 2vw, 1.125rem)', { lineHeight: '1.2'}],
				'5xl': ['clamp(2rem, 6vw, 3rem)', { lineHeight: '0.9'}]
			},
			fontFamily: {
        "roc-grotesk": ['roc-grotesk-wide', ...defaultTheme.fontFamily.sans],
        "futura-pt": ['futura-pt', ...defaultTheme.fontFamily.sans],
        "trade-gothic": ['trade-gothic-next', ...defaultTheme.fontFamily.sans],
      },
			maxWidth: {
				"screen-1/2": "50%",
				"screen-2/3": "67%",
			},
			boxShadow: {
				'md': '0 4px 10px rgba(109, 109, 109, 0.1)',
				'card': '0px 2px 25px 9px rgba(0, 0, 0, 0.2)',
				'modal': '0px 2px 25px 9px rgba(0, 0, 0, 0.2)',
				'btn': '0px 2px 6px rgba(130, 39, 0, 0.16)',
			},
		},
	},
	plugins: [],
}
