const db = require("../models");

module.exports = (app) => {
  //GET All Clips ROUTE
  app.get("/api/clips", (req, res) => {
    db.Clip.find()
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //GET One Clip ROUTE
  app.get("api/clips", (req, res) => {
    db.Clip.find()
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });

    //POST ROUTE
    app.post("/api/clips", (req, res) => {
      db.Clip.create(req.body)
        .then((response) => {
          res.json(response);
        })
        .catch((err) => {
          res.json(err);
        });
    });

}