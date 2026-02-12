const express=require('express');
const app=express();
const PORT=5000;
app.use(express.urlencoded({extended:true}));
//use off ejs hme suppose chahte h ki form m jo data h toh server pr vo hrr baar data push kre toh vo show ho means dynamic toh hme data render bhi krana h jo ki dyamic kaam h toh html m rendering nhi hoti we use java script and ejs is embedded java script]
app.set("view engine","ejs");
const students=[
    {id:1,name:"John",branch:"CSE"},
    {id:2,name:"Jane",branch:"ECE"},
    {id:3,name:"Doe",branch:"MEch"}

];
app.get("/",(req,res)=>{
    res.render("form",{allStudents:students});
});
app.post("/submit",(req,res)=>{
    console.log("form",req.body);
    res.send("registerd");
})
app.listen(PORT,()=>{
console.log(`Server is running on port ${PORT}`);
});