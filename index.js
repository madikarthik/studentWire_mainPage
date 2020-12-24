const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const { error } = require("console");
const { response } = require("express");
const config = require("config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/form", (req, res) => {
  let transporter = nodemailer.createTransport({
    host: config.get("admin_host"),
    port: parseInt(config.get("admin_port")),
    auth: {
      user: config.get("connect_user"),
      pass: config.get("connect_pass"),
    },
  });

  let mailOptions = {
    from: req.body.email,
    to: config.get("connect_user"),
    replyTo: req.body.email,
    subject: "New message",
    text: req.body.msg,
    html: `
    <h2> Contact Details </h2>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Phone: ${req.body.phone}</li>
    </ul>
    <h2>Message</h3>
    <p>${req.body.msg}</p>
    `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("message sent");
      let mailOptions2 = {
        from: config.get("info_mail"),
        to: req.body.email,
        replyTo: config.get("info_mail"),
        subject: "This is an Auto-genrated Email",

        html: `
        <h2>Student wire Getting you Wired!</h2>
        <p>Hi There!</p>
        <p>Thank you for taking time to get in touch with us, We appreciate your interest in Student Wire.</p>
        <p>We have recieved your email and will get in touch with you as  soon as possible</p>

        <p>Cheers,</p>
        <p>Team Student Wire</p>

        <p>This email was sent as responce from computer that cannot accept incoming email. Please do not reply to this message.</p>
        `,
      };

      transporter.sendMail(mailOptions2, (err, info) => {
        if (err) {
          return console.log("responce error");
        } else {
          console.log("responce sent");
        }
      });
    }
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server starting on port ${PORT}`);
});
