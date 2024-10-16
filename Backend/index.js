let express=require("express")
let app=express()
let mongoose=require("mongoose")
let cors=require("cors")
let port=1234
app.use(express.json())
app.use(cors())
let route=require('./Routes/userroute')
mongoose.connect("mongodb+srv://ravi:qrPIz4Fb7bfJj1O9@cluster0.2bhnv.mongodb.net/Ecommerce").then((res)=>{
    console.log("Database has been connected")
})

app.use("/",route)

app.listen(1234,()=>{
    console.log(`Server has been start on Port ${port}`)
})