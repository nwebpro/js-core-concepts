// Array vs Object

let shopingItems = ['books', 'sunglass', 'pen'];
let  friendAge = [22, 34, 16, 33];
let friendsAge = {
    rahim: 22,
    hafiz: 34,
    naeem: 16,
    pranta: 33
}

let shopingCart = {
    books: 3,
    sunglass: 2,
    keyboard: 10,
    mouse: 2,
    pen: 30,
    shoes: 3
}

const keys = Object.keys(shopingCart);
console.log(keys);

const values = Object.values(shopingCart);
console.log(values);

// let keys = ['books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes'];
for (let i = 0; i < keys.length; i++){
    // console.log(keys[i]);
    let propertyName = keys[i];
    let propertyValue = shopingCart[propertyName];
    // console.log(propertyName, propertyValue);
}

// for in loop
for(let propertyName in shopingCart){
    const value = shopingCart[propertyName];
    console.log(propertyName, value);
}