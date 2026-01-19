const os = require("os");
const fs = require("fs");

function loginformation() {
    const cpu = os.cpus()[0].model;
    const Memory = (os.totalmem() / (1024 ** 3)).toFixed(2); 
    const freeMemo = (os.freemem() / (1024 ** 3)).toFixed(2);  
    const platform = os.platform();
    const uptime = (os.uptime() / 60).toFixed(2); 

    const logData = `
Time information: ${new Date().toLocaleString()}
Platform information: ${platform}
CPU information: ${cpu}
Total Memory information: ${Memory} GB
Free Memory information: ${freeMemo} GB
Uptime information: ${uptime} minutes

`;

    fs.writeFile("task3_output.log", logData, (err) => {
        if (err) {
            console.error("Error writing to file", err);
        }
    });
}

// Run every 5 seconds
setInterval(loginformation, 5000);
