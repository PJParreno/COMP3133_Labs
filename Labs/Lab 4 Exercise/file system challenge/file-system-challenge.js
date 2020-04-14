const fs = require('fs')

var content;
fs.readFile('w3-text-file.txt', 'utf-8', (err, data) => {

    if(err)
    {
        console.log('no text file exist')
    }
    content = data
    processfile(content)
});

function processfile(data)
{
    console.log(data)
}