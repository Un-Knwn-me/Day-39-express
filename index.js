const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");
const PORT = 9000;

// Quest 1:

const currentDir = path.join(__dirname, "newFile");
console.log(currentDir);

let date = new Date()
let timeStamp = date.toUTCString()
const content  = `The current time stamp is: ${timeStamp}`;
console.log(timeStamp);

fs.writeFile(`${currentDir}/current_date-time.txt`, content, (err)=> {
    if (err){
        console.log(err);
    } else {
        console.log("Time file created successfully")
    }
})

app.use(express.static("Task"));

app.get("/time", (req, res )=>{
    res.sendFile(path.join(__dirname, "current_date-time.txt"))
})

// // Quest 2:

fs.readdir(currentDir, (err, files) => {
    files.forEach(file => {
        console.warn("Files present in the folder are: ", file);
    })
})


app.listen(PORT, ()=>console.log("Port created"))

