//...................FUNCTION................

//...................Q1................

// 1. Write a function that displays current date & time in your browser.
// function CurrentDateTime() {
//     var currentDate = new Date();

//     document.write( currentDate);
//   }
//     CurrentDateTime();

//...................Q2................

// 2. Write a function that takes first & last name and then it 
// greets the user using his full name.

// function UserFullName() {
//     var userFirstName = prompt("enter your first name")
//     var userLastName = prompt("enter your last name") 
//     alert("Asalamualikum "+userFirstName +" "+userLastName)

// }
// UserFullName() 

//...................Q3................
// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.

// var userno1 = +prompt("enter your first number")
// var userno2 = +prompt("enter your second number")
// function inputUserNumber() {
 
//   var sum = (userno1 + userno2)
 
//   return sum
// }
// var resultOfSum = (inputUserNumber())
// document.write("The sum of the two numbers is: "+resultOfSum)

//...................Q4................
// 4. Calculator:
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.

// function userInput(num1,num2,operater){


//   var num1= +prompt("enter first number")
//   var num2= +prompt("enter second number")
//   var operater= prompt("enter  operater(+-*/%")
//   var result
//   if (operater ==="+") {
//     result = (num1+num2)
//   }else if (operater==="-") {
//     result = (num1-num2)
//   }else if (operater==="*") {
//     result=(num1*num2)
    
//   }else if (operater==="/") {
//     result = (num1/num2)
//   }else if (operater==="%") {
//     result=(num1%num2)
//   }
// return (result)
// }

// var showResult=(userInput())
// document.write(showResult)
//...................Q5................

// 5. Write a function that squares its argument.
// var userinput = prompt("enter a number")
// function squares(x) {
//   var result= x*x
//   return alert ("the square of your number is "+ result )
// }
// squares(userinput)
//...................Q6................

// 6. Write a function that computes factorial of a number.

// var userInput = prompt("enter a number")

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// var res= factorial(userInput)
// console.log(res)

//...................Q7................

// . Write a function that take start and end number as inputs 
// & display counting in your browser.

// function num(strt, end){
//     for (var index = strt; index <= end; index++) {
//        document.write(index)
        
//     }
// }num(1,10)



//...................Q8................
// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// // Outer function : calculateHypotenuse()
// function calHypotenuse(base, perp) {

// // ....Inner function: calculateSquare()....

//     function calSquare(side) {

//         return side * side;
//     }
//     // .........baseSquare..........
//     baseSquare = calSquare(base)

//     // ......perpendicularSquare....
//     perpSquare = calSquare(perp)

//     hypoSquare = baseSquare + perpSquare

//     hypo = Math.sqrt(hypoSquare)

//     document.write(baseSquare)

//     document.write(perpSquare)
//     return hypo;
// }
// // Take base and perpendicular as inputs.
// var hypo = calHypotenuse(4, 5)
// document.write("<br> hypotenuse of a right angle triangle is: "+hypo)

//...................Q9................

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// i. ...........Arguments as value..........
// function area (width,height) {
  
//     return width * height
   
// } var res= area (125,145)

// console.log(res)


// // ..... ii. Arguments as variables..............

// function area (width,height) {
  
//     return width * height
// }
// var w= 125
// var h = 145
// var res= area (w,h)

// console.log(res)
//...................Q10................

// 10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam.

// function reversevalue(palindrome){
//     var resverseValue =palindrome.toString().split("").reverse().join("")
 
//     if (resverseValue==palindrome) {
//         alert ("givin string is a palindrome")
//     }else{
//         alert ("givin string is not a palindrome")
//     }
// return resverseValue
// }
// var value= reversevalue("madam")



//...................Q11................

// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'


// function uppercase(string) {
//     var splitWords = string.split(" ")
  
//     for (var i = 0; i < splitWords.length; i++) {
//       var word = splitWords[i];
//       splitWords[i] = word.charAt(0).toUpperCase() + word.slice(1)
//     }
  
//     var result =splitWords.join(" ")
//     return result
//   }
//   var capitalString = uppercase("the quick brown fox")
//   document.write(capitalString)
  

  
//...................Q12................


// 12. Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function uppercase(string) {
//     var splitWords = string.split(" ")
//   longestWord = ''
//     for (var i = 0; i < splitWords.length; i++) {
//    if (splitWords[i].length > longestWord.length) {
//     longestWord = splitWords[i]
//    }
//     }
//     return longestWord
//   }
//   var lWord = uppercase("Web Development Tutorial")
//   document.write(lWord)
  



//...................Q13................

// 13. Write a JavaScript function that accepts two arguments, a 
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o'

// function checkOccurrence(string ,letter){
//     var count =0
//     var length=string.length

// for (var i = 0; i <length; i++) {
//   if( string[i] == letter){
//     count++
//   }
// }
//     return (count)
// }var letterOccurrence =checkOccurrence ("JSResourceS.com","o")
// console.log( "Number of Occurrence  of the specified letter within the string "+letterOccurrence)

// //...................Q14................

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using 
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area 
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2


// document.write("<b>The Geometrizer</b><br>");
// function calCircumference(radius) {
//     var circumference = (2 * Math.PI * radius)
//     document.write("The Circumference is " + circumference+"<br>")
//   }
  
//   function calArea(radius) {
//     var area = Math.PI * Math.pow(radius, 2);
//     document.write("The Area is " + area)
//   }
//   calCircumference(3)
//   calArea(2)
  
// //...................THE END................


