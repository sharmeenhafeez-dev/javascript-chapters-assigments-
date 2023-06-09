//..................DOM................

//..................Q1................
// 1. Consider you have following code snippet:
//  (Copy it in your HTML file)
//  <div>
// <h1> DOM </h1>
// <div id=”form-content” class=”content”>
// <label for=”first-name”>First Name</label>
// <input type=”text” id=”first-name” />
// <label for=”last-name”>Last Name</label>
// <input type=”text” id=”last-name” />
// <label for=”email”>Email</label>
// <input type=”text” id=”email” />
// </div>
// <div id=”main-content” class=”content”>
// <p class=”render”> First Name : Alex</p>
// <p class=”render” id=”lastName”>Last Name: Bank</p>
// <p class=”render”> Email : alexbank@example.com</p>
// <p class=”render”> Country : Pakistan </p>
// <p class=”render”> contact : +92 300 1234567</p>
// </div>
// </div>
// i. Get element of id “main-content” and assign them in a variable.

// var mainContent=document.getElementById('main-content')

// // ii. Display all child elements of “main-content” element.
// var mainContent = document.getElementById('main-content').childNodes

// console.log(mainContent)

// // iii. Get all elements of class “render” and show their innerHTML 
// // in browser.

// var render = document.getElementsByClassName("render");
// for (var i = 0; i < render.length; i++) {
//   console.log(render[i].innerHTML);
// }








//..................Q2................
 
// // 2. use HTML code of question 1 and show the result on browser.
// // i. What is node type of element having id “form-content”.

// var formContent=document.getElementById('form-content')
// console.log(formContent.nodeType)


// // ii. Show node type of element having id “lastName” and its child node.

// // iii. Update child node of element having id “lastName”.

// // iv. Get First and last child of id “main-content”.

// var mainContent = document.getElementById("main-content");
// console.log("First child of main-content:", mainContent.firstChild);
// console.log("Last child of main-content:", mainContent.lastChild);

// // v. Get next and previous siblings of id “lastName”.

// var lastNameElement = document.getElementById("last-name");
// console.log("Next sibling of lastName:", lastNameElement.nextSibling);
// console.log("Previous sibling of lastName:", lastNameElement.previousSibling);


// // // vi. Get parent node and node type of element having id “email”
// var emailElement = document.getElementById("email");
// console.log("Parent node of email:", emailElement.parentNode);
// console.log("Node type of email:", emailElement.nodeType);
