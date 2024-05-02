/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/flowbite/**/*.js"
	],
	theme: {
		colors: {
			// Using modern `rgb`
			winblue: 'rgb(var(--clr-win-blue) / <alpha-value>)',
			winorange: 'rgb(var(--clr-win-orange) / <alpha-value>)',
			winyellow: 'rgb(var(--clr-win-yellow) / <alpha-value>)',
			winlightGray: 'rgb(var(--clr-win-lightGray) / <alpha-value>)',
			windarkGray: 'rgb(var(--clr-win-darkGray) / <alpha-value>)',
			winblack: 'rgb(var(--clr-win-black) / <alpha-value>)',
			winwhite: 'rgb(var(--clr-win-white) / <alpha-value>)',

			// kofi: '#ff49db',
			kofi: 'rgb(var(--clr-kofi) / <alpha-value>)',
			// kofi: 'rgb(var(--clr-yellow) / <alpha-value>)',
			"ama": 'rgba(255 231 17)',


			// secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
	  
			// Using modern `hsl`
			// primary: 'hsl(var(--color-primary) / <alpha-value>)',
			// secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
	  
			// Using legacy `rgba`
			// primary: 'rgba(var(--color-primary), <alpha-value>)',
			// secondary: 'rgba(var(--color-secondary), <alpha-value>)',
		  },
		extend: {},
	},
	plugins: [
		require('flowbite/plugin'),
		require('@tailwindcss/typography')
	],
}
