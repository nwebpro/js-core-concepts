function add(num1, num2){
    console.log(num1, num2);
    var sum = num1 + num2;
    return sum;
}

var total = add(14, 56);
// console.log("Total: ", total);

function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

// var singaras = bringSingara(200);
var myTaka = 300;
var singaras = bringSingara(myTaka);
console.log("Eating singaras: ", singaras);