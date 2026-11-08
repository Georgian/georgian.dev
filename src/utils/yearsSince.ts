const ONES = [
	"zero",
	"one",
	"two",
	"three",
	"four",
	"five",
	"six",
	"seven",
	"eight",
	"nine",
	"ten",
	"eleven",
	"twelve",
	"thirteen",
	"fourteen",
	"fifteen",
	"sixteen",
	"seventeen",
	"eighteen",
	"nineteen",
];
const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

// Whole years since a "YYYY-MM" month; a year completes on the first of that month.
export function yearsSince(since: string, now = new Date()): number {
	const [year = now.getFullYear(), month = 1] = since.split("-").map(Number);
	return Math.floor(((now.getFullYear() - year) * 12 + now.getMonth() + 1 - month) / 12);
}

function toWords(n: number): string | undefined {
	if (n < 20) return ONES[n];
	if (n >= 100) return undefined;
	const tens = TENS[Math.floor(n / 10)];
	return n % 10 ? `${tens}-${ONES[n % 10]}` : tens;
}

// Capitalised, since it opens a sentence: 14 → "Fourteen", 21 → "Twenty-one". Falls back to digits outside 0–99.
export function spellOut(n: number): string {
	const words = toWords(n) ?? String(n);
	return words.charAt(0).toUpperCase() + words.slice(1);
}
