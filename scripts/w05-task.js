/* Declare and initialize global variables */

const  templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples)=>{
    temples.forEach(element => {
       const article = document.createElement("article");

       const h3 = document.createElement("h3");
       h3.textContent=element["templeName"];
       
       const img = document.createElement("img");
       img.setAttribute("src",element.imageUrl);
       img.setAttribute("alt",element["location"]);

       article.appendChild(h3);
       article.appendChild(img);

       templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/

const getTemples = async ()=>{
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    templeList = await response.json();
    displayTemples(templeList);
};


/* reset Function */
const reset = ()=>{

    templesElement.innerHTML="";
};

/* filterTemples Function */

const filterTemples = (temples)=>{

    reset();
    const filter = document.getElementById("filtered").value;

    switch (filter){
       case "utah":      

           displayTemples(temples.filter(temple=>temple.location.includes("Utah")));
           break;

       case "notutah":

            let notutahTemple = temples.filter(element=>!element.location.includes("Utah"));
            displayTemples(notutahTemple);
            break;

        case "older":
            let older = temples.filter(function(element){
                let dedicated = new Date (element.dedicated);

                let limitedDate = new Date(1950,0,1);

                return dedicated < limitedDate;
            })

            displayTemples(older);

            break 
        case "all":
            displayTemples(temples); 
            break;

        default:
            break
    }
     
}
document.getElementById("filtered").addEventListener("change",()=>{filterTemples(templeList)});


getTemples();
