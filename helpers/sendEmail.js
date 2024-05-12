import nodemailer from "nodemailer";
import "dotenv/config";
import HttpError from "./HttpError.js";

const { PASSWORD } = process.env;

export const sendEmail = async (veryfyEmail) => {
  const config = {
    host: "smtp.ukr.net",
    port: 465,
    secure: true,
    auth: {
      user: "testfornodejs@ukr.net",
      pass: PASSWORD,
    },
  };

  const transporter = nodemailer.createTransport(config);
  try {
    await transporter.sendMail({
      ...veryfyEmail,
      from: "testfornodejs@ukr.net",
    });
    return true;
  } catch (err) {
    throw HttpError(500, "Internal server error");
  }
};
