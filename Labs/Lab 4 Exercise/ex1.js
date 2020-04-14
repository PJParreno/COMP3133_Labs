const fs = require('fs');
const path = require('path');


// prints current working directory
console.log('Current Working Directory: ' + process.cwd()); 

// get specific command line argument if you know the position
console.log('command argument: ' + process.argv[2]);


// __dirname -> current working directory
// file -> name of the files in the directory
fs.readdir(__dirname, (err, file) => {
    file.forEach(file => {
        console.log(file);
    })
})
