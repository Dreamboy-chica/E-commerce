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

module.exports = {addprod ,getprod,upload}
