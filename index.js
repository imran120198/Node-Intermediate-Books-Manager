// Do not forgot to export server at the end
// module.exports = app;
const express = require("express")

const app = express()
app.use(express.json())



module.exports = app