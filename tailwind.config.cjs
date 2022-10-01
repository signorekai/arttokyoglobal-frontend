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
				DEFAULT: '#F8F1F2',
			},
			black: '#111111',
			grey: {
				light: '#f9f9f9',
				mild: '#E8E8E8',
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
			maxHeight: {
				...heights,
			},
			borderWidth: {
				'1': '1px',
				'5': '5px',
				'6': '6px',
				'10': '10px',
				'12': '12px',
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
				'sm': ['clamp(0.825rem, 2vw, 0.9rem)', { lineHeight: '1.2'}],
				'5xl': ['clamp(2rem, 6vw, 3rem)', { lineHeight: '0.9'}]
			},
			fontFamily: {
        "roc-grotesk": ['roc-grotesk-wide', ...defaultTheme.fontFamily.sans],
        "futura-pt": ['futura-pt', ...defaultTheme.fontFamily.sans],
        "trade-gothic": ['trade-gothic-next', ...defaultTheme.fontFamily.sans],
      },
			maxWidth: {
				'screen-1/2': '50vw',
				'screen-2/3': '67vw',
				'screen-3/4': '75vw',
				'screen-9/10': '90vw',
				'4/5': '80%',
			},
			boxShadow: {
				'md': '0 4px 10px rgba(109, 109, 109, 0.1)',
				'mild': '0px 18px 25px -3px rgba(0, 0, 0, 0.05)',
				'card': '0px 2px 25px 9px rgba(0, 0, 0, 0.2)',
				'modal': '0px 2px 25px 9px rgba(0, 0, 0, 0.2)',
				'btn': '0px 2px 6px rgba(130, 39, 0, 0.16)',
			},
			spacing: {
				'1/6': '16.66%',
				'1/2': '50%',
				'5/6': '83.33%',
				'15': '3.75rem',
				'21': '5.25rem',
				'22': '5.5rem',
			},
			letterSpacing: {
				xl: '0.2em',
			},
			transitionProperty: {
				'spacing': 'margin, padding'
			} 
		},
	},
	plugins: [],
}
