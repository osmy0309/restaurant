/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				FF80: "rgba(255, 255, 255, 0.8)",
				FF40: "rgba(255, 255, 255, 0.4)",
			},
		},
	},
	plugins: [],
};
