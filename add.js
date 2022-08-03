function add(num1, num2){
    console.log(num1, num2);
    const sum = num1 + num2;
    return sum;
}

const result1 = add(22, 44);
console.log("Result One: ", result1);
const result2 = add(33, 22);
console.log("Result Tow: ", result2);
const finalResult = add(result1, result2);
console.log("Final Result: ", finalResult);