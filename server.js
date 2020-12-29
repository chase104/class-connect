const express = require('express')

const app = express()
require('dotenv').config()

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
