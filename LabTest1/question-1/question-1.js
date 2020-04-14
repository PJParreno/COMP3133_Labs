
 const mixedWords = ["PIZZA", 10, true, 25, false, "Wings"];

 const lowerCaseWords = array => {
   return new Promise(function(resolve, reject) {
     if (array) {
       resolve(
         // creating new array and just filtering out for type ' string '
         (wordArray = array
           .filter(n => typeof n === "string")
           // making the new array to lowercase all strings that were filtered
           .map(f => f.toLowerCase()))
       );
     } else {
       reject("error! np strings in the array");
     }
   });
 };

      
    
    lowerCaseWords(mixedWords)
      .then((result) => console.log(result))
      .catch(error => console.log(error))
 
      