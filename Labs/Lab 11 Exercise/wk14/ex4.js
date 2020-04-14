function multiplyArray(arr) {
    var out = [];
  
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        var evenNumber = arr[i];
      } else {
        out.push(arr[i] * evenNumber);
      }
    }
  
    return out;
  }

module.exports = multiplyArray;