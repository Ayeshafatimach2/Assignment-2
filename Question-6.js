"use strict";
// Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var userName = "Ayesha Fatima";
var temp = 19;
if (temp < 0) {
    console.log(`Mr. ${userName}, It's extremely cold! Make sure to wear heavy winter clothing, including a coat, gloves, scarf, and hat.`);
}
else if (temp >= 0 && temp < 19) {
    console.log(`Mr. ${userName}, It's quite cold. Consider wearing a warm coat, gloves, and a scarf.`);
}
else if (temp >= 10 && temp < 29) {
    console.log(`Mr. ${userName}, It's chilly. A light jacket or sweater should be sufficient.`);
}
else if (temp >= 20 && temp < 30) {
    console.log(`Mr. ${userName}, It's a moderate temperature. A t-shirt and jeans would be comfortable.`);
}
else {
    console.log(`Mr. ${userName}, It's warm. You can wear light clothing like shorts and a t-shirt.`);
}
