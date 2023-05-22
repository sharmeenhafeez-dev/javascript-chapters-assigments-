//..................MATH EXPRESSIONS....................

//...................Q1.................

// . Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.

// var num1=5
// var num2=10

// var result1 =("Sum of"+" " + num1 +" " + "and" + " " + num2 +" "+ "is" + " " +( num1 + num2))
// document.write(result1 )

// //...................Q2.................

// // 2.Repeat task1 for subtraction, multiplication, division & modulus.
// //..................subtraction..............

// var result1 =("Sub of"+" " + num1 +" " + "and" + " " + num2 +" "+ "is" + " " + ( num1 - num2))
// document.write(result1 )

// //.................. multiplication.............

// var result1 =(" Multiplication of"+" " + num1 +" " + "and" + " " + num2 +" "+ "is" + " " + ( num1 * num2))
// document.write(result1 )

// //.................. division.............

// var result1 =("division of"+" " + num1 +" " + "and" + " " + num2 +" "+ "is" + " " + ( num1 / num2))
// document.write(result1 )

// //.................. modulus.............

// var result1 =("Modulus of"+" " + num1 +" " + "and" + " " + num2 +" "+ "is" + " " + ( num1 % num2))
// document.write(result1 )

//...................Q3.................

// 3. Do the following using JS Mathematic Expressions

// a. Declare a variable.

// var vDeclare 

// // b. Show the value of variable in your browser like “Value
// // after variable declaration is: ??”.
// vDeclare  
// document.write("Value after variable declaration is: " + vDeclare + "<br/>" )

// // c. Initialize the variable with some number.
// vDeclare = 5

// // d. Show the value of variable in your browser like “Initial value: 5”.
// document.write("Initial value: " + vDeclare + "<br/>");

// // e. Increment the variable.
// vDeclare++
// // f. Show the value of variable in your browser like “Value
// // after increment is: 6”.
// document.write("Value after increment is: " + vDeclare + "<br/>");

// // g. Add 7 to the variable.
// vDeclare = vDeclare +7
// // h. Show the value of variable in your browser like “Value after addition is: 13”.
// document.write("Value after addition is: " + vDeclare + "<br/>");
// // i. Decrement the variable.
// vDeclare--
// // j. Show the value of variable in your browser like “Value after decrement is: 12”.
// document.write("Value after decrement is: " + vDeclare + "<br/>");

// // k. Show the remainder after dividing the variable’s value by 3.
// vDeclare = vDeclare % 3
// // l. Output : “The remainder is : 0”.
// document.write("The remainder is: " + vDeclare + "<br/>");

//...................Q4.................

// 4. Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets
// to a movie. Example output:

// var movieTicketPrice = 600
// var totalPrice= movieTicketPrice*5
// var result = (totalPrice)
// document.write("Total cost to buy 5 tickrts to a movie is" + " "+ result +"PKR")

//...................Q5.................
// 5. Write a script to display multiplication table of any number in your browser. E.g
 
// var table =("table of 4")
// var table4 = 4
// var t1= ("4 x 1 = "+table4*1)
// var t2= ("4 x 2 = "+table4*2)
// var t3= ("4 x 3 = "+table4*3)
// var t4= ("4 x 4 = "+table4*4)
// var t5= ("4 x 5 = "+table4*5)
// var t6= ("4 x 6 = "+table4*6)
// var t7= ("4 x 7 = "+table4*7)
// var t8= ("4 x 8 = "+table4*8)
// var t9= ("4 x 9 = "+table4*9)
// var t10= ("4 x 10 = "+table4*10)
// document.write(table +"<br>",t1 +"<br>" , t2 +"<br>",t3+"<br>",t4+"<br>",t5 +"<br>",t6 +"<br>",t7 +"<br>",t8 +"<br>",t9 +"<br>",t10)
 


//...................Q6.................

// The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.

// ............Celsius to Fahrenheit.......
// var cTemperature = 25

// // b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// var convertToFahrenheit = cTemperature  * 9/5 + 32
// var cResult= (convertToFahrenheit)
// document.write(cTemperature + "°C is" + " " + cResult + " " + " °F"+ "<br/>")

// // ............Fahrenheit to Celsius.......
// // c. Now store a Fahrenheit temperature into a variable.
// var fTemperature = 70
// var convertToCelsius = fTemperature-32*5/9
// var fResult=(convertToCelsius)
// document.write(fTemperature + "°F is" + " " + fResult + " " + " °C")

// d. Convert it to Celsius & output “NNoF is NNoC”.

// //...................Q7.................
// // 7. Write a program to implement checkout process of a 
// // shopping cart system for an e-commerce website. Store the following in variables
// document.write("<h1>Shipping Cart </h1>"+"<br/>")

// //........... a. Price of item 1..............

// var priceOfItem1 = "Price of item 1 is"+" "+650

// // ..........c. Ordered quantity of item 1.........

// var quantityOfItem1 =(" Quantity of item 1 is"+" ")+3

// // .............b. Price of item 2............

// var priceOfItem2= ("Price of item 2 is"+" ")+100

// //......... d. Ordered Quantity of item 2...........

// var quantityOfItem2 = (" Quantity of item 2 is"+" ")+7

// //............... e. Shipping charges...............

// var shippingCharges = ("Shipping Charges"+" ")+100

// //............... Compute the total cost..........


// var totalcost =(priceOfItem1*quantityOfItem1+priceOfItem2*quantityOfItem2+shippingCharges)

// // ......... receipt in your browser.............

// document.write(priceOfItem1 +"<br/>"+quantityOfItem1 +"<br/>"+ priceOfItem2 +"<br/>"+quantityOfItem2 +"<br/>"+shippingCharges +"<br/>"+"Total cost of your order is " +" "+totalcost)

//...................Q8.................

// 8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in your browser

// document.write("<h1>Marks Sheet</h1>"+"<br/>")
// // ..........Total Marks.............

//  var totalMarks= 980

//  // ..........Obtained Marks.............

//  var totalObtained = 804

//   // ..........Compute The Percentage........

//  var marks = totalObtained/totalMarks*100
//  var percentage =(marks)

//    // .......... Result In Your Browser........

//  document.write("Total Marks:"+" "+ totalMarks +"<br/>"+"Marks Obtained:"+" "+ totalObtained +"<br/>"+"Percentage:"+" "+percentage)

//  //...................Q9.................
// 9. Assume we have 10 US & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// document.write("<h1>Currency in PKR</h1>"+"<br/>")
// var dollars = 10;
// var  saudiRiyals = 25;
// var convertDollarsToPkr = 104.80;
// var convertSrToPkr = 28;
// var totalResult = dollars * convertDollarsToPkr + saudiRiyals * convertSrToPkr
// document.write("Total Currency in PKR:"+" "+totalResult)


//...................Q10.................

// 0. Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// var initializeNumber =25
// var initializeResult =(((initializeNumber+5)*10)/2)
// document.write("Result"+" "+initializeResult)

//...................Q11.................

// // 11. The Age Calculator: Forgot how old someone is? 
// // Calculate it!
// // a. Store the current year in a variable.
// var currentYear = 2023;

// // b. Store their birth year in a variable.
// var birthYear = 1992;
// // c. Calculate their 2 possible ages based on the stored values.
// var myAge1 = currentYear - birthYear;

// // Output them to the screen like so: “They are either NN or NN years old”.

// document.write("Current Year:"+currentYear +"<br/>"+"Birth Year:"+ birthYear +"<br/>"+"They are either " + myAge1 +" " + "or"+" " +(myAge1-1) +" "+ "years old");

// //...................Q12.................

// 12. The Geometrizer: Calculate properties of a circle.
// //.......The Geometrizer..............
// document.write("<h1>The Geometrizer</h1><br/>")
// // a. Store a radius into a variable.
// var radius = 20
// document.write("Radius of a circle: " +radius +"<br/>")
// // b. Calculate the circumference based on the radius, and
// // output “The circumference is NN”.
// // (Hint : Circumference of a circle = 2 π r , π = 3.142)
// var circumference = 2* 3.142*radius
// document.write("The circumference is: " +circumference +"<br/>")
// // Calculate the area based on the radius, and output “The 
// // area is NN”. (Hint : Area of a circle = π r2, π = 3.142
// var area = 3.142*radius*radius
// document.write("The circumference is: " +area +"<br/>")

//...................Q13.................

// 3. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// // .....Lifetime Supply Calculator.......
// document.write("<h1>Lifetime Supply Calculator</h1>"+"<br/>")

// // a. Store your favorite snack into a variable
// var favoriteSnack = ("POPSTAR ") 
// document.write("Favorite Snack: "+favoriteSnack+"<br/>")
// // b. Store your current age into a variable.
// var  currentAge = 31
// document.write("Current Age: "+favoriteSnack+"<br/>")

// // c. Store a maximum age into a variable.
// var maximumAge = 65 
// document.write("Estimated Maximum Age: "+maximumAge+"<br/>")
// // d. Store an estimated amount per day (as a number).
// var estimatedAmount = 3
// document.write("Amount Of Snack per day: "+estimatedAmount+"<br/>")

// // e. Calculate how many would you eat total for the rest of your life.
// var resultSnack =( maximumAge- currentAge)*3 
// // Output the result to the screen like so: “You will need 
// // NNNN to last you until the ripe old age of NN”.
// document.write ("You will need "+resultSnack +" " +"POPSTAR to last you until the ripe old age of "+ maximumAge + ".")








