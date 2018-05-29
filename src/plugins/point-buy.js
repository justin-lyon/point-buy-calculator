export const costs = [
	{ score: 8, cost: 0 },
	{ score: 9, cost: 1 },
	{ score: 10, cost: 2 },
	{ score: 11, cost: 3 },
	{ score: 12, cost: 4 },
	{ score: 13, cost: 5 },
	{ score: 14, cost: 7 },
	{ score: 15, cost: 9 }
];

export const getCost = score => {
	const costItem = costs.find(c => c.score === score);
	return costItem ? costItem.cost : "-";
};

export const validateNextCost = (currentScore, remaining) => {
	const currentCost = getCost(Number(currentScore));
	const nextCost = getCost(Number(currentScore + 1));
	const costDiff = currentCost - nextCost;

	return remaining + costDiff >= 0;
};

export const sourceModel = [
	{ id: "b0", name: "player's handbook", abbr: "phb" },
	{ id: "b1", name: "volo's guide to monsters", abbr: "vgm" },
	{ id: "b2", name: "mordenkainen's tome of foes", abbr: "mtf" },
];

export const raceModel = [
	{ id: 'r0', sourceId: "b0", name: 'dwarf' },
	{ id: 'r1', sourceId: "b0", name: 'dragonborn' },
	{ id: 'r2', sourceId: "b0", name: 'elf' },
	{ id: 'r3', sourceId: "b0", name: 'gnome' },
	{ id: 'r4', sourceId: "b0", name: 'halfling' },
	{ id: 'r5', sourceId: "b0", name: 'half-elf' },
	{ id: 'r6', sourceId: "b0", name: 'half-orc' },
	{ id: 'r7', sourceId: "b0", name: 'human' },
	{ id: 'r8', sourceId: "b0", name: 'tiefling' },

	{ id: 'r9', sourceId: "b1", name: 'aasimar' },
	{ id: 'r10', sourceId: "b1", name: 'bugbear' },
	{ id: 'r11', sourceId: "b1", name: 'firbolg' },
	{ id: 'r12', sourceId: "b1", name: 'goblin' },
	{ id: 'r13', sourceId: "b1", name: 'hobgoblin' },
	{ id: 'r14', sourceId: "b1", name: 'kenku' },
	{ id: 'r15', sourceId: "b1", name: 'kobold' },
	{ id: 'r16', sourceId: "b1", name: 'lizardfolk' },
	{ id: 'r17', sourceId: "b1", name: 'orc' },
	{ id: 'r18', sourceId: "b1", name: 'tabaxi' },
	{ id: 'r19', sourceId: "b1", name: 'triton' },
	{ id: 'r20', sourceId: "b1", name: 'yuan-ti pureblood' },

	{ id: 'r21', sourceId: "b2", name: 'gith' },
];

export const subRaceModel = [
	{ id: 'sr0', sourceId: "b0", raceId: 'r0', name: 'hill' },
	{ id: 'sr1', sourceId: "b0", raceId: 'r0', name: 'mountain' },
	{ id: 'sr2', sourceId: "b0", raceId: 'r2', name: 'drow' },
	{ id: 'sr3', sourceId: "b0", raceId: 'r2', name: 'high' },
	{ id: 'sr4', sourceId: "b0", raceId: 'r2', name: 'wood' },
	{ id: 'sr5', sourceId: "b0", raceId: 'r3', name: 'forest' },
	{ id: 'sr6', sourceId: "b0", raceId: 'r3', name: 'rock' },
	{ id: 'sr7', sourceId: "b0", raceId: 'r4', name: 'lightfoot' },
	{ id: 'sr8', sourceId: "b0", raceId: 'r4', name: 'stout' },
	{ id: 'sr9', sourceId: "b0", raceId: 'r7', name: 'normal' },
	{ id: 'sr10', sourceId: "b0", raceId: 'r7', name: 'variant' },

	{ id: 'sr11', sourceId: "b1", raceId: 'r9', name: 'protector' },
	{ id: 'sr12', sourceId: "b1", raceId: 'r9', name: 'scourge' },
	{ id: 'sr13', sourceId: "b1", raceId: 'r9', name: 'fallen' },

	{ id: 'sr14', sourceId: "b2", raceId: 'r21', name: 'githyanki' },
	{ id: 'sr15', sourceId: "b2", raceId: 'r21', name: 'githzerai' },
	{ id: 'sr16', sourceId: "b2", raceId: 'r2', name: 'eladrin' },
	{ id: 'sr17', sourceId: "b2", raceId: 'r2', name: 'sea elf' },
	{ id: 'sr18', sourceId: "b2", raceId: 'r2', name: 'shadar-kai' },
	{ id: 'sr19', sourceId: "b2", raceId: 'r0', name: 'duergar' },
	{ id: 'sr20', sourceId: "b2", raceId: 'r3', name: 'deep' },
];

export const bonusModel = [
	{ id: "bo0", parentId: 'r0', name: 'constitution', value: 2 },
	{ id: "bo1", parentId: 'r1', name: 'strength', value: 2 },
	{ id: "bo2", parentId: 'r1', name: 'charisma', value: 1 },
	{ id: "bo3", parentId: 'r2', name: 'dexterity', value: 2 },
	{ id: "bo4", parentId: 'r3', name: 'intelligence', value: 2 },
	{ id: "bo5", parentId: 'r4', name: 'dexterity', value: 2 },
	{ id: "bo6", parentId: 'r6', name: 'strength', value: 2 },
	{ id: "bo7", parentId: 'r6', name: 'constitution', value: 1 },
	{ id: "bo8", parentId: 'r8', name: 'intelligence', value: 1 },
	{ id: "bo9", parentId: 'r8', name: 'charisma', value: 2 },

	{ id: "bo25", parentId: 'r9', name: 'charisma', value: 2 },
	{ id: "bo27", parentId: 'r10', name: 'strength', value: 2 },
	{ id: "bo28", parentId: 'r10', name: 'dexterity', value: 1 },
	{ id: "bo29", parentId: 'r11', name: 'strength', value: 1 },
	{ id: "bo30", parentId: 'r11', name: 'wisdom', value: 2 },
	{ id: "bo31", parentId: 'r12', name: 'dexterity', value: 2 },
	{ id: "bo32", parentId: 'r12', name: 'constitution', value: 1 },
	{ id: "bo33", parentId: 'r13', name: 'constitution', value: 2 },
	{ id: "bo34", parentId: 'r13', name: 'intelligence', value: 1 },
	{ id: "bo35", parentId: 'r14', name: 'dexterity', value: 2 },
	{ id: "bo36", parentId: 'r14', name: 'wisdom', value: 1 },
	{ id: "bo37", parentId: 'r15', name: 'strength', value: -2 },
	{ id: "bo38", parentId: 'r15', name: 'dexterity', value: 2 },
	{ id: "bo39", parentId: 'r16', name: 'constitution', value: 2 },
	{ id: "bo40", parentId: 'r16', name: 'wisdom', value: 1 },
	{ id: "bo41", parentId: 'r17', name: 'strength', value: 2 },
	{ id: "bo42", parentId: 'r17', name: 'constitution', value: 1 },
	{ id: "bo43", parentId: 'r17', name: 'intelligence', value: -2 },
	{ id: "bo44", parentId: 'r18', name: 'dexterity', value: 2 },
	{ id: "bo45", parentId: 'r18', name: 'charisma', value: 1 },
	{ id: "bo46", parentId: 'r19', name: 'strength', value: 1 },
	{ id: "bo47", parentId: 'r19', name: 'constitution', value: 1 },
	{ id: "bo48", parentId: 'r19', name: 'charisma', value: 1 },
	{ id: "bo49", parentId: 'r20', name: 'intelligence', value: 1 },
	{ id: "bo50", parentId: 'r20', name: 'charisma', value: 2 },

	{ id: "bo51", parentId: 'r21', name: 'intelligence', value: 1 },

	{ id: "bo10", parentId: 'sr9', name: 'strength', value: 1 },
	{ id: "bo11", parentId: 'sr9', name: 'dexterity', value: 1 },
	{ id: "bo12", parentId: 'sr9', name: 'constitution', value: 1 },
	{ id: "bo13", parentId: 'sr9', name: 'intelligence', value: 1 },
	{ id: "bo14", parentId: 'sr9', name: 'wisdom', value: 1 },
	{ id: "bo15", parentId: 'sr9', name: 'charisma', value: 1 },
	{ id: "bo16", parentId: 'sr0', name: 'wisdom', value: 1 },
	{ id: "bo17", parentId: 'sr1', name: 'strength', value: 2 },
	{ id: "bo18", parentId: 'sr2', name: 'charisma', value: 1 },
	{ id: "bo19", parentId: 'sr3', name: 'intelligence', value: 1 },
	{ id: "bo20", parentId: 'sr4', name: 'wisdom', value: 1 },
	{ id: "bo21", parentId: 'sr5', name: 'dexterity', value: 1 },
	{ id: "bo22", parentId: 'sr6', name: 'constitution', value: 1 },
	{ id: "bo23", parentId: 'sr7', name: 'charisma', value: 1 },
	{ id: "bo24", parentId: 'sr8', name: 'constitution', value: 1 },

	{ id: "bo26", parentId: 'sr11', name: 'wisdom', value: 1 },
	{ id: "bo52", parentId: 'sr12', name: 'constitution', value: 1 },
	{ id: "bo53", parentId: 'sr13', name: 'strength', value: 1 },
	{ id: "bo54", parentId: 'sr13', name: 'strength', value: 1 },

	{ id: "bo55", parentId: 'sr14', name: 'strength', value: 2 },
	{ id: "bo56", parentId: 'sr15', name: 'wisdom', value: 2 },
	{ id: "bo57", parentId: 'sr16', name: 'charisma', value: 1 },
	{ id: "bo58", parentId: 'sr17', name: 'constitution', value: 1 },
	{ id: "bo59", parentId: 'sr18', name: 'constitution', value: 1 },
	{ id: "bo60", parentId: 'sr19', name: 'strength', value: 1 },
	{ id: "bo61", parentId: 'sr20', name: 'dexterity', value: 1 },
];

export const sourceShareModel = [
	{ id: "ss0", raceId: "r0", sourceId: "b0" },
	{ id: "ss1", raceId: "r1", sourceId: "b0" },
	{ id: "ss2", raceId: "r2", sourceId: "b0" },
	{ id: "ss3", raceId: "r3", sourceId: "b0" },
	{ id: "ss4", raceId: "r4", sourceId: "b0" },
	{ id: "ss5", raceId: "r5", sourceId: "b0" },
	{ id: "ss6", raceId: "r6", sourceId: "b0" },
	{ id: "ss7", raceId: "r7", sourceId: "b0" },
	{ id: "ss8", raceId: "r8", sourceId: "b0" },
	{ id: "ss9", raceId: "r9", sourceId: "b1" },
	{ id: "ss10", raceId: "r10", sourceId: "b1" },
	{ id: "ss11", raceId: "r11", sourceId: "b1" },
	{ id: "ss12", raceId: "r12", sourceId: "b1" },
	{ id: "ss13", raceId: "r13", sourceId: "b1" },
	{ id: "ss14", raceId: "r14", sourceId: "b1" },
	{ id: "ss15", raceId: "r15", sourceId: "b1" },
	{ id: "ss16", raceId: "r16", sourceId: "b1" },
	{ id: "ss17", raceId: "r17", sourceId: "b1" },
	{ id: "ss18", raceId: "r18", sourceId: "b1" },
	{ id: "ss19", raceId: "r19", sourceId: "b1" },
	{ id: "ss20", raceId: "r20", sourceId: "b1" },
	{ id: "ss21", raceId: "r21", sourceId: "b2" },
	{ id: "ss22", raceId: "r2", sourceId: "b2" },
	{ id: "ss23", raceId: "r0", sourceId: "b2" },
	{ id: "ss24", raceId: "r3", sourceId: "b2" },
	{ id: "ss25", subraceId: "sr0", sourceId: "b0" },
	{ id: "ss26", subraceId: "sr1", sourceId: "b0" },
	{ id: "ss27", subraceId: "sr2", sourceId: "b0" },
	{ id: "ss28", subraceId: "sr3", sourceId: "b0" },
	{ id: "ss29", subraceId: "sr4", sourceId: "b0" },
	{ id: "ss30", subraceId: "sr5", sourceId: "b0" },
	{ id: "ss31", subraceId: "sr6", sourceId: "b0" },
	{ id: "ss32", subraceId: "sr7", sourceId: "b0" },
	{ id: "ss33", subraceId: "sr8", sourceId: "b0" },
	{ id: "ss34", subraceId: "sr9", sourceId: "b0" },
	{ id: "ss35", subraceId: "sr10", sourceId: "b0" },
	{ id: "ss36", subraceId: "sr11", sourceId: "b1" },
	{ id: "ss37", subraceId: "sr12", sourceId: "b1" },
	{ id: "ss38", subraceId: "sr13", sourceId: "b1" },
	{ id: "ss39", subraceId: "sr14", sourceId: "b2" },
	{ id: "ss40", subraceId: "sr15", sourceId: "b2" },
	{ id: "ss41", subraceId: "sr16", sourceId: "b2" },
	{ id: "ss42", subraceId: "sr17", sourceId: "b2" },
	{ id: "ss43", subraceId: "sr18", sourceId: "b2" },
	{ id: "ss44", subraceId: "sr19", sourceId: "b2" },
	{ id: "ss45", subraceId: "sr20", sourceId: "b2" }
];