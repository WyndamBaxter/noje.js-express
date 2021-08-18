const express = require("express")
const useRoute = require("./routes/user-routes")

const app = express()
const port = 3000

useRoute(app)

app.get("/",(req,res)=>res.send("Olá mundo pelo express!"))

app.listen(port, ()=> console.log("Api rodando na porta 3000"))


