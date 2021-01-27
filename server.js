const express = require('express')
const mongoose = require('mongoose')



const app = express()
require('dotenv').config()

const connection_url = `mongodb+srv://dbAdmin:${process.env.MONGODDBPASSWORD}@cluster0.a3pnl.mongodb.net/userDb?retryWrites=true&w=majority`

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
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
