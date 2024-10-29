let express = require("express") 
let { addprod,getprod,upload, geteleprod, getclothprod, getbeautyprod, getbooksprod, getdecorprod, 
    getfoodprod} = require("../Controllers/procont") 
    
const { addcart,delcart, getcart, inc, dec } = require("../Controllers/cartcon")

let proute = new express.Router() 

proute.post('/addprod',upload.single('pimg'),addprod) 
proute.get('/getprod',getprod) 
proute.get('/geteleprod',geteleprod) 
proute.get('/getclothprod',getclothprod) 
proute.get('/getbeautyprod',getbeautyprod) 
proute.get('/getbooksprod',getbooksprod) 
proute.get('/getdecorprod',getdecorprod) 
proute.get('/getfoodprod',getfoodprod) 




proute.post("/addcart",addcart)
proute.get("/getcart/:uid",getcart);

proute.delete("/delcart/:cid",delcart)

proute.get("/inc/:cid",inc)
proute.get("/dec/:cid",dec)

module.exports = proute 
