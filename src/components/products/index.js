const { Router } = require("express");

module.exports = app => {
  let router = new Router();
  app.use("/api/products", router);
  router.get("/", (req, res) => res.send("Todo Ok desde products GET"));
  router.post("/", (req, res) => res.send("Todo Ok desde products POST"));
};
