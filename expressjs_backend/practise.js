// const express=require('express');
// const fs=require('fs/promises');
// const app=express();
// const port=8000;
// app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send("welcome");
// });
// const readfile=async()=>{
//     try{
//         const data= await fs.readFile("practise.json","utf-8");
//         return JSON.parse(data,"[]");
//     }
//     catch(err){
//         return[];
//     }
    
    
// }
// const writefile=async(students)=>{
//     try{
//         await fs.writeFile("practise.json",JSON.stringify(students,null,2));
        
//     }
//     catch(err){
//         console.log("error in writing");
//     }
    
    
// }
// app.get("/students",async(req,res)=>{
//     try{
//         const students=await readfile();
//         res.json({students});
//     }
//     catch(err){
//         res.status(500).send("error occured");
//     }
// })
// app.post("/students/register",async(req,res)=>{
//     try{
//         const{name,branch}=req.body;
//     if(!name||!branch){
//         res.status(500).send("error occured");
//     }
//     const students=await readfile();
//     const newstudent={
//         id:students.length?students[students.length-1].id+1:1,
//         name:name,
//         branch:branch
//     };
//     students.push(newstudent);
//     await writefile(students);
//     res.status(201).json({
//         message:"successfull",
//         newstudent
//     });
//     }
//     catch(err){
//         res.status(500).send("error occured");
//     }

// });
// app.put("/students/:id",async(req,res)=>{
//     try{
//         const id=Number(req.params.id);
//         if(!req.body||Object.keys(req.body).length===0){
//             return res.status(400).send("Empty body not allowed");
//         }
//         const students=await readfile();
//         const index=students.findIndex(s=>s.id===id);
//         if(index===-1){
//             return res.status(500).send("not found");
//         }
//         students[index]={
//             ...students[index],
//             ...req.body
//         };
//         await writefile(students);
//         res.status(201).json({
//             message:"successfull",
//             students
//         });

//         }
   
    
//     catch(err){
//         res.status(500).send("error occured");
//     }

// });
// app.delete("/students/:id",async(req,res)=>{
//     try{
//         const id=Number(req.params.id);
//         if(!req.body||Object.keys(req.body).length===0){
//             return res.status(400).send("Empty body not allowed");
//         }
//         const students=await readfile();
//         const index=students.findIndex(s=>s.id===id);
//         if(index===-1){
//             return res.status(500).send("not found");
//         }
//         students.splice(index,1);
//         await writefile(students);
//         res.status(201).json({
//             message:"delete successfull",
            
//         });

//         }
   
    
//     catch(err){
//         res.status(500).send("error occured");
//     }

// });




// app.listen(port,()=>{
//     console.log("successfull");
// })
const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const { name, email } = parsedUrl.query;

  switch (pathname) {

    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Welcome to Home Page</h1>");
      break;

    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(
        `<h1>About Us</h1>
         <p>Hello I am ${name || "Guest"}</p>
         <p>Email: ${email || "Not provided"}</p>`
      );
      break;

    case "/contact":
      const user = {
        id: 1,
        name: "vanshika",
        contact: "7668145302"
      };

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(
        `<h1>Contact Us</h1>
         <p>Contact: ${user.contact}</p>`
      );
      break;

    case "/alllogs":
      fs.readFile("./activity.log", "utf-8", (err, data) => {
        if (err) {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("No logs found");
        } else {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end(data);
        }
      });
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 Page Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server started on port 3000");
});