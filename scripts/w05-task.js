/* W05: Programming Tasks */

/* Declare and initialize global variables */

const  templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples)=>{
    temples.forEach(element => {
       const article = document.createElement("article");

       const h3 = document.createElement("h3");
       h3.textContent=element.templeName;
       
       const img = document.createElement("img");
       img.setAttribute("src",element.imageUrl);
       img.setAttribute("alt",element.location);

       article.appendChild(h3);
       article.appendChild(img);

       templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/

const getTemples = async ()=>{
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    const temples = await response.json();

    templeList.push(temples);

    displayTemples(templeList);

    console.log(templeList);
};


/* reset Function */
const reset = ()=>{
    const templesElement = document.getElementById("temples");

    templesElement.innerHTML="";
};

/* filterTemples Function */

const filterTemples = (temples)=>{
    reset();
    const filter = document.getElementById("filtered");
    
       
}


getTemples();

/* Event Listener */
