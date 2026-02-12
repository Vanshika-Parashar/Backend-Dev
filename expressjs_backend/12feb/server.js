import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';           

const PORT=8000;

const app=express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const FILE="form_data.json";

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
});
app.post("/submit",(req,res)=>{
    const{name,branch}=req.body;
    fs.readFile(FILE, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).send("Internal Server Error");
        }
        const formData = JSON.parse(data || "[]");
        formData.push({ name, branch });
     console.log("form data:",req.body)
     fs.writeFile(FILE, JSON.stringify(formData, null, 2), (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return res.status(500).send("Internal Server Error");
        }
        res.send("Form data received successfully");
    });
})
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

