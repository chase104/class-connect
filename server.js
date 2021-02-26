const express = require('express')
const path = require("path");
const mongoose = require('mongoose')
const AccountModel = require('./dbUser.js')
const ApplicationModel = require('./dbApplication')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const pdf = require('html-pdf')
const fs = require('fs')

const lessonTemplatePdf = require('./server-assets/lesson-materials.js')
const applicationTemplatePdf = require('./server-assets/application-template-pdf.js')

const app = express()
require('dotenv').config()
console.log(process.env.MONGODBPASSWORD);
const connection_url = `mongodb+srv://dbAdmin:${process.env.MONGODBPASSWORD}@cluster0.a3pnl.mongodb.net/userDb?retryWrites=true&w=majority`
console.log(connection_url);
app.use(bodyParser.json());

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// Set Static Folders
app.use(express.static(path.join(__dirname, "client", "build")));


app.post("/new-account", (req, res) => {
  const accountInformation = req.body;
  AccountModel.create(accountInformation, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/get-account", (req, res) => {
  const accountInformation = req.body;
  AccountModel.find(accountInformation, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/pdf", (req, res) => {
  pdf.create(applicationTemplatePdf(req.body), {}).toFile(`application-copy-${req.body.parentName}.pdf`, (err) => {

  })
})

app.delete("/delete-trials", (req, res) => {
  const accountInformation = req.body;
  ApplicationModel.deleteMany(accountInformation, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.post("/submit-application", (req, res) => {
  ApplicationModel.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {

      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'chase.vanhalen2@gmail.com',
          pass: process.env.EMAILPASS
        }
      })
      let emailHtml = `
      <p>Hello ${req.body.parentName}!</p>

      <h3>Congratulations on submitting your application!</h3>

      <p>It looks like you're well on your way to starting classes with Adventurer's College! We just got your application and we'll be reviewing it shortly!</p>
      <p>Here's a copy of your application for your records.</p>


      <p>It usually takes us about four days to review an application. When we approve your application, you'll receive an email explaining your schedule and how to enter your first class.</p>
      <p>If you have any questions, please contact us at educational_assistance@adventurecollege.com</p>

      <p>Best Wishes,</p>
      <p>Educational Assistance Team</p>

      `
      //generate pdf
      const pdfSettings  = {
        "header": {
      "height": "8mm",
      },
        "footer": {
      "height": "28mm"
      }
    }
      pdf.create(applicationTemplatePdf(req.body), pdfSettings).toFile(`application-copy-${req.body.parentName}.pdf`, (err) => {
        let mailOptions = {
          from: 'chase.vanhalen2@gmail.com',
          to: req.body.email,
          subject: "Application copy from Adventurer's College",
          html: emailHtml,
          attachments: [
            { filename: `application-copy-${req.body.parentName}.pdf`, path: `./application-copy-${req.body.parentName}.pdf`}
          ]
        }

        transporter.sendMail(mailOptions, function(err, data){
          if (err) {
            console.log("Error: ", err);
          } else {
            console.log("Email Sent!");
            fs.unlink(`application-copy-${req.body.parentName}.pdf`, (err) => {
              if (err) {
                throw err
              }
            })
          }
        })
        res.status(201).send("finished")
      })

    }
  });
});


app.get('/make-pdf', (req, res) => {
  const pdfFile = pdf.create(applicationTemplate({firstName: "chase", level: "U3", lesson: "23", topics: ["Space", "Science"], grammarTopic: "Passive Tense"}), {}).toFile(`application.pdf`, (err) => {
    var stream = fs.createReadStream('./application.pdf');
    var filename = "application.pdf";
    // Be careful of special characters

    // Ideally this should strip them

    res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
    res.setHeader('Content-type', 'application/pdf');

    stream.pipe(res);
  })
})


app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: "john", lastName: "Doe" },
    { id: 2, firstName: "johnny", lastName: "Doeny" },
    { id: 3, firstName: "johners", lastName: "Doeers" },
  ];
  res.json(customers);
});


const port = process.env.SERVERPORT || 5000;
console.log(port);
app.listen(port, () =>
  console.log(
    `Server started on port: ${port}`,
    `variable one: ${process.env.VARIABLEONE}`
  )
);
