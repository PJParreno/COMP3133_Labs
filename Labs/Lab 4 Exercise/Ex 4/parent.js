const { fork } = require('child_process'); 

const compute = fork('ex4.js');

compute.send('start');

compute.on('message', result => {
    console.log(`Long computation result: ${result}`)
});
