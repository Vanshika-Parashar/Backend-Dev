const express=require('express')
const studentRoutes=require('./routes/studentsRoutes')
const app=express()
const PORT=3000;

app.use('/api/students',studentsRoutes)
app.listen(PORT,(err,res)=>{
    console.log(`server is runningonport${PORT}`);
})