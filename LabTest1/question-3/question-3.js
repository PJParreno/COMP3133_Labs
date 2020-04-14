
const fs = require('fs');
const process = require('process')

let cwd = process.cwd();

//if log does not exist already
if(fs.existsSync(cwd+"/Logs")){

    // change to log directory
    process.chdir("Logs")

    for(let i = 0;i < 10; i++)
    {
        // delete files in the direcotry
        fs.unlinkSync(`log${i}.txt`,(error)=>{
            console.log(error);
        })
        console.log(`delete files...log${i}.txt`);
    }


    // go back to root
    process.chdir("..")

    // fully delete log directory
    fs.rmdirSync("Logs");
}
else {

    //make directory synchronously
    fs.mkdirSync("Logs");

    //change directory to logs
    process.chdir("Logs");
    
    for(let i = 0; i < 10; i++){

        // write to files synchronously
        fs.writeFileSync(`log${i}.txt`,`writing to log #${i}`, (error) => {
            console.log(error);
        })
        console.log(`log${i}.txt has been created`)
    }
}