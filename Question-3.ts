// Question-3
// Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

var givenDays: number = 17;
var weeks: number = Math.floor(givenDays / 7);
var days = givenDays - (weeks * 7);
console.log(`${weeks} weeks and ${days} days`);

if (weeks == 0) {
    console.log(`Number of weeks is Zero, however number of days are ${days}`);
}
else if (days == 0) {
    console.log(`total number of weeks are ${weeks} and remaining days are Zero`);
}
else {
    console.log(`total number of weeks are ${weeks} and remaining days are ${givenDays}`);
}
