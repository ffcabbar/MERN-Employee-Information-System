const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const nodemailer = require("nodemailer");

// set up express

const app = express();
app.use(express.json());
app.use(cors());

// SEND MAIL
app.post("/api/form", (req, res) => {
  console.log(req.body);

  // Step 1
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  // Step 2
  let mailOptions = {
    from: "ffcabbar@gmail.com",
    to: req.body.email,
    subject: "Testing from FURKAN",
    text: req.body.message,
  };

  // Step 3
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log("Mail Hatası", err);
    } else {
      console.log("Email gönderildi kanka");
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

// set up mongoose

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      throw err;
    }
    console.log("MongoDB connection established");
  }
);

// set up routes

app.use("/users", require("./routes/userRouter"));
app.use("/tasks", require("./routes/taskRouter"));