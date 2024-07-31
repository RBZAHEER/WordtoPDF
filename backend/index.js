const express = require("express");
const app = express();
const port = 3000;
const multer = require("multer");
const docxtoPdf = require("docx-pdf");
const path = require("path");
const cors = require("cors");

app.use(cors());

// Setting up file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/convertfile", upload.single("file"), function (req, res, next) {
  try {
    if (!req.file) {
      res.status(400).json({ message: "No file was uploaded" });
      return;
    }
    let opPath = path.join(__dirname, "files", `${req.file.originalname}.pdf`);
    docxtoPdf(req.file.path, opPath, function (err, result) {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Error converting docx to pdf" });
        return;
      }
      res.download(opPath, () => {
        console.log("File Downloaded");
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/", (req, res) => {
  res.send("Root endpoint");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
