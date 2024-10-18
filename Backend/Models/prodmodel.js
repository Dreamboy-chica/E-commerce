let mongoose=require("mongoose")

let prosch=new mongoose.Schema(
    {
        "_id":String, //product id
        "name":String,
        "cat":String,
        "price":String,
        "desc":String,
        "comm":[],
        "pimg":String
    }
)

let promodel=mongoose.model("prod",prosch)

module.exports=promodel