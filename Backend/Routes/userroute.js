let express=require("express")

let {reg,login}=require('../Controllers/usercont')

let route=new express.Router()

route.post('/reg',reg)
route.post('/login',login)

module.exports=route