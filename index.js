
//Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not.
// Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.

function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

// Test the function
const year = parseInt(400);
if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}

//Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

// Children (age <= 12): $10
// Teenagers (age 13-17): $15
// Adults (age >= 18): $20

function getTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else if (age >= 18) {
        return 20;
    } else {
        return "Invalid age";
    }
}

//Prompt the user to enter their age
const age = parseInt(15);

const ticketPrice = getTicketPrice(age);
if (typeof ticketPrice === 'number') {
    console.log(`The ticket price is $${ticketPrice}.`);
} else {
    console.log(ticketPrice);  // Prints "Invalid age" if age is not a valid number
}
