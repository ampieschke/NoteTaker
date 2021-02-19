// `GET *` should return the `index.html` file.

// `GET /notes` should return the `notes.html` file.

const path = require("path");

module.exports = (app) => {
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
