let multer=require("multer")
let promodel = require("../Models/prodmodel") 
let { v4: uuidv4 } = require("uuid") 


//multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Prodimg')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix+"."+file.mimetype.split("/")[1])
  }
})

const upload = multer({ storage: storage })


let addprod = async (req, res) => {
    try {
        let data = new promodel({...req.body,"pimg":req.file.filename,"_id":uuidv4()}) 
        console.log(req.body)
        
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

let geteleprod=async(req,res)=>{
  try
  {
    let data = await promodel.find({ cat: "Electronics" });
       res.json(data)
  }
  catch(err)
  {
    res.json({"msg":"error in fetching the product"})
  }
}

let getclothprod=async(req,res)=>{
  try
  {
    let data = await promodel.find({ cat: "Clothing" });
       res.json(data)
  }
  catch(err)
  {
    res.json({"msg":"error in fetching the product"})
  }
}

let getbeautyprod=async(req,res)=>{
  try
  {
    let data = await promodel.find({ cat: "Beauty" });
       res.json(data)
  }
  catch(err)
  {
    res.json({"msg":"error in fetching the product"})
  }
}

let getbooksprod=async(req,res)=>{
  try
  {
    let data = await promodel.find({ cat: "Books" });
       res.json(data)
  }
  catch(err)
  {
    res.json({"msg":"error in fetching the product"})
  }
}

let getdecorprod=async(req,res)=>{
  try
  {
    let data = await promodel.find({ cat: "decor" });
       res.json(data)
  }
  catch(err)
  {
    res.json({"msg":"error in fetching the product"})
  }
}


let getfoodprod=async(req,res)=>{
  try
  {
    let data = await promodel.find({ cat: "Food" });
       res.json(data)
  }
  catch(err)
  {
    res.json({"msg":"error in fetching the product"})
  }
}


module.exports = {addprod,getprod,geteleprod,getclothprod,getbeautyprod,getbooksprod,getdecorprod,getfoodprod,upload}
