/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		screen: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			gray: "#8492a6",
			gray: {
				200: "hsl(240, 78%, 98%)",
				400: "hsl(234, 14%, 74%)",
				600: "hsl(233, 13%, 49%)",
				800: "hsl(232, 13%, 33%)",
			},
			blue: "#dddefb",
		},
		extend: {},
	},
	plugins: [],
};
