// `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file,
// and then return the new note to the client. You'll need to find a way to give each note a unique id
// when it's saved (look into `npm` packages that could do this for you).

// `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

const noteData = require("../db/db.json");
const fs = require("fs");
const path = require("path");
const DB_PATH = path.join(__dirname + "/../db/db.json");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => res.json(noteData));

  app.post("/api/notes", (req, res) => {
    console.log(req.body);
    // Take the current contnent of the file
    fs.readFile(DB_PATH, "utf-8", (err, data) => {
      if (err) throw err;
      let db = JSON.parse(data);
      db.push(req.body);
      fs.writeFile(DB_PATH, JSON.stringify(db), "utf-8", () => {
        fs.readFile(DB_PATH, (err, data) => {
          res.json(data);
        });
      });
    });
    // Take the payload from the request and add it to the Returned Array.

    // Re-read the contnents of that file and respond to the request.
  });

  app.post("api/notes", (req, res) => {
    noteData.push(req.body);
    res.json(true);
  });
};
