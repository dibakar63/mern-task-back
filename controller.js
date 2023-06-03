const userModel=require('./model')

const registerController=async(req,res)=>{
    try {
        const {name,email,phoneno,dob,isActive}=req.body;
        if(!name){
            return res.send({message:'Name is required'})
        }
        const existingUser=await userModel.findOne({email})
        if(existingUser){
            return res.status(200).send({
                sucess:false,
                message:"Already registerd"
            })
        }
            const user=await new userModel({name,email,phoneno,dob,isActive}).save()
            res.status(201).send({
                sucess:true,
                message:"User register sucessfully",
                user
            })
        
    } catch (error) {
        console.log(error)
    }
}
const getAllData = async (req, res, next) => {
    let users;
    try {
      users= await userModel.find();
    } catch (error) {
      console.log(error);
    }
    if (!users) {
      return res.status(404).json({ message: 'No Data found' });
    }
    return res.status(200).json({ users })
  }

 
exports.registerController=registerController;
exports.getAllData=getAllData;