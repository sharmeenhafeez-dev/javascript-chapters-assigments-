//..................IF…ELSE & ELSE IF STATEMENT,...................
//................... TESTING SET OF CONDITIONS ...................

//...................Q1.................
//...................Q2.................

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var integer1 =+prompt("Enter first integer")
// var integer2 =+prompt("Enter second integer")
// if (integer1 > integer2) {
//     alert("First integer is larger")
// }else if(integer2 > integer1){
//     alert("Second integer is larger")
// }else{
//     alert("Both integers are equal")
// }
//...................Q3.................

// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.

// var num =+prompt("Input Number")

// if (num > 0) {
//     alert("The Number Is Positive")
    
// }else if (num < 0) {

//        alert("The Number Is Negative")
// } else {
//     alert("The Number Is Zero")
// }
//...................Q4.................

// var character = prompt("Enter a character:");

// // Convert the character to lowercase for easier comparison
// character = character.toLowerCase();

// // Define an array of vowels
// var vowels = ['a', 'e', 'i', 'o', 'u'];

// // Check if the character is a vowel
// if (vowels.includes(character)) {
//   alert("The character is a vowel.");
// } else {
//   alert("The character is not a vowel.");
// }

//...................Q5.................

// 5. Write a program that
// a. Store correct password in a JS variable.

// var jsVariable = "000108pass"

// // b. Asks user to enter his/her password

// var userPass = prompt("Enter Your Password")

// // c. Validate the two passwords:
// // i. Check if user has entered password. If not, then 
// // give message “ Please enter your password”

// // ii. Check if both passwords are same. If they are 
// // same, show message “Correct! The password you 
// // entered matches the original password”. Show 
// // “Incorrect password” otherwise.
                           
//                  // (!) if statmnt my use hota h is sy chk kiya jta h k varible empty h ya ni
//                  // js my empty string ("") false hoti h agr user pass daly ga to (logical not)
//                  // false ho jy ga agr ni daly ga to true hoga
// if (!userPass ||userPass==="")  
//  {
//     alert("“ Please enter your password”")
// } else if(userPass===jsVariable){
//     alert("“Correct! The password you entered matches the original password”")
// }else{
//     alert("“Incorrect password”")
// }


//...................Q6.................

// 6. This if/else statement does not work. Try to fix it:

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else                   CURLY BRACKET MISTAKE
// greeting = "Good evening";
// }

// var greeting;
// var hour = 13;
// if (hour < 18) {
//  (greeting = "Good day");}
// else{                            
//  (greeting = "Good evening");
// }


//...................Q7.................
// Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements

// var time= +prompt("enter time")

// var greeting 
 
// if (time >=0000&&time<1200 ) {
//     alert(greeting = "Good morning")
// }else if(time>=1200&&time<1700){
//     alert(greeting = "Good afternoon")
// }else if(time>=1700&&time<2100){
//     alert(greeting = "Good evening")
// }else if (time>=2100&&time <=2359){
//     alert(greeting = "Good night")
// }
