function getAvarage(ass1, ass2, ass3){
    const total = ass1 + ass2 + ass3;
    const avarage = total / 3;
    return avarage;
}

// Assignment Marks Assign
const ass1Marks = 60;
const ass2Marks = 58;
const ass3Marks = 59;

const myAvarage = getAvarage(ass1Marks, ass2Marks, ass3Marks);
console.log("My Assignment Avarage Marks: ", myAvarage);