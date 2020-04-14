// Exercise 1

Captailize = (sentence) => {


    sentence = sentence.split(" ");

    for(i = 0; i < sentence.length; i++)
    {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].substr(1);
    }

    return sentence.join(" ");

}

console.log(Captailize("the quick brown fox"))

// Exercise 2

Compare = (num1, num2, num3) => {

    biggestNum = num1

    if(num2 > biggestNum)
    {
        biggestNum = num2;
    }
    else if(num3 > biggestNum)
    {
        biggestNum = num3
    }
    return biggestNum

}

console.log(Compare(1,0,1));
console.log(Compare(0,-10,-20));
console.log(Compare(1000,510,440));

// Exercise 3

firstThree = (word) => {
    
    newWord = word

    if(word.length > 3)
    {
        last3 = word.substr(word.length - 3)
        first3 = word.substr(0, word.length - 3)

        var newWord = last3 + first3
    }
    return newWord
}

console.log(firstThree("Python"));
console.log(firstThree("JavaScript"));
console.log(firstThree("Hi"));

// Exercise 4

guessAngle = (angle) => {

    if(angle < 90)
    {
        return "Acute Angle"
    }
    else if(angle == 90)
    {
        return "Right Angle"
    }
    else if(angle < 180)
    {
        return "Obtuse Angle"
    }
    else
    {
        return "Straight Angle"
    }
}


console.log(guessAngle(47))
console.log(guessAngle(90))
console.log(guessAngle(145))
console.log(guessAngle(180))
