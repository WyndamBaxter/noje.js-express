const express = require("express")
const bodyParser = require('body-parser')
const useRoute = require("./routes/user-routes")

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: false}))


useRoute(app)

app.get("/",(req,res)=>res.send("Olá mundo pelo express!"))

app.listen(port, ()=> console.log("Api rodando na porta 3000"))


