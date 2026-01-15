const fs=require("fs");
function logActivity(message){
    const time=new Date().toLocaleString();
    const msg=`${time} - ${message}\n`;
    //use appendfile so it doesnot overwrite previous logs
    fs.appendFile("activity.log", msg, (err) => {
        if (err) {
            console.log("Error writing to file");
        }
    });
}


module.exports = logActivity;
//if want to read activity ka content and show on console use readfile instead ofappendfile

