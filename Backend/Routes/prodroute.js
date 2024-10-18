let express = require("express") 
let { addprod,getprod } = require("../Controllers/procont") 

let proute = new express.Router() 

proute.post('/addprod', addprod) 
proute.get('/getprod',getprod) 


module.exports = proute 
