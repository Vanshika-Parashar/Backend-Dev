const fs=require('fs');
const path=require('path');
//isme hmne inputfilepath m apni input.txt ka path daaldiya h 
const inputFilepath=path.join(__dirname,'input.txt')
//isme hmne inputfilepath m apni input.txt ka path daaldiya h kha bne
const outputFile=path.join(__dirname,'output.txt')
//ab uss path se us file k lye inputstream create kr rhe h jisse sirf file ka data chunks m read ho 
const inputStream=fs.createReadStream(inputFilepath)
inputStream.on('data',(chunk)=>{
    console.log("data is reading in chunks");
})
const data=fs.readFile('input.txt','utf-8',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log("file read successfully");
        console.log(data);

    }
})
// //file kadata output.txt m chunks m write krna h toh uss path se write stream nani pdega
// const writeStream=fs.createWriteStream(outputfilepath)
// inputStream.on('data',(chunk)=>{
//     console.log("writing data in output file in chunks");
//     writeStream.write(chunk)
// }