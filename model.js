const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneno:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    
    isActive:{
        type:"String"
    },
    date:{
        type:Date,
         required:true,
        default:Date.now

   }
})
const User=mongoose.model("User",userSchema)
module.exports=User;