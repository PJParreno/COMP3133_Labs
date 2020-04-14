// Exercise 1
const buffer_string = Buffer.from("I'm a string!", "utf-8");

const buffer_array = Buffer.from([8, 6, 7, 5, 3, 0, 9]);

const buffer_concat =  Buffer.concat([buffer_array, buffer_string])

const buffer_JSON = JSON.stringify(buffer_concat)

console.log(buffer_string)
console.log(buffer_array)
console.log(buffer_string.toString())
console.log(buffer_string.toString('hex'))
console.log(buffer_string.toString('utf8', 0, 10))
console.log(buffer_concat)
console.log(buffer_JSON)

