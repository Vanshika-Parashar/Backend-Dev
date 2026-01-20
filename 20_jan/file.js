const fs=require("fs");
//to copy file asynchronous
fs.copyFile("text.txt","textAsynccopy.txt",(err)=>{
    if(err){
        console.log("Error while file is copied",err);
    }
    else{
        console.log("File is copied successfuly");
    }
})
//sbse phle synchronous chta h then synchronous but ikha neeche jaega
//is line ko upar likhenge toh crash ho jaega 
//if ari txt file bni mhi h toh sync wala Error while file is copied de dega aur sync wala error de dega
fs.copyFileSync("text.txt","textcopy.txt")
console.log("File copied successfully using sync function");
//to unlink(delete asynchronous)
// fs.unlink("textAsynccopy.txt",(err)=>{
//     if(err){
//         console.log("error while file is deleted",err);

//     }
//     else{
//         console.log("file is deleted successfully");
//     }
// })
// fs.unlinkSync("textcopy.txt");
// console.log("file deleted successfully using sync function");