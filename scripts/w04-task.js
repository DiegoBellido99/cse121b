/* LESSON 3 - Programming Tasks */

/* Profile Object  */



let myProfile = {
    name : "Diego Bellido",
    photo :  "images/profilephoto.jpg",
    favoriteFoods : ["Arroz con pollo","ceviche","lomo saltado","causa","chaufa"],
    hobbies : ['play guittar','listen to music','play videogames','play soccer'],
    placesLived :[],

};
/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place : "Lima",
        length: "20years",
    },
    {
        place : "Trujillo",
        length: "1 year"
    },
    {
        place : "Cajamarca",
        length: "1 year",
    }
)
/* DOM Manipulation - Output */
/* Name */
let  nameElement = document.getElementById("name");
nameElement.textContent = myProfile.name;

/* Photo with attributes */
const photoProfile = document.getElementById("photo");
photoProfile.setAttribute("src",myProfile.photo);
photoProfile.setAttribute("alt",myProfile.name);


/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(element =>{
    const li = document.createElement("li");
    li.textContent= element;
    const ul =document.getElementById("favorite-foods");
    ul.appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(element =>{
    const li = document.createElement("li");
    li.textContent= element;
    const ul =document.getElementById("hobbies");
    ul.appendChild(li);
});

/* Places Lived DataList */


myProfile.placesLived.forEach(place => {

    const dt = document.createElement("dt");
    const dd = document.createElement("dd");

    dt.textContent = place["place"];
    dd.textContent = place["length"];

    const dl = document.getElementById("places-lived");

    dl.appendChild(dt);
    dl.appendChild(dd);
});

