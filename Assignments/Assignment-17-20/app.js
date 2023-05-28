//.....................ARRAYS AND LOOP ,...................

//...................Q1.................

// . Declare and initialize an empty multidimensional array.
// (Array of arrays)
// var arrayOfArrays =[[],[],[]]
//...................Q2.................

// Declare and initialize a multidimensional array 
// representing the following matrix:

// var multiArray=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]

// for (var index = 0; index<4; index++) {

//     console.log(multiArray[index].join(' ')) 
    
//     }

//...................Q3.................

// 3. Write a program to print numeric counting from 1 to 10.

// for (var i= 1; i <= 10; i++) {
//   console.log(i)
   
// }

//...................Q4.................


// 4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.

// var table = +prompt("Enter the table NO ")
// var tLength = +prompt("Enter table length")

// for (var i = 1; i <= tLength; i++) {
  
//    document.write(table+"x"+i+"="+table*i+"<br>") 
  
// }



//...................Q5.................

// 5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// var fruits=["apple", "banana","mango","orange","strawberry"]

// for (var i= 0; i<=4; i++) {

// }
// console.log(" Element at index 0 is " + fruits[0])
// console.log(" Element at index 1 is " + fruits[2])
// console.log(" Element at index 2 is " + fruits[3])
// console.log(" Element at index 3 is " + fruits[3])
// console.log(" Element at index 4 is " + fruits[4])


//...................Q6.................

// 6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// ...........a. Counting....................
// document.write("<h3> Counting: </h3>")
// for (var i = 1; i <=15; i++) {
//     document.write(i +", " )
// }

// // ......... b. Reverse counting...................
// document.write("<h3> Reverse Counting: </h3>")
// for (var i = 10; i >=1; i--) {
//     document.write(i +", " )
// }

// // ...........c. Even....................
// document.write("<h3> Even:</h3>")
// for (var i = 0; i <=20; i+=2) {
//     document.write(i +", " )
// }
// // ...........d. Odd....................
// document.write("<h3>  Odd:</h3>")
// for (var i = 1; i <=19; i+=2) {
//     document.write(i +", " )
// }

// // ........... e. Series....................


// document.write("<h3> Serise:</h3>")
// for (var i = 1; i <= 10; i++) {
//   document.write(2 * i + "k, ");
// }

//...................Q7.................

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
// var found=false
// var bakeryArray = ["cake","apple pie","cookie","chips","patties"]
// var userInput = prompt("Welcom to ABC Bakery.what do you want to order sir/ma'am?")
// for (var i = 0; i < bakeryArray.length; i++) {
//    if (bakeryArray[i] === userInput) {
//      found=true
// document.write(userInput+" is <b>avaliable</b> at index "+i+" in our bakery")

//    }    
// }
//  if (found !== true) {
   
//     document.write("we are sorry "+userInput+ " not avaliable in our bakary")}
//...................Q8.................

// 8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12]


// var a = [24, 53, 78, 91, 12];
// var largest = a[0];

// for (var i = 1; i <= a.length; i++) {
//   if (a[i] > largest) {
//     largest = a[i];
//   }
// }
// document.write("Array iteams: " + a+"<br>");

// document.write("The largest number is: " + largest);

//...................Q9.................

// 9. Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12]


// var a = [24, 53, 78, 91, 12];
// var smallest  = a[0];

// for (var i = 1; i <= a.length; i++) {
//   if (a[i] < smallest) {
//     smallest = a[i];
//   }
// }
// document.write("Array iteams: " + a+"<br>");

// document.write("The smallest number is: " + smallest);
//...................Q10.................

// 10. Write a program to print multiples of 5 ranging 1 to 100.
// for (var i = 5; i<= 100; i+=5) {
//    document.write(i+ ", ")
//     console.log(i)
// }  


//...................THE END.................
