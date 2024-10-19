let express = require("express") 
let { addprod,getprod,upload} = require("../Controllers/procont") 

let proute = new express.Router() 

proute.post('/addprod',upload.single('pimg'),addprod) 
proute.get('/getprod',getprod) 

module.exports = proute 
