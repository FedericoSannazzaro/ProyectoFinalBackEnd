const usersApi = require("../components/products");
const cartsApi = require("../components/carts");

module.exports = app => {
  usersApi(app);
  console.log(usersApi);
  cartsApi(app);
  app.get("/", (req,res)=> res.send("Ok!"));
};
