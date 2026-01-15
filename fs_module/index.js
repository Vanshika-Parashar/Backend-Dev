// const math=require('./math');
// console.log(math(1,4));
//by destructuring:
// const math=require('./math');
// console.log(math.add(1,4));
// console.log(math.sub(4,1));
// console.log(math.areaCircle(4));

// Node.js ka built-in File System module import kiya
// fs module file create, read, write, delete karne ke kaam aata hai

// const fs = require("fs");


// writeFileSync ka matlab: file ko SYNCHRONOUS tarike se write karna
// "./text.txt" → current folder me text.txt naam ki file banayega
// "This is Sync file content" → file ke andar likha jane wala data
// Agar file pehle se exist karti hai → uska data overwrite ho jayega
// Jab tak file write complete nahi hoti, program aage nahi badhega

// fs.writeFileSync("./text.txt", "This is Sync file content");

// const file = fs.readFileSync("./text.txt", "utf-8"); // file ko read karna
// "utf-8" → encoding format, jisse text ko sahi tarike se read kiya ja sake

// readFileSync ka matlab: file ko SYNCHRONOUS tarike se read karna
// Jab tak file read complete nahi hoti, program aage nahi badhega
// console.log(file); // file ka content console me print karna

// const asyncfile = fs.readFile("./text.txt", "utf-8", (err, data) => {
//     // Callback function jo file read hone ke baad chalega
//     // err → agar file read karte waqt koi error aata hai to wo yahan milega
//     // data → file ka content yahan milega agar read successful hota hai
//     if (err) {
//         console.log("Error reading file:", err);
//     }
//     else {       
//         console.log("File content:", data);
//     }
// });
// readFile ka matlab: file ko ASYNCHRONOUS tarike se read karna
// Program file read karte waqt aage badh sakta hai
// Jab file read complete hoti hai, tab callback function call hota hai

const logActivity = require("./logger");

logActivity("User logged in");
logActivity("User viewed dashboard");
logActivity("User logged out");

