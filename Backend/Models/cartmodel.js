let mongoose=require("mongoose")
let cartsch=new mongoose.Schema({
    "_id":String,  //cart-id
    "uid":String,  //user-email-id
    "pid":String,  //product-id
    "name":String,
    "price":Number,
    "qty":Number,
    "pimg":String
})
let cartm=mongoose.model("prodcart",cartsch)
module.exports=cartm