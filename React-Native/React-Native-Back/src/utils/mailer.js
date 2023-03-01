const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.O_EMAIL,
    pass: process.env.O_PASS
  }
});

module.exports = transporter;