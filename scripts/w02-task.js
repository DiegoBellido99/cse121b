/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Diego Bellido";
let currentYear = 2024;
let profilePicture = "images/profilephoto.jpg";
let favFoods = ["Ceviche","Causa rellena","Anticuchos","Lomo saltado","Tallarines verdes"]


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById ('food');
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('main picture img');

/* Step 4 - Adding Content */

nameElement.innerHTML= `<strong>${fullName}</strong>`;
yearElement.innerHTML = `<strong>${currentYear}</strong>`;
imageElement.setAttribute("src",profilePicture);
imageElement.setAttribute("alt", 'Profile image of profilephoto');

/* Step 5 - Array */
foodElement.innerHTML = `<strong>${favFoods}</strong>`;

let anotherFood = "sopa seca";
favFoods.push(anotherFood);
foodElement.innerHTML += `<br>${favFoods}`;

favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;

favFoods.pop();
foodElement.innerHTML +=`<br>${favFoods}`;







