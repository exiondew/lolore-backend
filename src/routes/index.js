const { Router } = require("express");

const championsRouter = require("./champions.router");

const router = Router();

router.use("/champions", championsRouter);

// 404
router.use("/", (req, res) => {
  res.status(404).json({
    message: "Not Found",
  });
});

module.exports = router;
