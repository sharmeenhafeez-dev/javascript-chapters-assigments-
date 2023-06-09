//..................FUNCTIONS, SWITCH STATEMENTS, WHILE… DO WHILE LOOPS ................

//...................Q1................

// 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.

// function power(a,b){
//     var res = Math.pow(a,b) 

// return(res)
// }
// var valueA=5
// var valueB = 7
// console.log (power(valueA,valueB))


//...................Q2................

// 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

// function leapyear(year) {
//   switch (true) {
//       case year % 400 === 0:
//           return "Leap year"
//       case year % 100 === 0:
//           return "Not a leap year"
//       case year % 4 === 0:
//           return "Leap year"
//       default:
//           return "Not a leap year"}}
// var userInput = +prompt("Enter the year")
// document.write(leapyear(userInput))


  
//...................Q3................

// 3. If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// function triangleSide(a,b,c){

//     function area(a,b,c){
//         sides=triangleSide(a,b,c)
//         var square= Math.sqrt(sides*(sides-a)*(sides-b)*(sides-c))
//         return square
//     }
//     var sides=(a+b+c)/2
//     return sides }
// var side1= +prompt("enter side1")
// var side2= +prompt("enter side2")
// var side3= +prompt("enter side3")
// var result= triangleSide(side1,side2,side3)
// document.write("area of triangle is "+result)


// ...................Q4................
// 4. Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction


// var subject1Marks = +prompt ("Enter your subject1 marks")
// var subject2Marks = +prompt ("Enter your subject2 marks")
// var subject3Marks = +prompt ("Enter your subject3 marks")
// function marks(subject1Marks,subject2Marks,subject3Marks){

//     function calAverage(subject1Marks, subject2Marks, subject3Marks) {
//         var totalMarks = subject1Marks + subject2Marks + subject3Marks
//         var average = (totalMarks / 3)
//         return average
//       }
//       function calPercentage(subject1Marks, subject2Marks, subject3Marks) {
//         var totalMarks = subject1Marks + subject2Marks + subject3Marks
//         var percentage = (totalMarks / 300) * 100
//         return percentage;
//       }
     
//       var average = calAverage(subject1Marks, subject2Marks, subject3Marks)
// var percentage = calPercentage(subject1Marks, subject2Marks, subject3Marks)
//   document.write("Average Marks: " + average+"<br>")
//   document.write("Percentage: " + percentage + "%")
  
// }
// marks(subject1Marks, subject2Marks, subject3Marks);


//...................Q5................

// 5. You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now.

//   function customIndexOf(string, character) {

// // for (var i = 0 i < string.length i++) {
// //  if (string[i] === character) {
// //  return i }}

// //..............convert to while or  switch case ...............

//     var i = 0
//     while (i < string.length) {
//       switch (string[i]) {
//         case character:
//           return i
//         default:
        
//       } i++}
//     return -1 
// }
// var str = "Hello, World!"
// var char = "W"
// var index = customIndexOf(str, char)
// document.write(index)

  
//...................Q6................
// 6. Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long.

// var sentence = "Welcome to javascript land"
// var vletters = ["a", "e", "i", "o", "u","A","E","I","O","U"]
// var result = ""

// function isVowel(char) {
//   var vowels = ["a", "e", "i", "o", "u","A","E","I","O","U"]
//   return vowels.includes(char)}

// function deleteVowels(sentence) {
//   var i = 0
//   while (i < sentence.length) {
//     var char = sentence[i]
//     switch (isVowel(char)) {
//       case true:
//         break
//       default:
//         result += sentence[i]
//     } i++}
//   return result}
// var result = deleteVowels(sentence)
// document.write("Delete all vowels from a sentence :"+result)

  
// //...................Q7................
// // “Pleases read this application and give me gratuity”
// // Such occurrences are ea, ea, ui.


// var sentence = "Pleases read this application and give me gratuity";

// function Vowels(sentence) {
//     var count = 0
//     var i =0
//     sentence = sentence
//     do {
//       var char1 = sentence[i]
//       var char2 = sentence[i + 1]
  
//       switch (char1) {
//         case "a":
//           if (char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u") {
//             count++
//           }
//           break;
//         case "e":
//           if (char2 === "a" || char2 === "i" || char2 === "o" || char2 === "u") {
//             count++
//           }
//           break
//         case "i":
//           if (char2 === "a" || char2 === "e" || char2 === "o" || char2 === "u") {
//             count++
//           }
//           break
//         case "o":
//           if (char2 === "a" || char2 === "e" || char2 === "i" || char2 === "u") {
//             count++
//           }
//           break
//         case "u":
//           if (char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o") {
//             count++
//           }
//           break
//         default:
//           break}
//       i++
//     }while  (i < sentence.length - 1)
//     return count}

//   var occurrences = Vowels(sentence)
//   document.write("Number of occurrences: " + occudocument.write

// //...................Q8................

// // 8. The distance between two cities (in km.) is input through the 
// // keyboard. Write four functions to convert and print this 
// // distance in meters, feet, inches and centimeters.

//   var distanceInKm = +prompt("Enter the distance between two cities in kilometers")
//   //..............Distance in centimeters..............

//   var distanceInMeters = meters(distanceInKm)
// function meters(distance) {          //1km =1000 meters
//     return distance * 1000} 
//  document.write("Distance in meters: " + distanceInMeters+"<br>")

// //..............Distance in centimeters..............

//   var distanceInFeet = feet(distanceInKm)
//   function feet(distance) {              //1km = 3280.84 feets
//     return distance * 3280.84}
//   document.write("Distance in feet: " + distanceInFeet+"<br>")

// //..............Distance in centimeters..............

//   var distanceInInches = inches(distanceInKm)
//   function inches(distance) {              //1km = 39370.1 inhes
//     return distance * 39370.1}
//   document.write("Distance in inches: " + distanceInInches+"<br>")

// //..............Distance in centimeters..............

//   var distanceInCentimeters = centimeters(distanceInKm)
//   function centimeters(distance) {          // 1km = 100000 cm
//     return distance * 100000}
//   document.write("Distance in centimeters: " + distanceInCentimeters+"<br>")
  


// //...................Q9................

// // 9. Write a program to calculate overtime pay of employees. 
// // Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// // worked above 40 hours. Assume that employees do not work 
// // for fractional part of an hour.

// var hoursWorked = +prompt("Enter the number of hours worked:")
// var dailyHours = (40)
// var overtimeRate = (12.00)

// function calOvertimePay(hoursWorked) {
   
//     var overtime = hoursWorked > dailyHours
  
//     switch (overtime) {
//       case (overtime === true):
//         var overtimeHours = (hoursWorked - dailyHours)
//         var overtimePay = (overtimeHours * overtimeRate)
//         return overtimePay
//       default:
//         return 0}}
 
//   var overtimePay = calOvertimePay(hoursWorked)
//   document.write("Overtime pay: Rs. " + overtimePay)


  
// //...................Q10................

// // 10. A cashier has currency notes of denominations 10, 50 and 
// // 100. If the amount to be withdrawn is input through the 
// // keyboard in hundreds, find the total number of currency notes 
// // of each denomination the cashier will have to give to the 
// // withdrawer.

  