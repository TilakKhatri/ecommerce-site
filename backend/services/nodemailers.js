const nodemailer = require("nodemailer");
const { readFile } = require("fs/promises");
const path = require("path");

require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: "tvlv oysz hosd ohdk",
  },
});

// Create reusable transporter object using the default SMTP transport

async function loadTemplate(templateName, replacements) {
  const moduleDirectory = path.join(__dirname, "..", "templates", templateName);

  try {
    let template = await readFile(moduleDirectory, { encoding: "utf-8" });
    Object.keys(replacements).forEach((key) => {
      const regex = new RegExp(`{{${key}}}`, "g");
      template = template.replace(regex, replacements[key]);
    });
    return template;
  } catch (error) {
    console.error("Error loading email template:", error);
    throw error;
  }
}

const sendEmail = async ({ email, subject, templateName, replacements }) => {
  // console.log(getSmtpConfig())
  const html = await loadTemplate(templateName, replacements);

  const mailOptions = {
    from: "echeck1900@gmail.com", // sender address
    subject: subject,
    to: email, // list of receivers
    html: html,
  };
  // console.log(mailOptions);
  // Send mail with defined transport object

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log("error", error);
    }

    console.log("Message sent: %s", info.messageId);
  });
};

const sendEmailVerification = async ({ email, verificationToken }) => {
  const replacements = {
    verification_link: `http://localhost:5000/api/v1/auth/verify/${verificationToken}`,
  };
  await sendEmail({
    email,
    templateName: "emailVerification.html",
    subject: "Please verify your email",
    replacements,
  });
};

module.exports = { transporter, sendEmailVerification, sendEmail };
