/** @type {import("prettier").Config} */
export default {
	printWidth: 100,
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	useTabs: true,
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss" /* Must come last */],
	tailwindStylesheet: "./src/styles/global.css",
	overrides: [
		{
			files: "**/*.astro",
			options: {
				parser: "astro",
			},
		},
		{
			files: ["*.mdx", "*.md"],
			options: {
				printWidth: 80,
			},
		},
	],
};
