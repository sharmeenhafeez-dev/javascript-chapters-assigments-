//...................DATE METHODS................

//...................Q1................

// 1. Write a program that displays current date and time in your browser.

// var currentDate= new Date();
// document.write(currentDate);
// //...................Q2................

// // 2. Write a program that alerts the current month in words.For example December.

// var monthArry = ["January", "February", "March","April", "May","June", "July",
//                              "August", "September","October","November" ,"December"]
// var month= new Date()
// alert("Current Month:"+ monthArry[month.getMonth ()])

// //...................Q3................
// // 3. Write a program that alerts the first 3 letters of the current
// // day, for example if today is Sunday then alert will show Sun.

// var dayArry = ["Sun", "Mon","Tue", "Wed","Thus", "Fri","Sat"]
// var day= new Date()
// alert("Today Is :"+ dayArry[day.getDay ()])

//...................Q4................

// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.
// var funDay = ["Sunday", "Monday","Tuesday", "Wedneday","Thursday", "Friday","Saturday"]

// var day= new Date()
// var todayDay =day.getDay ()
// if (todayDay === "Sunday" || todayDay === "Saturday") {
//     alert("It’s Fun day "+ funDay[ todayDay])
// }else {
//     alert ("today is not a Fun day")
// }



//...................Q5................

// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”

// var days = new Date()

// var currentdate = days.getDate()

// if (currentdate <16) {
//     document.write ("First fifteen  days of the month ")
// }else {

//     document.write ("“Last days of the month”")
// }

//...................Q6................

// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.

// var currentD = new Date()

// // document.write("current date "+ currentD)

// var previousdate = new Date("january ,1 ,1070")
// // var milisec = previousdate.getMilliseconds
// document.write("Elapsed Milliseconds since january 1,1970 "+previousdate.getMilliseconds())
// document.write("Elapsed since january 1,1970 "+previousdate.getMinutes())


// // Create a new Date object representing the current date and time
// var currentDate = new Date();

// // Create a new Date object representing midnight on January 1, 1970
// var epochDate = new Date(1970, 0, 1);

// // Calculate the difference in milliseconds between the current date and the epoch date
// var millisecondsSince1970 = currentDate.getTime() - epochDate.getTime();

// // Convert milliseconds to minutes
// var minutesSince1970 = millisecondsSince1970 / (1000 * 60);

// // Print the result
// console.log(minutesSince1970);



//...................Q7................

// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.

// var time  = new Date()

// var currentTime = time.getHours()
//                                                     // FIRST METHOD
// if (currentTime < 12) {
//     alert (" “Its AM”")
    
// } else{
//     alert(" “its PM”.")
// }



// var time  = new Date()

// var currentTime = time.getTime()
//                                             // SECOMD METHOD
// if (currentTime > 12) {
//     alert (" “Its AM”")
    
// } else{
//     alert(" “its PM”.")
// }
//...................Q8................

// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named laterDate.

// var LaterDate = new Date("11,31,2020")

//  document.write("Later Date: "+LaterDate)

//...................Q9................

// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

//........ date of this Ramadan...........

// var currentDate = new Date(2023, 3, 13)

// // .........1st Ramadan was on June 18, 2015......

// var ramznDate = new Date( 2015, 5, 18)

// // ............... daysDifferencein milliseconds........

// var daysDifference = currentDate.getTime()- ramznDate.getTime() 

// // ...............convert miliseconds in days.........

// //.......1000milliseconds = 1second......60 seconds == 1 minut.......
// //........60 minuts == 1 hour.............24 hours == 24hours......

//  var millisecondsdiff = (daysDifference /(1000*60*60*24))
// alert( "Number of days past since 1st Ramadan: " +millisecondsdiff )

//...................Q10................

// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the beginning of 2015.

//...................Q11................

// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser.

// var cDate = new Date()

// document.write(cDate +"<br>")

// var oldDate = cDate.getHours()

// // document.write(oldDate+"<br>")

//   cDate.setHours(oldDate-1)            

// document.write("1 hour ago, it was :"+cDate +"<br>")



//...................Q12................

// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?

// var cDate = new Date()

// document.write( "Current Date :"+cDate+"<br>")

// var getFullYr = cDate.getFullYear()

// // document.write(getFullYr )

//  cDate.setFullYear(getFullYr-100)
 
// // document.write("100 years back is was "+cDate)
// alert("100 years back is was "+cDate)


//....................Q13................

// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.
//.......user age.......
// var userage = +prompt("enter your age")

// document.write("Your age is:"+userage +"<br>")

// //.........get fullyear through user age............
// var userageget = new Date()

// var uageget = userageget.getFullYear()

// // document.write( uageget)

// //.....Calculate his birth year..........

// var userBirthYear=(uageget-userage)

// document.write("Your Birth Year is"+ userBirthYear+"<br>")

//...................Q14................

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

//............... a.Customer Name.............


// document.write("<h1>K-Electric Bill </h1> <br>")
// var cusName = prompt("Enter your Name")
// document.write("Customer Name "+"<b>"+cusName+"</b>"+"<br>")

// //........ b.Current Month...............
//  var arryMonth = ["January", "February", "March","April", "May","June", "July",
//                            "August", "September","October","November" ,"December"]
// var cMonth = new Date()
//  document.write( "Month:"+"<b>"+arryMonth[cMonth.getMonth()]+"</b>"+"<br>")

// // ....... c.Number of units...........
// var unitNo = prompt("How many units?")

// document.write("Number of units: "+"<b>"+unitNo+"</b>"+"<br>")

// // ............d.Charges per unit................

// var chargesPerUnit =+prompt("How many charge per units?") 

// document.write("Charges per unit: "+"<b>"+ chargesPerUnit+"</b>"+"<br>")

// //....... e. Net Amount Payable (within Due Date)....

// var netAmountPayable= unitNo*chargesPerUnit
// var netAmount = netAmountPayable.toFixed(2)
// document.write(" Net Amount Payable (within Due Date): "+"<b>"+ netAmount+"</b>"+"<br>")

// //............. f. Late Payment Surcharge............
// var LatePayment =350
// document.write("Late Payment: "+"<b>"+LatePayment+"</b>"+"<br>")

// //................ g. Gross Amount Payable (after Due Date).............

// var grossAmountPayable = netAmountPayable + LatePayment

// var grossAmount = grossAmountPayable.toFixed(2)
// document.write(" Net Amount Payable (afterin Due Date): "+"<b>"+ grossAmount+"</b>"+"<br>")


// //.................THE END.................



