let shopingCart = {
    books: 3,
    sunglass: 2,
    keyboard: 10,
    mouse: 2,
    pen: 30
}
// tumi jano tmr object er moddhe pen name a key/notation ta ace tahole tumi sorasuri ai vabe use korte parbe
let pentCount = shopingCart.pen;

// alternative system
// tumi jano tmr object er moddhe pen name a key/notation ta ace tahole tumi sorasuri ai vabe use korte parbe
let pentCount2 = shopingCart['pen'];

// tumi jano na tmr object a ki ki keys ache seyta ber korar jonno tumi ai vabe use korte paro
let properties = Object.keys(shopingCart);

// tumi tmr object a ki ki value ace ta ber korar jonno ai vabe use korte paro
let propertiesValues = Object.values(shopingCart);

let propertyName = 'mouse';
let propertyValue = shopingCart[propertyName];
// console.log(propertyName, propertyValue);

// console.log(properties);
// console.log(propertiesValues);
console.log(shopingCart);

// set a property value
shopingCart.mouse = 15;
console.log(shopingCart);
shopingCart['mouse'] = 29;
console.log(shopingCart);
shopingCart[propertyName] = 89;
console.log(shopingCart);