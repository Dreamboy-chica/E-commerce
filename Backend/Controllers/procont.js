let promodel = require("../Models/prodmodel") 
let { v4: uuidv4 } = require("uuid") 

let addprod = async (req, res) => {
    try {
        let data = new promodel({ ...req.body, "_id": uuidv4() }) 
        await data.save() 
        res.json("Product has been added!") 
    } catch (err) {
        res.json("Error in Adding the Product") 
    }
} 

let getprod=async(req,res)=>{
  try
  {
       let data=await promodel.find()
       res.json(data)
  }
  catch(err)
  {
    res.json({"msg":"error in fetching the product"})
  }
}

module.exports = {addprod ,getprod}
