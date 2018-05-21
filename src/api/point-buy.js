import { raceModel, subRaceModel, bonusModel } from "../plugins/point-buy";

export const getRaces = () => raceModel;
export const getRaceByName = name => raceModel.find(r => r.name === name);

export const getSubRacesByRace = raceId => subRaceModel.filter(sr => sr.raceId === raceId);

export const getBonusesByParent = ids => bonusModel.filter(b => ids.includes(b.parentId));
export const getBonusesBySubRace = subRaceId => bonusModel.filter(b => b.partentId === subRaceId);