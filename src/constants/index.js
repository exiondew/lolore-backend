const ChampionName = require("./ChampionName");
const Region = require("./Region");
const Race = require("./Race");
const Regex = require("./Regex");
const Role = require("./Role");
const LogAction = require("./LogAction");

const ChampionNames = Object.values(ChampionName);
const RaceNames = Object.values(Race);
const RegionNames = Object.values(Region);
const RoleNames = Object.values(Role);
const LogActionTypes = Object.values(LogAction);

module.exports = {
  ChampionNames,
  RaceNames,
  RegionNames,
  RoleNames,
  LogActionTypes,
  //
  ChampionName,
  Region,
  Race,
  Regex,
  Role,
  LogAction,
};
