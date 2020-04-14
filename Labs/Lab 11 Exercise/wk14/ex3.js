function filterFalse(arr){
    return arr.filter(arrElement =>{
        return arrElement.authenticated || arrElement.user_id.match(false);
    });
}

module.exports = filterFalse;