const express = require('express')
const app = express()
const port = 3000

//Routes
const register = require('./Routes/Register')
const login = require('./Routes/Login')
const protected = require('./Routes/Protected')

app.use(register)
app.use(login)
app.use(protected)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})