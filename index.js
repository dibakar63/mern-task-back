const express=require('express');
const mongoose=require('mongoose')
const connectDB=require('./db')
const cors=require('cors')
const authRouter=require('./routes')

const app=express()
app.use(cors())
app.use(express.json())
connectDB()

//routes
app.use('/api/v1/auth',authRouter)

app.listen(4000,()=>{
    console.log("Server is running")
})
