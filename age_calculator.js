//uses the current date.
//be subtracting current date from their birth date
//Put in there birth date
//years?
//Months?
//Day?

//Calculating years
//returns current year 4 digits
var today = new Date();
var currentYear = today.getFullYear();
var birthYear = prompt("Please enter your 4 digit Birth year.");
var currentAge = currentYear - birthYear;

console.log(currentAge);

document.getElementById("birthyear").innerHTML = birthYear;

document.getElementById("year").innerHTML = currentYear;

document.getElementById("age").innerHTML = currentAge;

//Will add on months