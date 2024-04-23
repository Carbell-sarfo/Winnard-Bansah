/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/flowbite/**/*.js"
	],
	theme: {
		colors: {
			// Using modern `rgb`
			blue: 'rgb(var(--color-blue) / <alpha-value>)',
			orange: 'rgb(var(--color-orange) / <alpha-value>)',
			yellow: 'rgb(var(--color-yellow) / <alpha-value>)',
			lightGray: 'rgb(var(--color-lightGray) / <alpha-value>)',
			darkGray: 'rgb(var(--color-darkGray) / <alpha-value>)',
			black: 'rgb(var(--color-black) / <alpha-value>)',
			white: 'rgb(var(--color-white) / <alpha-value>)',


			// secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
	  
			// Using modern `hsl`
			primary: 'hsl(var(--color-primary) / <alpha-value>)',
			secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
	  
			// Using legacy `rgba`
			primary: 'rgba(var(--color-primary), <alpha-value>)',
			secondary: 'rgba(var(--color-secondary), <alpha-value>)',
		  },
		extend: {},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
