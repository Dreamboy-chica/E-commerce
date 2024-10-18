let express = require("express") 
let app = express() 
let mongoose = require("mongoose") 
let cors = require("cors") 
let port = 1234 

app.use(express.json()) 
app.use(cors()) 

let route = require("./Routes/userroute") 
let proute = require("./Routes/prodroute") 

mongoose
  .connect(
    "mongodb+srv://ravi:qrPIz4Fb7bfJj1O9@cluster0.2bhnv.mongodb.net/Ecommerce"
  )
  .then(() => {
    console.log("Database has been connected") 
  })
  .catch((err) => {
    console.error("Database connection error") 
  }) 

app.use("/", route) 
app.use("/", proute) 

app.listen(port, () => {
  console.log(`Server has started on Port ${port}`) 
}) 
