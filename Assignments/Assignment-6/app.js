//..................MATH EXPRESSIONS....................
//...................Q1.................
// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your browser:
// var a = 10
// document.write("Result:"+ "<br/>"+ "The value of a is: " + a+"<br/>"+ "................................"+ "<br/>")
// document.write(" "+ "<br/>")
// ++a
// document.write("The value of ++a is: " + a+ "<br/>")
// document.write("Now the value of a is: " + a+ "<br/>")
// document.write(" "+ "<br/>")

// document.write("The value of a++ is: " + a+ "<br/>")
// a++
// document.write("Now the value of a is: " + a + "<br/>")
// document.write(" "+ "<br/>")
// --a
// document.write("The value of --a is: " + a+ "<br/>")
// document.write("Now the value of a is: " + a+ "<br/>")
// document.write(" "+ "<br/>")

// document.write("The value of a-- is: " + a+ "<br/>")
// a--
// document.write("Now the value of a is: " + a + "<br/>")

//...................Q2.................
// 2. What will be the output in variables a, b & result after
// execution of the following script:
// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// // Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


// var a = 2, b = 1;
// document.write("a is "+ a + "<br/> b is "+ b+ "<br/>")
// // var result = --a - --b + ++b + b--;
// // // Explain the output at each stage:
// var result = --a;
// document.write("result is --a "+"= "+ result +"<br/>")
// result = --a - --b;
// document.write("result is --a - --b "+"= "+ result +"<br/>" )
// result =--a - --b + ++b;
// document.write("result is --a - --b "+"= "+ result +"<br/>")

// result=--a - --b + ++b + b--;
// document.write("result is --a - --b + ++b + b-- "+ "= "+result + "<br/>" )

//...................Q3.................

// 3. Write a program that takes input a name from user & greet the user.

// var userName =prompt("Enter Your Name")
// document.write("Assalamualikum " + userName)

//...................Q4.................
// 5. Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.

// var number =+prompt("Enter number ",5)
// var t1= (number+" x 1 = "+number*1)
// var t2= (number+" x 2 = "+number*2)
// var t3= (number+" x 3 = "+number*3)
// var t4= (number+" x 4 = "+number*4)
// var t5= (number+" x 5 = "+number*5)
// var t6= (number+" x 6 = "+number*6)
// var t7= (number+" x 7 = "+number*7)
// var t8= (number+" x 8 = "+number*8)
// var t9= (number+" x 9 = "+number*9)
// var t10= (number+" x 10 = "+number*10)
// document.write("Table of " + number +"<br>" ,t1 +"<br>" , t2 +"<br>",t3+"<br>",t4+"<br>",t5 +"<br>",t6 +"<br>",t7 +"<br>",t8 +"<br>",t9 +"<br>",t10)


//...................Q5.................
// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.
// (Hint: user table)
// ........three subjects name...........
// var subject1 =+prompt("Enter your Subject 1 ")
// var subject2 =+prompt("Enter your Subject 2 ")
// var subject3 =+prompt("Enter your Subject 3 ")

// // ...Total marks for each subject ......
// var totalMarks = 100 

// //......obtained marks for first subject......
// var firstSubject =+prompt("Enter your Subject 1 marks ")

// //......obtained marks for remaining 2 subjects......
// var secondSubject =+prompt("Enter your Subject 2 marks ")
// var thirdSubject =+prompt("Enter your Subject 3 marks ")

// //..........calculate total mark...........
// var marks1 =(firstSubject/totalMarks*100)
// var marks2 =(secondSubject/totalMarks*100)
// var marks3 =(thirdSubject/totalMarks*100)
// var res =(marks1 ,marks2 ,marks3)
// document.write(res)


//...................THE END.................



