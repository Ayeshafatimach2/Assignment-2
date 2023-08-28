// Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.

var productName: string = "juice"
var productPrice: number = 188;
var discount10: number = productPrice * 10 / 100;
var discount5: number = productPrice * 5 / 100;

if (productPrice > 100) {
    console.log(`The discounted price of ${productName} is $${productPrice - discount10}`);
}
else {
    console.log(`The discounted price of ${productName} is $${productPrice - discount5}`);
}
