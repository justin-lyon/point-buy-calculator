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

export const getRaceByName = name => {
	return races.find(r => r.name === name.toLowerCase());
};

export const races = [
	{
		name: "dwarf",
		subRaces: [
			{
				name: "hill",
				bonuses: [
					{ name: "constitution", value: 2 },
					{ name: "wisdom", value: 1 }
				]
			},
			{
				name: "mountain",
				bonuses: [
					{ name: "strength", value: 2 },
					{ name: "constitution", value: 2 },
				]
			}
		]
	},
	{
		name: "dragonborn",
		bonuses: [
			{ name: "strength", value: 2 },
			{ name: "charisma", value: 1 }
		]
	},
	{
		name: "elf",
		subRaces: [
			{
				name: "drow",
				bonuses: [
					{ name: "dexterity", value: 2 },
					{ name: "charisma", value: 1 },
				]
			},
			{
				name: "high",
				bonuses: [
					{ name: "dexterity", value: 2 },
					{ name: "intelligence", value: 1 },
				]
			},
			{
				name: "wood",
				bonuses: [
					{ name: "dexterity", value: 2 },
					{ name: "wisdom", value: 1 },
				]
			}
		]
	},
	{
		name: "gnome",
		subRaces: [
			{
				name: "forest",
				bonuses: [
					{ name: "dexterity", value: 1 },
					{ name: "intelligence", value: 2 },
				]
			},
			{
				name: "rock",
				bonuses: [
					{ name: "constitution", value: 1 },
					{ name: "intelligence", value: 2 },
				]
			}
		]
	},
	{
		name: "halfling",
		subRaces: [
			{
				name: "lightfoot",
				bonuses: [
					{ name: "dexterity", value: 2 },
					{ name: "charisma", value: 1 },
				]
			},
			{
				name: "stout",
				bonuses: [
					{ name: "dexterity", value: 2 },
					{ name: "constitution", value: 1 },
				]
			}
		]
	},
	{
		name: "half-elf",
		isSelectable: true,
		bonuses: [
			{ name: "charisma", value: 2 }
		]
	},
	{
		name: "half-orc",
		bonuses: [
			{ name: "strength", value: 2 },
			{ name: "constitution", value: 1 }
		]
	},
	{
		name: "human",
		isSelectable: false,
		isVariant: false,
		bonuses: [
			{ name: "strength", value: 1 },
			{ name: "dexterity", value: 1 },
			{ name: "constitution", value: 1 },
			{ name: "intelligence", value: 1 },
			{ name: "wisdom", value: 1 },
			{ name: "charisma", value: 1 }
		]
	},
	{
		name: "tiefling",
		bonuses: [
			{ name: "intelligence", value: 1 },
			{ name: "charisma", value: 2 },
		]
	}
];

export const raceModel = [
	{ id: 'r0', name: 'dwarf' },
	{ id: 'r1', name: 'dragonborn' },
	{ id: 'r2', name: 'elf' },
	{ id: 'r3', name: 'gnome' },
	{ id: 'r4', name: 'halfling' },
	{ id: 'r5', name: 'half-elf' },
	{ id: 'r6', name: 'half-orc' },
	{ id: 'r7', name: 'human' },
	{ id: 'r8', name: 'tiefling' },
];

export const subRaceModel = [
	{ id: 'sr0', raceId: 'r0', name: 'hill' },
	{ id: 'sr1', raceId: 'r0', name: 'mountain' },
	{ id: 'sr2', raceId: 'r2', name: 'drow' },
	{ id: 'sr3', raceId: 'r2', name: 'high' },
	{ id: 'sr4', raceId: 'r2', name: 'wood' },
	{ id: 'sr5', raceId: 'r3', name: 'forest' },
	{ id: 'sr6', raceId: 'r3', name: 'rock' },
	{ id: 'sr7', raceId: 'r4', name: 'lightfoot' },
	{ id: 'sr8', raceId: 'r4', name: 'stout' },
	{ id: 'sr9', raceId: 'r7', name: 'Normal' },
	{ id: 'sr10', raceId: 'r7', name: 'Variant' },
];

export const bonusModel = [
	{ id: 0, parentId: 'r0', name: 'constitution', value: 2 },
	{ id: 1, parentId: 'r1', name: 'strength', value: 2 },
	{ id: 2, parentId: 'r1', name: 'charisma', value: 1 },
	{ id: 3, parentId: 'r2', name: 'dexterity', value: 2 },
	{ id: 4, parentId: 'r3', name: 'intelligence', value: 2 },
	{ id: 5, parentId: 'r4', name: 'dexterity', value: 2 },
	{ id: 6, parentId: 'r6', name: 'strength', value: 2 },
	{ id: 7, parentId: 'r6', name: 'constitution', value: 1 },
	{ id: 8, parentId: 'r8', name: 'intelligence', value: 1 },
	{ id: 9, parentId: 'r8', name: 'charisma', value: 2 },

	{ id: 10, parentId: 'sr9', name: 'strength', value: 1 },
	{ id: 11, parentId: 'sr9', name: 'dexterity', value: 1 },
	{ id: 12, parentId: 'sr9', name: 'constitution', value: 1 },
	{ id: 13, parentId: 'sr9', name: 'intelligence', value: 1 },
	{ id: 14, parentId: 'sr9', name: 'wisdom', value: 1 },
	{ id: 15, parentId: 'sr9', name: 'charisma', value: 1 },
	{ id: 16, parentId: 'sr0', name: 'wisdom', value: 1 },
	{ id: 17, parentId: 'sr1', name: 'strength', value: 2 },
	{ id: 18, parentId: 'sr2', name: 'charisma', value: 1 },
	{ id: 19, parentId: 'sr3', name: 'intelligence', value: 1 },
	{ id: 20, parentId: 'sr4', name: 'wisdom', value: 1 },
	{ id: 21, parentId: 'sr5', name: 'dexterity', value: 1 },
	{ id: 22, parentId: 'sr6', name: 'constitution', value: 1 },
	{ id: 23, parentId: 'sr7', name: 'charisma', value: 1 },
	{ id: 24, parentId: 'sr8', name: 'constitution', value: 1 },
]