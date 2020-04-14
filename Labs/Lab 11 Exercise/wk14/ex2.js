function removeVowels(str){
    let characterArray = str.split("");
    return characterArray.map(character => {
        if(/[aeiouyAEIOUY]/.test(character)){
            character = "";
        } else {return character};
    }).join("");
};

module.exports = removeVowels;