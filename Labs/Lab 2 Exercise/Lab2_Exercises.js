/* const compareNumToTen = new Promise((resolve, reject, num) => {

    num = num;

    if(num > 10)
    {
        console.log('promise is pending')
        resolve(num + ' is greater than 10, success');
    } else {
        reject(num + ' is less than 100, error!');
    }

});


const onResolved = (resolvedValue) => console.log(resolvedValue);
const onRejected = (rejectedValue) => console.log(rejectedValue);

compareNumToTen.then(onResolved, onRejected, 15);
compareNumToTen.then(onResolved, onRejected, 8); */

var compareNumToTen = function(num) {
    return new Promise(function (resolve, reject) {
        if(num > 15)
        {
            resolve(num + ' is greater than 10! Success!')
        }
        else 
        {
            reject(num + ' is less than 10, Error')
        }
    })
}

test1 = 15
compareNumToTen(test1)
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

test2 = 8
compareNumToTen(test2)
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
