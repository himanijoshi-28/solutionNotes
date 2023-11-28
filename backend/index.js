const express = require("express");
const app = express();
require("./db/conn");
const fs = require("fs");
const Practical = require("./models/practical");
const bodyParser = require("body-parser");
const multer = require("multer");
const { Z_STREAM_ERROR } = require("zlib");


app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    // const ext = file.mimetype.split("/")[1];
    cb(null, `${file.originalname}`);
  },
});

// const multerFilter = (req, file, cb) => {
//   if (file.mimetype.split("/")[1] === "pdf" || file.mimetype.split("/")[1] === "docx" ) {
//     cb(null, true);
//   } else {
//     cb(new Error("Not a valid file format!!"), false);
//   }
// };

const upload = multer({
  storage: multerStorage,
  // fileFilter: multerFilter,
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/practical", upload.single("file"), async (req, res) => {
  try {
    await Practical.create({
      sem: req.body.sem,
      subject: req.body.subject,
      pracNumber: req.body.pracNumber,
      file: req.file.filename,
    });
    res.status(200).json({
      status: "success",
      message: "File created successfully!!",
    });
  } catch (error) {
    res.json({
      error,
    });
  }
});

let number, subject;
app.post("/getpracticalinfo", (req, res)=>{
  const { no, sub } = req.body;
  number = no;
  subject = sub;
})

app.get("/post", async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  try{
      const doc = await Practical.findOne({ pracNumber: number, subject: subject });
      res.download("uploads/"+doc.file, (err) => {
    if(err){
      res.send(err);
    }
  });
  }
  catch(e){res.send("file doesn't exist")}
  
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listining on port ${process.env.PORT}`);
});
