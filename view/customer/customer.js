let foods = JSON.parse(localStorage.getItem("foods"));

// console.log(foods)
const dom_food_view = document.querySelector(".food");
const dom_food_dialog = document.querySelector("#foods-dialog");
const cards_dialog = document.querySelector("#cards-dialog");



let sum = document.querySelector(".sum");
console.log(sum)

let li = document.querySelectorAll("li a")[3];
li.addEventListener("click",cardShow)

let getBtnSrearch = document.querySelector(".search p input");
getBtnSrearch.addEventListener("keyup",getSrearch)


function getSrearch(){
    let SearchInput=getBtnSrearch.value.toLocaleLowerCase();
    let getAllcard =document.querySelectorAll(".card");
    // console.log(SearchInput)
    for (let i =0 ; i < getAllcard.length;i++){
        let valuCard = getAllcard[i]
        let a = valuCard.firstElementChild.textContent.toLocaleLowerCase();
        if (a .includes(SearchInput)){
            valuCard.style.display = "block";
        }
        else{ 
            valuCard.style.display ="none";
        }
    }
}
// console.log(getBtnSrearch);

function hide(element) {
    element.style.display = "none";
}
  
function show(element) {
    element.style.display = "block";
}
  
// ------------------------------------------------------------------------------
let information_by =[];
function saveFoods() {
    localStorage.setItem("informate", JSON.stringify(information_by));
}
function loacalFoods() {
    let inforStorage = JSON.parse(localStorage.getItem("informate"));
    if (inforStorage !== null) {
        information_by = inforStorage;
    }
}






// ------------------------------------------------------------------------------------
function renderfood() {
    
    let choose =document.querySelector(".choose");
    
    for (let index = 0; index < foods.length; index++) {
      let food = foods[index];

      let a = document.createElement("a");
      a.href="../detial/detial.html"

        let card = document.createElement("div");
        card.className="card";
        card.dataset.index =index;
        

        let toDo = document.createElement("div");
        toDo.className="to_do";
        toDo.textContent=food.kinf_food;
        let star_rating = document.createElement("div");
        star_rating.className="star-rating";
        
        

        let imgFood = document.createElement("img");
        imgFood.src =food.picture;
        imgFood.className="img";
        imgFood.style.width="100%";
        a.appendChild(imgFood)
        let order = document.createElement("div");
        order.className="other";
        imgFood.addEventListener("click",detialFood)
        
        let star1 =document.createElement("i");
        star1.className ="material-icons";
        star1.textContent ="grade";
        star1.style.color="orange";
   

        
        let star2 =document.createElement("i");
        star2.className ="material-icons";
        star2.textContent ="grade";

        let star3 =document.createElement("i");
        star3.className ="material-icons";
        star3.textContent ="grade"
        
        let star4 =document.createElement("i");
        star4.className ="material-icons";
        star4.textContent ="grade";
        
        let star5=document.createElement("i");
        star5.className ="material-icons";
        star5.textContent ="grade"
       
        let divStar =document.createElement("div");
        divStar.className="star"
        
        let orders =document.createElement("img");
        orders.className="to-orde";
        orders.src="../../img/order.png";
        orders.style.width="15%";
        orders.addEventListener("click",showOrderDialog);

        let name_food = document.createElement("div");
        name_food.className="name-food";
        let nameFood = document.createElement("p");
        nameFood.className="kind-food";
        nameFood.textContent="Fast and so dilecious";

        let priceFood = document.createElement("p");
        priceFood.className="price";
        priceFood.textContent=food.price;
    
       divStar.appendChild(star1);
       divStar.appendChild(star2);
       divStar.appendChild(star3);
       divStar.appendChild(star4);
       divStar.appendChild(star5);
       
       order.appendChild(orders);
       order.appendChild(divStar);
       name_food.appendChild(nameFood);
       name_food.appendChild(priceFood);
       card.appendChild(toDo);
       card.appendChild(a);
       card.appendChild(name_food);
       card.appendChild(order);
       choose.appendChild(card);
       
    }
 
    // changeColorStar()
}

// let superstar = document.getElementsByClassName("material-icons")
// for(let i in superstar){
//     console.log(i)
// }
// console.log(superstar)

// let s1 =document.querySelector(".material-icons");
// console.log(s1)
function changeColorStar(){
    
    star1.style.color= "red";
    star2.style.color= "red";
    star3.style.color= "red";
    star4.style.color= "red";
    star5.style.color= "red";
    renderfood();
}

let cardGet =[];

function savecard() {
    localStorage.setItem("storecard", JSON.stringify(cardGet));
}
function loacalCard() {
    let cardStorage = JSON.parse(localStorage.getItem("storecard"));
    if (cardStorage !== null) {
        cardGet = cardStorage;
        
    }
}

let getDetialFood =[];

function saveDetial() {
    localStorage.setItem("storeDetail", JSON.stringify(getDetialFood));
}
function loacalDetail() {
    let detailStorage = JSON.parse(localStorage.getItem("storeDetail"));
    if (detailStorage !== null) {
        detailStorage = getDetialFood;
        
    }
}
function detialFood(event) {
    
    let index = event.target.parentElement.parentElement.dataset.index;
    
    let food = foods[index];
    
    
    getDetialFood.push(food)
    
    saveDetial();
}




let count=0;
let countPrice=0;
function showOrderDialog(event) {
    count+=1
    sum.textContent=count;
    let index = event.target.parentElement.parentElement.dataset.index;
    
    let food = foods[index];

    countPrice+=parseInt(food.price)
    console.log(countPrice)
    
    cardGet.push(food)
    // console.log(cardGet)

    savecard();
    renderfood();
}

function cardShow(event) {
    event.preventDefault()
    show(cards_dialog);


    
}

function onCancel(e) {
    hide(dom_food_dialog)
}

function back(e) {
    hide(cards_dialog)
}
function submit() {
    let getN = document.querySelector("#N").value;
    let getE = document.querySelector("#E").value;
    let getP = document.querySelector("#P").value;
    if ((getN && getE && getP)){
        window.alert("You become seller 😍🥰😍🥰")
        hide(cards_dialog)
    }
    console.log(getN)
}






renderfood();