//...................MATH METHODS...................

//...................Q1.................

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// .................a. number................
// var userNum = +prompt("Enter your positiv integer")
// document.write("Number; ".concat(userNum).concat("<br>"))

// // ................b. round off value of the number................
// Math.round(userNum)
// document.write("Round of value: ".concat(Math.round(userNum)).concat("<br>"))

// // // ................. c. Floor value of the number...............
// Math.floor(userNum)
// document.write("Floor value: ".concat(Math.floor(userNum)).concat("<br>"))

// // // ................. d. ceil value of the number...............
// Math.ceil(userNum)
// document.write("Ceil value: ".concat(Math.ceil(userNum)).concat("<br>"))

//...................Q2.................
// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// .................a. number................
// var userNum = +prompt("Enter your negative integer")
// document.write("Number; ".concat(userNum).concat("<br>"))

// // ................b. round off value of the number................
// Math.round(userNum)
// document.write("Round of value: ".concat(Math.round(userNum)).concat("<br>"))

// // // ................. c. Floor value of the number...............
// Math.floor(userNum)
// document.write("Floor value: ".concat(Math.floor(userNum)).concat("<br>"))

// // // ................. d. ceil value of the number...............
// Math.ceil(userNum)
// document.write("Ceil value: ".concat(Math.ceil(userNum)).concat("<br>"))

//...................Q3.................
// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var absNumber = +prompt("Enter a Number")

// Math.abs(absNumber)

// document.write("The absolute value of : ".concat(absNumber).concat(" is ").concat(Math.abs(absNumber)).concat("<br>"))

//...................Q4.................

// 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your browser.:

// var user = +prompt("Enter a random number");
// var diceValue1 = Math.floor(Math.random() * 6) + 1;
// document.write("Random dice value: " + diceValue1 + "<br>");

//...................Q5.................

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var randomNum = Math.random();

// var coinValue 
// if ( randomNum < 0.5) {
//     coinValue = "Heads" 
// }else{
//     coinValue =("Tails" )
// }
// document.write("Random coin value: " + coinValue);

//...................Q6.................

// 6. Write a program that shows a random number between 1 and 100 in your browser.

// var ranNum = Math.floor(Math.random() * 100) + 1

// document.write(" random number between 1 and 100 : ".concat(ranNum))

//...................Q7.................

// 7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var userweight =prompt("enter your weight in kilogram")


// document.write(" the weight of user is : ".concat(userweight))


//...................Q8.................

// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.
 
// var secN= Math.random()
// var userN = +prompt("Enter a secret number (1-10)")

// if (secN === userN) {
//     alert("congratulate ")
    
// }else{
//     alert ("try again")
// }



//...................THE END................

