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
	{ id: 'r10', sourceid: "b1", name: 'bugbear' },
	{ id: 'r11', sourceid: "b1", name: 'firbolg' },
	{ id: 'r12', sourceid: "b1", name: 'goblin' },
	{ id: 'r13', sourceid: "b1", name: 'hobgoblin' },
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
	{ id: "b0", parentId: 'r0', name: 'constitution', value: 2 },
	{ id: "b1", parentId: 'r1', name: 'strength', value: 2 },
	{ id: "b2", parentId: 'r1', name: 'charisma', value: 1 },
	{ id: "b3", parentId: 'r2', name: 'dexterity', value: 2 },
	{ id: "b4", parentId: 'r3', name: 'intelligence', value: 2 },
	{ id: "b5", parentId: 'r4', name: 'dexterity', value: 2 },
	{ id: "b6", parentId: 'r6', name: 'strength', value: 2 },
	{ id: "b7", parentId: 'r6', name: 'constitution', value: 1 },
	{ id: "b8", parentId: 'r8', name: 'intelligence', value: 1 },
	{ id: "b9", parentId: 'r8', name: 'charisma', value: 2 },

	{ id: "b25", parentId: 'r9', name: 'charisma', value: 2 },
	{ id: "b27", parentId: 'r10', name: 'strength', value: 2 },
	{ id: "b28", parentId: 'r10', name: 'dexterity', value: 1 },
	{ id: "b29", parentId: 'r11', name: 'strength', value: 1 },
	{ id: "b30", parentId: 'r11', name: 'wisdom', value: 2 },
	{ id: "b31", parentId: 'r12', name: 'dexterity', value: 2 },
	{ id: "b32", parentId: 'r12', name: 'constitution', value: 1 },
	{ id: "b33", parentId: 'r13', name: 'constitution', value: 2 },
	{ id: "b34", parentId: 'r13', name: 'intelligence', value: 1 },
	{ id: "b35", parentId: 'r14', name: 'dexterity', value: 2 },
	{ id: "b36", parentId: 'r14', name: 'wisdom', value: 1 },
	{ id: "b37", parentId: 'r15', name: 'strength', value: -2 },
	{ id: "b38", parentId: 'r15', name: 'dexterity', value: 2 },
	{ id: "b39", parentId: 'r16', name: 'constitution', value: 2 },
	{ id: "b40", parentId: 'r16', name: 'wisdom', value: 1 },
	{ id: "b41", parentId: 'r17', name: 'strength', value: 2 },
	{ id: "b42", parentId: 'r17', name: 'constitution', value: 1 },
	{ id: "b43", parentId: 'r17', name: 'intelligence', value: -2 },
	{ id: "b44", parentId: 'r18', name: 'dexterity', value: 2 },
	{ id: "b45", parentId: 'r18', name: 'charisma', value: 1 },
	{ id: "b46", parentId: 'r19', name: 'strength', value: 1 },
	{ id: "b47", parentId: 'r19', name: 'constitution', value: 1 },
	{ id: "b48", parentId: 'r19', name: 'charisma', value: 1 },
	{ id: "b49", parentId: 'r20', name: 'intelligence', value: 1 },
	{ id: "b50", parentId: 'r20', name: 'charisma', value: 2 },

	{ id: "b51", parentId: 'r21', name: 'intelligence', value: 1 },

	{ id: "b10", parentId: 'sr9', name: 'strength', value: 1 },
	{ id: "b11", parentId: 'sr9', name: 'dexterity', value: 1 },
	{ id: "b12", parentId: 'sr9', name: 'constitution', value: 1 },
	{ id: "b13", parentId: 'sr9', name: 'intelligence', value: 1 },
	{ id: "b14", parentId: 'sr9', name: 'wisdom', value: 1 },
	{ id: "b15", parentId: 'sr9', name: 'charisma', value: 1 },
	{ id: "b16", parentId: 'sr0', name: 'wisdom', value: 1 },
	{ id: "b17", parentId: 'sr1', name: 'strength', value: 2 },
	{ id: "b18", parentId: 'sr2', name: 'charisma', value: 1 },
	{ id: "b19", parentId: 'sr3', name: 'intelligence', value: 1 },
	{ id: "b20", parentId: 'sr4', name: 'wisdom', value: 1 },
	{ id: "b21", parentId: 'sr5', name: 'dexterity', value: 1 },
	{ id: "b22", parentId: 'sr6', name: 'constitution', value: 1 },
	{ id: "b23", parentId: 'sr7', name: 'charisma', value: 1 },
	{ id: "b24", parentId: 'sr8', name: 'constitution', value: 1 },

	{ id: "b26", parentId: 'sr11', name: 'wisdom', value: 1 },
	{ id: "b52", parentId: 'sr12', name: 'constitution', value: 1 },
	{ id: "b53", parentId: 'sr13', name: 'strength', value: 1 },
	{ id: "b54", parentId: 'sr13', name: 'strength', value: 1 },

	{ id: "b54", parentId: 'sr14', name: 'strength', value: 2 },
	{ id: "b54", parentId: 'sr15', name: 'wisdom', value: 2 },
	{ id: "b54", parentId: 'sr16', name: 'charisma', value: 1 },
	{ id: "b54", parentId: 'sr17', name: 'constitution', value: 1 },
	{ id: "b54", parentId: 'sr18', name: 'constitution', value: 1 },
	{ id: "b54", parentId: 'sr19', name: 'strength', value: 1 },
	{ id: "b54", parentId: 'sr20', name: 'dexterity', value: 1 },
];