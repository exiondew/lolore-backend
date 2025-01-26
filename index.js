const express = require("express");
require("dotenv").config();
const connectDB = require("./src/config/database");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./src/routes"));

(async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
  });
})();
