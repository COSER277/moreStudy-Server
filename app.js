const express = require("express")
const app = express()

app.use(express.json())


const {
    config
} = require("./conifg")

require("./routes/backend")(app)
require("./routes/mini")(app)

app.listen(config.PORT, () => {
    console.log(`${config.HOST}:${config.PORT}/`)
})