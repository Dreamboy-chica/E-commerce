let userm=require("../Models/usermodel")
let bcrypt=require("bcrypt")
let jwt=require("jsonwebtoken")

let reg=async(req,res)=>{

    try
    {
        let obj=await userm.findById({"_id":req.body._id})

        if(obj)
        {
            res.json({"msg":"Email Id already exists"})
        }
        else
        {
            let hash=await bcrypt.hash(req.body.pwd,10)
            let data=new userm({...req.body,"pwd":hash})
            await data.save()

            res.json({"msg":"Registration done !"})
        }
    }

    catch(err)
    {
        console.log(err)
    }
}

let login=async(req,res)=>{
try
{
   let user=await userm.findById({"_id":req.body._id})

   if(user)
   {
     let f=await bcrypt.compare(req.body.pwd,user.pwd)

     if(f)
     {
        res.json({"token":jwt.sign({"_id":user._id},"abcd"),"_id":user._id,"name":user.name,"role":user.role})
     }
     else
     {
        res.json({"msg":"Incorrect Password !"})
     }
   }
   else
   {
    res.json({"msg":"Invalid Email ID"})
   }
}

catch(err)
{
    console.log(err)
}

}

module.exports={reg,login}