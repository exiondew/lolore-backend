const { sanitize } = require("../validations");
const { Champion, Log } = require("../models");
const { LogAction } = require("../constants");

const getAllChampions = async (_, res) => {
  try {
    const champions = await Champion.find({}, "_id name avatar");

    res.status(200).json(champions);
  } catch (err) {
    console.log("Err: ", err);
    res.status(500).json({ code: "INVALID_ERROR", message: "Unkown error" });
  }
};

const createChampion = async (req, res) => {
  const body = sanitize(req.body);

  try {
    const new_champion = await Champion.create({
      name: body.name,
      role: body.role,
      title: body.title,
      quotes: body.quotes,
      avatar: body.avatar,
      date: body.date,
      related_champions: body.related_champions,
      race: body.raceID,
      region: body.regionID,
      story: body.story,
      photos: body.photos,
      factions: body.factions,
    });

    const result = await new_champion.save();

    await Log.create({
      moderator: {
        name: "Exion",
      },
      action: LogAction.CREATE_CHAMPION,
      reason: "New Champion Created.",
      entity: {
        type: "champion",
        id: result._id,
        name: result.name,
      },
    });

    res.status(201).json(result);
  } catch (err) {
    console.error(err);
  }
};

const deleteChampion = async (req, res) => {
  const { id, reason } = sanitize(req.body);

  try {
    const champion = await Champion.findByIdAndDelete(id);

    if (!champion) {
      res.status(400).json({
        code: "INVALID_CHAMPION_ID",
        message: "Şampiyon bulunamadı",
      });
      return;
    }

    await Log.create({
      moderator: {
        name: "Exion",
      },
      action: LogAction.DELETE_CHAMPION,
      reason,
      entity: {
        type: "champion",
        id: champion._id,
        name: champion.name,
      },
    });

    res.status(200).json(champion);
  } catch (err) {
    console.error(err);
  }
};
const updateChampion = async (req, res) => {};

module.exports = {
  createChampion,
  deleteChampion,
  updateChampion,
  getAllChampions,
};
