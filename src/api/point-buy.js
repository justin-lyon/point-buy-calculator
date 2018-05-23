import { sourceModel, raceModel, subRaceModel, bonusModel } from "../plugins/point-buy";

export const getSources = () => sourceModel;

export const getRaces = () => raceModel;
export const getRacesBySource = sourceIds => raceModel
	.filter(r => sourceIds.includes(r.sourceId));
export const getRaceById = id => raceModel.find(r => r.id === id);

export const getSubRacesByRace = (raceId, sourceIds) => subRaceModel
	.filter(sr => sr.raceId === raceId && sourceIds.includes(sr.sourceId));

export const getBonusesByParent = ids => bonusModel.filter(b => ids.includes(b.parentId));