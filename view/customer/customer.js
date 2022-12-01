let foods = JSON.parse(localStorage.getItem("foods"));


const dom_food_view = document.querySelector(".food");
const dom_food_dialog = document.querySelector("#foods-dialog");

let getBtnSrearch = document.querySelector(".search p input");
getBtnSrearch.addEventListener("keyup",getSrearch)

function getSrearch(){
    let SearchInput=getBtnSrearch.value.toLocaleLowerCase();
    let getAllcard =document.querySelectorAll(".card");
    console.log(SearchInput)
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
console.log(getBtnSrearch);

function hide(element) {
    element.style.display = "none";
}
  
function show(element) {
    element.style.display = "block";
}
  

let information_by =[];

function saveFoods() {
    localStorage.setItem("informate", JSON.stringify(information_by));
}
function loacalFoods() {
    let inforStorage = JSON.parse(localStorage.getItem("informate"));
    if (foodsStorage !== null) {
        information_by = inforStorage;
        console.log(inforStorage)
    }
}

function renderfood() {
    
    let choose =document.querySelector(".choose");
    

    for (let index = 0; index < foods.length; index++) {
      let food = foods[index];
        
        let card = document.createElement("div");
        card.className="card";
        card.dataset.index =index;
        
        let toDo = document.createElement("div");
        toDo.className="to_do";
        toDo.textContent=food.kinf_food;
        

        let imgFood = document.createElement("img");
        imgFood.src =food.picture;
        imgFood.style.width="100%";

        let order = document.createElement("div");
        order.className="other";
        

        // let btn =document.createElement("button");
        // btn.textContent="Order"
        
        
        let orders =document.createElement("img");
        orders.className="to-orde";
        // orders.addEventListener("click",deletefoods);
        orders.addEventListener("click",OrderTheFood)
        orders.src="../../img/order.png";
        orders.style.width="15%";
        
        
        // let views =document.createElement("img");
        // views.className="to-view";
        // views.src="../../img/view.png";
        // views.style.width="19%";
        // views.style.margin="2%";
    

        let star = document.createElement("div");
        star.className = "star";

        let imStar = document.createElement("img");
        imStar.src="../../img/star.png";
        
        
    

        let name_food = document.createElement("div");
        name_food.className="name-food";

        let nameFood = document.createElement("p");
        nameFood.className="kind-food";
        nameFood.textContent=food.kinf_food;

        let priceFood = document.createElement("p");
        priceFood.className="price";
        priceFood.textContent=food.price;

        // toDo.appendChild(orders);
        // toDo.appendChild(views);

        order.appendChild(orders);
        order.appendChild(star);


        name_food.appendChild(nameFood);
        name_food.appendChild(priceFood);
        // console.log(name_food);
        card.appendChild(toDo);
        card.appendChild(imgFood);
        card.appendChild(name_food);
        card.appendChild(order);
        choose.appendChild(card);
        console.log(card)
    }
 
}


function OrderTheFood() {
    show(dom_food_dialog);
    
    // document.querySelector(".choosed").textContent = getCard;
}

function onCancel(e) {
    hide(dom_food_dialog)
}

function OrderNow(e) {
    
    hide(dom_food_dialog);
    
    let task = {};
    task.NUMBER=dom_food_dialog.querySelector("#nu").value;
    task.LOCATION=dom_food_dialog.querySelector("#loc").value;
    task.PHONE=dom_food_dialog.querySelector("#pho").value;
    task.MESSAGE=dom_food_dialog.querySelector("#mess").value;
    task.DATE=dom_food_dialog.querySelector("#date").value;

    console.log(task.picture);
    
    
    information_by.push(task);

    console.log(information_by);
    
    saveFoods();
    
    renderfood();
}

renderfood();