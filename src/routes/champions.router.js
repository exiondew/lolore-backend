const { Router } = require("express");
const { createChampionSchema, deleteSchema } = require("../validations");

const {
  getAllChampions,
  createChampion,
  deleteChampion,
} = require("../controllers/champions.controller");
const validate = require("../middlewares/validate.middleware");

const router = Router();

router.get("/", getAllChampions);
router.post("/", validate(createChampionSchema), createChampion);
router.delete("/", validate(deleteSchema), deleteChampion);

module.exports = router;
