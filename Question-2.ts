// Question-2
// Write a program that calculates the percentage.

var studentName: string = "Ayesha Fatima";
var totalMarks: number = 1100;
var obtainedMarks: number = 954;

// Farmula:  (obtainedMarks / totalMarks) * 100 ;
var percentage: number = (obtainedMarks / totalMarks) * 100;
console.log(`percentage of marks obtained by ${studentName} is ${percentage}`);

if (percentage > 80 && percentage > 70) {
    console.log("Grade B+");

}
else if (percentage > 70 && percentage > 60) {
    console.log("Grade C");

}
else {
    console.log("Grade D");
}