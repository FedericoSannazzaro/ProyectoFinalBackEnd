const { Router } = require("express");

module.exports = app => {
  let router = new Router();
  app.use("/api/carts", router);
  router.get("/", (req, res) => res.send("Todo Ok desde Carts GET"));
  router.post("/", (req, res) => res.send("Todo Ok desde Carts POST"));
};
