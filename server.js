const express = require('express')
const mongoose = require('mongoose')
const AccountModel = require('./dbUser.js')
const ApplicationModel = require('./dbApplication')
const bodyParser = require ('body-parser')


const app = express()
require('dotenv').config()
const connection_url = `mongodb+srv://dbAdmin:${process.env.MONGODBPASSWORD}@cluster0.a3pnl.mongodb.net/userDb?retryWrites=true&w=majority`

app.use(bodyParser.json());


mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})

app.post('/new-account', (req, res) => {
  console.log(req.body);
  const accountInformation = req.body;
  console.log("account information:", accountInformation);
  AccountModel.create(accountInformation, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})
app.get('/get-account', (req, res) => {
  console.log(req.body);
  const accountInformation = req.body;
  console.log("account information:", accountInformation);
  AccountModel.find(accountInformation, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})

app.delete('/delete-trials', (req, res) => {
  console.log(req.body);
  const accountInformation = req.body;
  AccountModel.deleteMany(accountInformation, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })})

app.post('/submit-application', (req, res) => {
  console.log(req.body);
  ApplicationModel.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})


app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'john', lastName: 'Doe'},
    {id: 2, firstName: 'johnny', lastName: 'Doeny'},
    {id: 3, firstName: 'johners', lastName: 'Doeers'},
  ]
  console.log(customers);
  res.json(customers)
})

const port = 5000;


app.listen(port, () => console.log(`Server started on port: ${port}`, `variable one: ${process.env.VARIABLEONE}`))
