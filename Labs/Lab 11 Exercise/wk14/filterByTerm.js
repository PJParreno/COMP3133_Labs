function filterByTerm(inputArr, searchTerm){
    return inputArr.filter(function(arraryElement){
        return arraryElement.url.match(searchTerm);
    })
}

module.exports = filterByTerm