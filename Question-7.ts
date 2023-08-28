// Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.

let divideNumber: number = 78552850;
let divide3: number = divideNumber % 3;
let divide5: number = divideNumber % 5;

if (divide3 == 0) {
    console.log(` The Number ${divideNumber}, is divisible by 3`);
}

else if (divide5 == 0) {
    console.log(` The Number ${divideNumber}, is divisible by 5`);
}

else if (divide3 == 0 && divide5 == 0) {
    console.log(` The Number ${divideNumber}, is divisible by both 3 and 5`);
}

else {
    console.log(` The Number ${divideNumber}, is not divisible by both 3 and 5`);
}
