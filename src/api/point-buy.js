import { sourceModel, raceModel, subRaceModel, bonusModel, sourceShareModel } from "../plugins/point-buy";

// Sources
export const getSources = () => sourceModel;

// Races
export const getRacesByIds = ids => raceModel
	.filter(r => ids.includes(r.id));

export const getRaceIdsBySourceIds = ids => {
	return sourceShareModel
		.filter(ss => ids.includes(ss.sourceId) && ss.raceId)
		.map(ss => ss.raceId);
};

export const getRacesBySourceIds = ids => {
	const raceIds = getRaceIdsBySourceIds(ids);
	return getRacesByIds(raceIds);
};
// Subraces
export const getSubracesByIds = subraceIds => subRaceModel
	.filter(sr => subraceIds.includes(sr.id));

export const getSubraceIdsBySourceIds = sourceIds => {
	return sourceShareModel
		.filter(ss => sourceIds.includes(ss.sourceId) && ss.subraceId)
		.map(ss => ss.subraceId);
}

export const getSubracesByRaceAndSource = (raceId, sourceIds) => {
	const subraceIds = getSubraceIdsBySourceIds(sourceIds);
	return getSubracesByIds(subraceIds)
		.filter(sr => sr.raceId === raceId);
};
// Bonuses
export const getBonusesByParent = ids => bonusModel
	.filter(b => ids.includes(b.parentId));