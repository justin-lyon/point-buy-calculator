export default {
	data() {
		return {
			costs: [
				{ score: 8, cost: 0 },
				{ score: 9, cost: 1 },
				{ score: 10, cost: 2 },
				{ score: 11, cost: 3 },
				{ score: 12, cost: 4 },
				{ score: 13, cost: 5 },
				{ score: 14, cost: 7 },
				{ score: 15, cost: 9 }
			],

			races: [
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
			],
		}
	},
}