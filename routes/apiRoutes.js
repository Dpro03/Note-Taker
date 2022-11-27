const express = require("express");
const fs = require("fs");
const path = require("path");
const db = require("../db/db.json");

module.exports = function (app) {

  //API GET Requests 
  app.get("/api/notes", function (req, res) {
    res.json(db);
  });
  
  

  //API POST Requests
  app.post("/api/notes", function (req, res) {
    let newNote = req.body;
    db.push(newNote);
    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(db),
      function (err) {
        if (err) throw err;
        console.log("Saved my note!");
        res.json(db);
      }
    );
  });

  //API DELETE Requests
  app.delete("/api/notes/:id", function (req, res) {
    fs.readFile(
      path.join(__dirname, "../db/db.json"),
      "utf8",
      function (err, data) {
        if (err) throw err;

        let id = req.params.id;
        db.splice(id, 1);
        res.json(db);
      }
    );
  });
};
