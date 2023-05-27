//..................USER INPUT & CONDITIONAL STATEMENT ..................

//...................Q1.................

// 1. Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”

// var city =prompt("Enter Your City Name")

// if (city == "karachi" ||"KARACHI" ||"Karachi") {

//     alert(" “Welcome to city of lights”")
    
// }

// document.write("“Welcome to city of lights”")
// //...................Q2.................

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.

// var gender =prompt("Enter Your Gender")

// if (gender=== "male") {
//     alert("Good Morning Sir.")  
// }

// if (gender==="female") {
//    alert ("Good Morning  Ma’am.") 
// }


//...................Q3.................

// 3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:

//  var color = prompt("Enter the color of road traffic signal:");

// // ............ show the message...................

// if (color === "red") {
//     alert("Must stop");
//   }
  
//   if (color === "yellow") {
//     alert("Ready to move");
//   }
  
//   if (color === "green") {
//     alert("Move now");
//   }


//...................Q4.................

// 4. Write a program to take input remaining fuel in car (in 
    // litres) from user. If the current fuel is less than 0.25litres, 
    // show the message “Please refill the fuel in your car”

    // var carFule = +prompt("Enter remaining fuel in car (in litres)")
    // if (carFule < 0.25 ) {
    //     alert("“Please refill the fuel in your car”") 
    // }
    
//...................Q5.................

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

//..................a............

//  var a = 4;
// if (++a === 5){           // DISPLAY ALERT MESSAGE
// alert("given condition for variable a is true");
// }

//..............b................

//  var b = 82;
// if (b++ === 83){               //NOT DISPLAY ALERT MESSAGE
// alert("given condition for variable b is true");
// }

//..............c................

//  var c = 12;
// if (c++ === 13){  // DISPLAY ALERT MESSAGE   CONDITION 2 AND 4
// alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
//     }
//     if (++c < 14){
//     alert("condition 3 is true");
//     }
//     if(c === 14){
//     alert("condition 4 is true");
//     }
    
//..............d................

//  var materialCost = 20000;               //  DISPLAY ALERT MESSAGE  THE COST EQUALS
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

//..............e................

// if (true){                  // DISPLAY ALERT MESSAGE  TRUE
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
    
//..............f................


//  if("car" < "cat"){                       //DISPLAY ALERT MESSAGE  
//     alert("car is smaller than cat");
//     }
    
//...................Q6.................

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute 
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:
 
// var totalMarks = +prompt("Enter Your total marks")
// document.write("<h1>Marks Sheet</h1> "+"<br/>"+"Total marks: "+totalMarks+"<br/>")

// var marks0btained = +prompt("Enter Your obtained marks")
// document.write("Marks obtained: "+marks0btained+"<br/>")

// var percentage = (marks0btained/totalMarks)*100
// document.write("Percentage :"+ percentage +" %"+"<br/>")

// if (percentage >= 80) {
//     document.write("Grade : A-one<br/>"+ "Remarks: Excellent" )
    
// }
// if (percentage >= 70 && percentage< 80) {
//     document.write("Grade : A<br/>"+ "Remarks: Good" )
// }
// if (percentage>= 60 && percentage< 70){
//     document.write("Grade : B <br/>"+ "Remarks: You need to improve" )
// } 
// if(percentage < 60 ){
//     document.write("Grade : fail <br/>"+ "Remarks: Sorry" )
// }

//...................Q7.................

// // 7. Guess game:
// // // Store a secret number (ranging from 1 to 10) in a variable.

// var secNum = (7)

// // // // Prompt user to guess the secret number.

// var userNum = +prompt("Enter your guess number")

// // // // a. If user guesses the same number, show “Bingo! Correct answer”.

// if (secNum === userNum) {
//     alert("“Bingo! Correct answer”")
// }

// // // // b. If the guessed number +1 is the secret number, show
// // // // “Close enough to the correct answer”.


// if (userNum== secNum+1) {
//     alert("“Close enough to the correct answer”")
// }

    

//...................Q8.................

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number is divisible by 3.

// var num =+prompt("Enter number")

// // if (num % 3===0) {
// //    alert (num + " number is divisible by 3")
    
// // }

//...................Q9.................

// 9. Write a program that checks whether the given input is an
// even number or an odd number.
// var number =+prompt("Enter number")

// if (number % 2 === 0) {
//     alert ("This is a even number")
// }
// if(number % 2 !== 0) {
// alert("This is a odd")

// }

//...................Q10.................

// 10. Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var tem= +prompt("Enter Temperature")
// if (tem > 40) {
//     alert("It is too hot outside.");
//   }
  
//   if (tem > 30 && tem <= 40) {
//     alert("The Weather today is Normal.");
//   }
  
//   if (tem > 20 && tem <= 30) {
//     alert("Today's Weather is cool.");
//   }
  
//   if (tem > 10 && tem <= 20) {
//     alert("OMG! Today's weather is so Cool.");
//   }

//...................Q11.................

// 11. Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// var number1 = +prompt("Enter the first number")
// var number2 = +prompt("Enter the second number")
// var operation = prompt("Enter the operation (+, -, *, /, %)")

// var result

// if (operation === "+") {
//   result = number1 + number2
//   alert("The result is: " + result)
// }

// if (operation === "-") {
//   result = number1 - number2
//   alert("The result is: " + result)
// }

// if (operation === "*") {
//   result = number1 *  number2
//   alert("The result is: " + result)
// }

// if (operation === "/") {
//   result = number1 /  number2
//   alert("The result is: " + result)
// }

// if (operation === "%") {
//   result = number1 %  number2
//   alert("The result is: " + result)
// }

//...................THE END.................












