const express=require("express");
const routeController=require("./controller")
//const getAllData=require('./controller')

const router=express.Router()

router.post('/',routeController.registerController)
router.get('/',routeController.getAllData)
module.exports=router
