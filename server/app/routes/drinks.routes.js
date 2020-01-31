module.exports = app => {
  const controller = require("../controllers/drinks.controller.js");
  app.post("/api/drinks", controller.create);
  app.get("/api/drinks", controller.findAll);
  app.get("/api/drinks/:drinkId", controller.findOne);
  app.put("/api/drinks/:drinkId", controller.update);
  app.delete("/api/drinks/:drinkId", controller.delete);
};
