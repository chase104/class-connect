const express = require("express");
const multer = require("multer");
const mysql = require("mysql2");
const streamifier = require("streamifier");
const app = express();

const upload = multer({ storage: multer.memoryStorage() });

const db = mysql.createConnection({
  host: "localhost",
  user: "yourUsername",
  password: "yourPassword",
  database: "yourDatabase",
});

app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send("No file uploaded.");
  }

  const sql = "INSERT INTO yourTable (filename, filedata) VALUES (?, ?)";
  const insertStream = db.prepare(sql).execute([file.originalname, null]);
  const updateStream = insertStream.stream();

  streamifier.createReadStream(file.buffer).pipe(updateStream);

  updateStream
    .on("finish", () => {
      res.send({ message: "File uploaded and streamed successfully" });
    })
    .on("error", (err) => {
      res.status(500).send("Error streaming file: " + err.message);
    });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
