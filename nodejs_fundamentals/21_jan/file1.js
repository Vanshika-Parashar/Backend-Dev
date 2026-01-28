const fs=require("fs");
fs.mkdir("newdirectory",(err)=>{//ye ek ashynchronousfunction h isko callback dena pdta h nhi toh error aati h aur vo nhi diya eslye error aayi ab eslyeisme (err)ded iya
    if(err){
        console.log("Error while creating directory",err);
        return;
    }
    console.log("Directory is created successfully");
})

fs.mkdir("Folders/Folder1/Folder2",{recursive:true},(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Directory is created successfuly");
})
//for reading directory we use below function
fs.readdir("newdirectory",(err,files)=>{
    if(err){
        console.log("Error while reading directory",err);
        return;
    }
    console.log("Files:",files);

})
//for removing the directory jo empty h
fs.rmdir("newdirectory",(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Directory is removed");
})
//for removing directory jisme koi aur file ya folder ho ya empty bhi ho dono ko remove krti h 
fs.rm("newdirectory",{recursive:true,force:true},(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Directory is removed");
})