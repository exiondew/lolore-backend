const { Router } = require("express");

const listRouter = require("./router.list");

const router = Router();

router.use("/list", listRouter);

// 404
router.use("/", (req, res) => {
  res.status(404).json({
    message: "Not Found",
  });
});

module.exports = router;
