// Current offset of an IANA time zone, e.g. Europe/Bucharest → "UTC+2" in winter, "UTC+3" in summer.
export function utcOffset(timeZone: string, date = new Date()): string | undefined {
	return new Intl.DateTimeFormat("en-GB", { timeZone, timeZoneName: "shortOffset" })
		.formatToParts(date)
		.find((part) => part.type === "timeZoneName")
		?.value.replace("GMT", "UTC");
}
