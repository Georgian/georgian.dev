export interface Highlight {
	title: string;
	description: string;
	url?: string;
}

export interface HighlightColumn {
	label: string;
	entries: Highlight[];
}

export const HIGHLIGHTS: HighlightColumn[] = [
	{
		label: "Recent work",
		entries: [
			{
				title: "TreasurUp",
				description: "Treasury platforms for commercial banks.",
				url: "https://treasurup.com/",
			},
			{
				title: "SpendOne",
				description: "Indirect spend management.",
				url: "https://spendone.com",
			},
		],
	},
	{
		label: "Also built",
		entries: [
			{
				title: "Dr Camelia Grec",
				description: "A case portfolio for an endodontist.",
				url: "https://drcameliagrec.ro",
			},
			{
				title: "Inqubator",
				description: "A website for a counselling practice.",
				url: "https://inqubator.ro",
			},
			{
				title: "Velocitas",
				description: "The cycling club I race for.",
				url: "https://velocitas.ro",
			},
		],
	},
	{
		label: "Elsewhere",
		entries: [
			{
				title: "LinkedIn",
				description: "Everything before 2023.",
				url: "https://www.linkedin.com/in/ggrec",
			},
			{
				title: "Strava",
				description: "Where the weekends go.",
				url: "https://www.strava.com/athletes/3426471",
			},
			{
				title: "Stack Overflow",
				description: "Pre-LLM era.",
				url: "https://stackoverflow.com/users/1774643/georgian",
			},
		],
	},
];
