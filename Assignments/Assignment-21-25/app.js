//...................STRING METHODS...................

//...................Q1.................

// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.

// var userfirstName =prompt("Enter Your First Name")
// var userLastName =prompt("Enter Your Last Name")
// var userFullName = (userfirstName + " "+userLastName)
// alert("Assalamualikum "+ userFullName)

//...................Q2.................

// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser

// var user = prompt("Enter Your Favorite Mobile Phone Model" )

// var favmob =(user.length)

// document.write("My Favorite Phone is: "+ user+"<br>" )

// document.write("length Of String: "+ favmob )

//...................Q3.................

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
 
// var letter =("Pakistani")

// var letterindex =letter.indexOf("n")
// document.write("String: "+letter +"<br>")
// document.write("Index of 'n' "+letterindex)

//...................Q4.................
// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.

// var index=("Hello World")

// var lastindex= index.lastIndexOf("l")
// document.write("String: "+index +"<br>")

// document.write("Index of 'l' "+lastindex)
// ...................Q5.................
//
// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.
//  var character=("Pakistani")

// var ch= character.charAt(3)
// document.write("String: "+ character+"<br>")
// document.write("charater at index 3: "+ ch+"<br>")
//...................Q6.................

// 6. Repeat Q1 using string concat() method.

// var userfirstName =prompt("Enter Your First Name")
// var userLastName =prompt("Enter Your Last Name")
// var userFullName = userfirstName.concat( " " ,userLastName)

// alert("Assalamualikum "+ userFullName)

//...................Q7.................

// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.

// var city=("Hyderabad")
// var othercity = city.replace("Hyderabad","Islamabad")

// document.write("City "+ city+"<br>")
// document.write("After Replacement: "+ othercity+"<br>")


//...................Q8.................

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;
 
//.........................Globle.....................

// var sen=("Ali and Sami are best friends. They play cricket and football together")

// var newsec = sen.replace(/and/g,"&")

// document.write( sen+"<br>")

// document.write(newsec)
//...................Q9.................

// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.

// var strNum =("472")

//  document.write("value: " + strNum + "<br>")
//  var sType =typeof strNum
//  document.write("type: " +sType+ "<br>")

// var num = Number(strNum)
// document.write("value: " + num + "<br>")

// var nType =typeof num
// document.write("type: " +nType+ "<br>")


//...................Q10.................

// 10. Write a program that takes user input. Convert and 
// show the input in capital letters.

//  var userInput = prompt("Enter you word")
//  var newOutput = userInput.toUpperCase()
//  document.write("User Input: "+userInput.concat("<br>") )

//  document.write("Upper case: "+newOutput.concat("<br>") )

//...................Q11.................

// 11. Write a program that takes user input. Convert and 
// show the input in title case.

// var userInput = prompt("Enter you word")
// document.write("User Input:".concat (userInput).concat("<br>"))

// var userFletter = userInput.charAt(0)

//    userFletter.toUpperCase()


// document.write("Title case: ".concat(userFletter.toUpperCase().concat(userInput.slice(1))))

//...................Q12.................

// 12. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36

// var numString = num.toString()


// var remdot = numString.replace(".","")

// document.write(typeof num +":".concat (num).concat("<br>") )

// document.write(typeof numString+":".concat (remdot).concat("<br>") )

//...................Q13.................

// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// ............boolen method.............

// var userInput =prompt("enter your name")
// var userName = true
// for (var index = 0; index <userInput.length; index++) {
// if (userInput.charCodeAt(index)===33
//   ||userInput.charCodeAt(index)===44||
//   userInput.charCodeAt(index)===46||
//   userInput.charCodeAt(index)===64){
//  userName = false }}
// if (userName) {
//   alert("thanks for your input")
// }else{alert("please enter a valid user name without using special character") }


//...................Q14.................

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:

// var found=false
// var bakeryArray = ["cake","apple pie","cookie","chips","patties"]
// var userInput = prompt("Welcom to ABC Bakery.what do you want to order sir/ma'am?")
// userInput =userInput.toLocaleLowerCase()
// for (var i = 0; i < bakeryArray.length; i++) {
//    if (bakeryArray[i] === userInput) {
//      found=true
// document.write(userInput+" is <b>avaliable</b> at index "+i+" in our bakery")

//    }    
// }
//  if (found !== true) {
   
//     document.write("we are sorry "+userInput+ " not avaliable in our bakary")}

//...................Q15.................

// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var invalidpassward=false
// var userpass =prompt("enter your password")
// // // ....a. It should contain alphabets and numbers......
// if (userpass>=6&&"a-z"&&"A-Z"&&0-9&&) {
//   invalidpassward = true

// }

//...................Q16.................

// 16. Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

//  var university = ("University of Karachi");

//  var arraySplit = university.split("")
//  for (var i = 0; i < arraySplit.length; i++) {
//     document.write(arraySplit[i].concat("<br>"))
//  }


//...................Q17.................

// 17. Write a program to display the last character of a user input.

// var userInput = prompt("enter your input")

// var userInputlast = userInput.charAt(userInput.length -1)

// document.write("user input :".concat(userInput).concat("<br>"))
// document.write("last character of input :".concat(userInputlast))



//...................Q18.................
// 18. You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.

// var sentence =("The quick brown fox jumps over the lazy dog")
// document.write("Text: "+"<br/>"+sentence +"<br/>")

// var sentenceLowerCase = sentence.toLowerCase()

// var word =sentenceLowerCase.match(/the/g)

// document.write("There are "+word.length+" occurrence(s) of word 'the'")


//............THE END..............



