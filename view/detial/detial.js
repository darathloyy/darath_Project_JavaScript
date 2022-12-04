
let cardStorage = JSON.parse(localStorage.getItem("storeDetail"));
console.log(cardStorage)

let myStar1 = document.querySelectorAll(".material-icons")[0];
let myStar2 = document.querySelectorAll(".material-icons")[1];
let myStar3 = document.querySelectorAll(".material-icons")[2];
let myStar4 = document.querySelectorAll(".material-icons")[3];
let myStar5 = document.querySelectorAll(".material-icons")[4];
let myStar6 = document.querySelectorAll(".material-icons")[5];
let body=document.querySelector("body");
body.style.background="orange";

function changeColorStar1(){
    myStar1.style.color="orange"
}
function changeColorStar2(){
    myStar2.style.color="orange" 
}
function changeColorStar3(){
    myStar3.style.color="orange"
}
let order = document.createElement("div");
function changeColorStar4(){
    myStar4.style.color="orange"
}
function changeColorStar5(){
    myStar5.style.color="orange"
}
function changeColorStar6(){
    myStar6.style.color="orange"
}



function renderfood() {
    
    let choose =document.querySelector(".displayDetial");
    
    choose.style.padding="3% ";
    choose.style.height="70vh";
    let divStar = document.querySelector(".divStar");
    
    // console.log(divStar)

    for (let index = 0; index < cardStorage.length; index++) {
        let cardStorages = cardStorage[index];
        let card1 = document.createElement("div");
        card1.className="card1";
        let card2 = document.createElement("div");
        card2.className="card2";
        let card3 = document.createElement("div");
        card3.className="card3";

        let foodImage = document.createElement("img");
        let foodName = document.createElement("div");
        let foodPrice = document.createElement("div");

        let h3 = document.createElement("h3");
        h3.textContent="Payment Method Available"
        let h2 = document.createElement("h2");
        h2.textContent="Case On Delivery";

        let p1=document.createElement("p");
        p1.textContent="Local Delivery Estimation"
        let p2=document.createElement("p")
        p2.textContent="30minutes-60minutes (Phnom Penh)"

        let p3=document.createElement("p");
        p3.textContent="1day (Provinces)"

        let meaning = document.createElement("h3");
        meaning.textContent="Fast food is a type of mass-produced food designed for commercial resale, with a strong priority placed on speed of service. It is a commercial term, limited to food sold in a restaurant or store with frozen, preheated or precooked ingredients and served in packaging for take-out/take-away.";

        let img1 =document.createElement("img")
        img1.src="../../img/ABA.png";
        let img2 =document.createElement("img")
        img2.src="../../img/ACLIDA.png";

        let img3 =document.createElement("img")
        img3.src="../../img/Mer.png";


        let fec =document.createElement("img")
        fec.src="../../img/fec.png";
        let insta =document.createElement("img")
        insta.src="../../img/insta.png";

        let twit =document.createElement("img")
        twit.src="../../img/tw.png";

        
    
        foodImage.src = cardStorages.picture;
        foodImage.style.width="60%";
        foodName.textContent = "Fast food: " + cardStorages.kinf_food;
        foodPrice.textContent = "Price: " + cardStorages.price;

        
        card1.appendChild(foodImage);
        card1.appendChild(foodName);
        card1.appendChild(foodPrice);

        let divCredit = document.createElement("div");
        let divP = document.createElement("div");
        let social = document.createElement("div");
        social.className="social"

        divCredit.appendChild(img1)
        divCredit.appendChild(img2)
        divCredit.appendChild(img3)

        social.appendChild(fec)
        social.appendChild(insta)
        social.appendChild(twit)

        divP.appendChild(p1)
        divP.appendChild(p2)
        divP.appendChild(p3)


        card2.appendChild(h3)
        card2.appendChild(h2)
        card2.appendChild(divCredit)
        card2.appendChild(divP)
        card2.appendChild(social)
        card2.appendChild(meaning)
        choose.appendChild(card1)
        card1.appendChild(divStar)
        choose.appendChild(card2)
        choose.appendChild(card3)
    
    }
 
}
renderfood();

// getFood();