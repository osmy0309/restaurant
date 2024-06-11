/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				"left-bottom": "-5px 5px 10px rgba(0, 0, 0, 0.3)",
			},
			fontFamily: {
				Kaushan: ["Kaushan Script"],
				Jaini_Purva: ["Jaini Purva"],
				Sail_Regular: ["Sail Regular"],
				Roboto: ["Roboto Regular", "sans-serif"],
				Roboto_Bold: ["Roboto Bold", "sans-serif"],
			},
			colors: {
				FF80: "rgba(255, 255, 255, 0.8)",
				FF40: "rgba(255, 255, 255, 0.4)",
				bgmenu: "rgba(31, 11, 1, 1)",
				bordermenu: "rgba(31, 11, 1, 0.17)",
			},
			boxShadow: {
				"3xl": "0 10px 15px 0px rgba(0, 0, 0, 0.3)",
			},
		},
	},
	plugins: [require("tailwindcss-animated")],
};
