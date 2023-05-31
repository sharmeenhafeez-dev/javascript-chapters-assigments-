//..................EVENTS ................
//...................Q1................

// 1. Create a signup form and display form data in your web 
// page on submission.

function myData(e){
    e.preventDefault()
var firstName=document.getElementById('Firstname').value;
var lastname=document.getElementById('lastname').value;
var gender=document.getElementById('gender').value;

var country=document.getElementById('country').value;
var phoneNo=document.getElementById('phoneNo').value;
var password=document.getElementById('pwd').value;

var email=document.getElementById('email').value;
document.write("Name: "+ firstName+" "+lastname+"<br> Gender: "+gender+"<br> Country: "+country+"<br> Phone No.:  "+phoneNo+"<br>  Email: "+email+"<br> Password:"+password)

}

//...................Q2................


// 2. Suppose in your webpage there is content area in which 
// you have entered your item details, but user can only see 
// some details on first look. When user clicks on “Read 
// more” button, full detail of that particular item will be displayed. 


// function readmore(){
//     document.getElementById('mypara').innerHTML+= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolores possimus facere eaque pariatur aliquam voluptatibus? Vitae voluptates saepe, quos quasi modi omnis provident voluptatum unde cupiditate sit, iure quod."
    
// }

//...................Q3................
// 3. In previous assignment you have created a tabular data 
// using javascript. Let’s modify that. Create a form which 
// takes student’s details and show each student detail in 
// table. Each row of table must contain a delete button and 
// an edit button. On click on delete button entire row should 
// be deleted. On click on edit button, a hidden form will 
// appear with the values of that row.

