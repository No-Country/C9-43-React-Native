const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: "465",
  secure: true,
  auth: {
    user: process.env.G_EMAIL,
    pass: process.env.G_KEY
  }
});

module.exports = transporter;