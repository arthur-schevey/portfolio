/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			boxShadow: {
				fun: '5px 5px rgba(0, 98, 90, 0.4), 10px 10px rgba(0, 98, 90, 0.3), 15px 15px rgba(0, 98, 90, 0.2), 20px 20px rgba(0, 98, 90, 0.1), 25px 25px rgba(0, 98, 90, 0.05)',
				base: '6px 6px 0px 0px var(--primary-500)'
			},
			fontSize: {
				sm: '0.750rem',
				base: '1rem',
				xl: '1.333rem',
				'2xl': '1.777rem',
				'3xl': '2.369rem',
				'4xl': '3.158rem',
				'5xl': '4.210rem',
			},
			fontFamily: {
				sans: ['Nunito', 'sans-serif'],
				heading: ['Inter', 'sans-serif'],
			},
			// does this do anything?
			fontWeight: {
				normal: '400',
				bold: '700',
			},
		},
	},
	variants: {
	  extend: {},
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography')],

	daisyui: {
		prefix: "daisy-", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		themes: [
			{
			  light: {
				...require("daisyui/src/theming/themes")["light"],
				primary: "#f5ae45",
				secondary: "#f7d788",
				accent: "#b13737",
				'base-100': "#f4efed",
				neutral: "#22222a",
				fontFamily: 'Nunito',
			  },
			  dark: {
				...require("daisyui/src/theming/themes")["dark"],
				primary: "#ff9a2e",
				secondary: "#ffe6c7",
				accent: "#db5451",
				'base-100': "#141315",
				neutral: "#f9e1f1",
			  },
			},
		  ],
	  },
  };
  
