//..................ARRAYS ...................

//...................Q1.................
// // 1. Declare an empty array using JS literal notation to store
// // student names in future.
// var studentName =[]
// //...................Q2.................
// // 3. Declare and initialize a strings array.
// var stringsArray =["laptop","mobile","cable" ,"fan", "chair","button"]

// //...................Q3.................
// // 3. Declare and initialize a numbers array.
// var  numbersArray= [1,2,45, 76,90,3,5,2,568,23,33]

// //...................Q4.................
// // 4. Declare and initialize a boolean array.
// var booleanArray=[false ,true ]

// //...................Q5.................
// // 5. Declare and initialize a mixed array.
// var mixedArray=["laptop",90,3,false,"mobile",5,2,true ]

// //...................Q6.................
// //6. Declare and Initialize an array and store available 
// // education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// // BS, BCOM, MS, M. Phil., PhD). Show the listed 
// // qualifications in your browser like:
// var qualifications=["1) SSC", "2) HSC", "3) BCS", "4) BS", "5) BCOM", "6) MS","7) M. Phil.", "8) PhD"]
// document.write("<h1>Qualification:</h1>")
// document.write("  <li>"+qualifications[0]+"</li><li>"+qualifications[1]+"</li><li>"+qualifications[2]+"</li><li>"+qualifications[3]+"</li><li>"+qualifications[4]+"</li><li> "+qualifications[5]+"</li><li> "+qualifications[6]+"</li><li>"+qualifications[7]+"</li>")

//...................Q7.................
// . Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:

// var studentsName=["Michael" , "John","Tony"]

// var studentscore=[320, 230,480]

// var totalMarks=(500)
 
// var student1=(studentscore[0]/totalMarks)*100
// var student2=(studentscore[1]/totalMarks)*100
// var student3=(studentscore[2]/totalMarks)*100
// document.write("Score of "+studentsName[0]+ " is "+ studentscore[0]+". Percentage: "+student1 +" % <br>")
// document.write("Score of "+studentsName[1]+ " is "+ studentscore[1]+". Percentage: "+student2 +" % <br>")
// document.write("Score of "+studentsName[2]+ " is "+ studentscore[2]+". Percentage: "+student3 +" %")

//...................Q8.................
// 9. Initialize an array with color names. Display the array
// elements in your browser.
// var colors=["Red" ,"Blue", "Pink","Purple","Yellow","Black","White"]
// document.write(colors+"<br>")

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// ..................add....beginning.................

// var userInput=prompt("what color he/she wants to add to the beginning\n1)Red 2)Blue 3)Pink 4)Purple5)Yellow6)Black7)White")
// colors.unshift(userInput)
// document.write(colors +"<br>")

// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.

// ................add......end......................
// var userInput=prompt("what color he/she wants to add to the end\n1)Red 2)Blue 3)Pink 4)Purple5)Yellow6)Black7)White")
// colors.push(userInput)
// document.write(colors +"<br>")

// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.

//................add...............
// colors.unshift("Orange", "Brown")
// document.write(colors)

// d. Delete the first color in the array. Display the updated
// array in your browser.

//.................delete...first............
// colors.shift()
// document.write(colors)

// e. Delete the last color in the array. Display the updated
// array in your browser.

//................delete...last..............
// colors.pop()
// document.write(colors)

// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. Display the updated array in your browser.

// var userIndexNum=prompt("which index he/she wants to add a color(1-7)")
// var usercolour= prompt("which colour you want to add")
// colors.splice(userIndexNum-1,0,usercolour)
// document.write(colors +"<br>")

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your browser.

// var userIndexNum=+prompt("which index he/she wants to delete a color(1-7)")
// var userdelete= +prompt("how many colour you want to delete")
// colors.splice(userIndexNum-1,userdelete)
// document.write(colors +"<br>")

//...................Q9.................

// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort method.

// var studentScores=[320,230,480,120]
// document.write("Scores Of Students: " +studentScores+"<br>")
// studentScores.sort()
// document.write("Ordered Scores Of Students: "+studentScores +"<br>")

//...................Q10.................

// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities array.

// var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
// document.write("<h3>Cities List:</h3> "+ cities+"<br>" )

// cities.splice(0,3)

// document.write("<h3>Selected cities list:</h3> "+cities)

// //...................Q11.................

// 12. Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var array = ["This","is", "my", "cat"];
// document.write("<h4>Array : </h4>"+array );

// var joinArray=array.join(" ")

// // document.write(joinArray)
// document.write("<h4>Array : </h4>"+joinArray);




//...................Q12.................

// // 13. Create a new array. Store values one by one in such a way
// // that you can access the values in the order in which they 
// // were stored. (FIFO-First In First Out)

// var device= ["keyboard","mouse","printer","moniter"]

// document.write("Devices: <br>" + device+"<br>")

// device.push("keyboad")
// document.write("out: <br>" +device.shift()+"<br>")

// device.push("mouse")
// document.write("out: <br>" +device.shift()+"<br>")
// device.push("printer")
// document.write("out: <br>" +device.shift()+"<br>")
// device.push("moniter")
// document.write("out: <br>" +device.shift()+"<br>")


//...................Q13.................

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-First Out)

// var device= ["keyboard","mouse","printer","moniter"]

// document.write("Devices: <br>" + device+"<br>")

// device.push("moniter")
// document.write("out: <br>" +device.pop()+"<br>")

// device.push("printer")
// document.write("out: <br>" +device.pop()+"<br>")
// device.push("mouse")
// document.write("out: <br>" +device.pop()+"<br>")
// device.push("keyboard")
// document.write("out: <br>" +device.pop()+"<br>")

//...................Q14.................

// 15. Write a program to store phone manufacturers (Apple,
    // Samsung, Motorola, Nokia, Sony & Haier) in an array. 
    // Display the following dropdown/select menu in your 
    // browser using document.write() method:
// 
// var mobileArry=["Apple","Samsung","Motorola","Nokia","Sony","Haier"]

// document.write("<select>"
// +"<option value='mobileArry[0]'>Apple</option>"
// +"<option value='mobileArry[1]'>Samsung</option>"
// +"<option value='mobileArry[2]'>Motorola</option>"
// +"<option value='mobileArry[3]'>Nokia</option>"
// +"<option value='mobileArry[4]'>Sony</option>"
// +"<option value='mobileArry[5]'>Haier</option>"
// +"</select>")



//...................THE END.................


