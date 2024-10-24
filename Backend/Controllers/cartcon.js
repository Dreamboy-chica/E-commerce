const cartm = require("../Models/cartmodel")
let {v4:uuidv4}=require("uuid") //to gen. id for the cart-id

let addcart=async(req,res)=>{
    try
    {
        // here checking cart is present or not(either check with cart-id/pid both are present 
        // in the model)
        
        let cdata=await cartm.find({"uid":req.body.uid,"pid":req.body.pid})

        if(cdata.length==0) //cart not present
        {
            let newcdata=new cartm({...req.body,"_id":uuidv4()})
            await newcdata.save()
            res.json({"msg":"New Product is added into the cart"})
        }
        else
        {
           await cartm.findByIdAndUpdate({"_id":cdata[0]._id},{$inc:{"qty":1}})
           res.json({"msg":"Prod cart is  Updated"})
        }
    }
    catch(err)
    {
        res.json({"msg":"Error in adding the Prod"})
    }
}

let getcart = async (req, res) => {

    try {
        //  here we are using th user-id
        let data = await cartm.find({"uid": req.params.uid})
        res.json(data)
       } 

    catch (err) {
        res.json({"msg": "Error in Fetching cart data"})
    }
}

let delcart=async(req,res)=>{
    try{
        await cartm.findByIdAndDelete({"_id":req.params.cid}) //card-id
        res.json({"msg":"Cart has been Deleted"})
    }
    catch(err)
    {
        res.json({"msg":"Error in Deletion"})
    }
}


let inc=async(req,res)=>{
    try{        //here id is card-id
        await cartm.findByIdAndUpdate({"_id":req.params.cid},{$inc:{"qty":1}})
        res.json({"msg":"Increment Done !"})
    }
    catch(err)
    {
        res.json({"msg":"Error in Increment"})
    }}

let dec=async(req,res)=>{
    try{       
        await cartm.findByIdAndUpdate({"_id":req.params.cid},{$inc:{"qty":-1}})
        res.json({"msg":"Decrement Done !"})
    }
    catch(err)
    {
        res.json({"msg":"Error in Decrement"})
    }}

module.exports={addcart,getcart,delcart,inc,dec}