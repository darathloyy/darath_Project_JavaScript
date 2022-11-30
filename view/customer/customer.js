let foods = JSON.parse(localStorage.getItem("foods"));
console.log(foods);

const dom_food_view = document.querySelector(".food");
const dom_food_dialog = document.querySelector("#foods-dialog");



function hide(element) {
    element.style.display = "none";
}
  
function show(element) {
    element.style.display = "block";
}
  

function renderfood() {
    
    let choose =document.querySelector(".choose");
    

    for (let index = 0; index < foods.length; index++) {
      let food = foods[index];
        
        let card = document.createElement("div");
        card.className="card";

        // let toDo = document.createElement("div");
        // toDo.className="to_do";

        let imgFood = document.createElement("img");
        imgFood.src =food.picture;
        imgFood.style.width="100%";

        let order = document.createElement("div");
        order.className="other";
        

        let btn =document.createElement("button");
        btn.textContent="Order"
        btn.addEventListener("click",onAddfood)
        
        
        // let Delete =document.createElement("img");
        // Delete.className="delete";
        // Delete.addEventListener("click",deletefoods);
        // Delete.src="../../img/delete.png";
        // Delete.style.width="20%";
        // console.log(Delete);

        // let Edit =document.createElement("img");
        // Edit.className="edit";
        // Edit.src="../../img/edit.png";
        // Edit.style.width="19%";
        // Edit.style.margin="2%";
        // console.log(Edit);

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

        // toDo.appendChild(Delete);
        // toDo.appendChild(Edit);

        order.appendChild(btn);
        order.appendChild(star);


        name_food.appendChild(nameFood);
        name_food.appendChild(priceFood);
        // console.log(name_food);
        // card.appendChild(toDo);
        card.appendChild(imgFood);
        card.appendChild(name_food);
        card.appendChild(order);
        choose.appendChild(card);
    }
    console.log(choose)
}
function onAddfood() {
    show(dom_food_dialog);
}

function onCancel(e) {
    hide(dom_food_dialog)
}

function onCreate(e) {
    
    hide(dom_food_dialog);
    
    
    let task = {};
    task.kinf_food=dom_food_dialog.querySelector("#textName").value;
    task.price=dom_food_dialog.querySelector("#textPrice").value;
    task.picture=dom_food_dialog.querySelector("#theImag").value;

    console.log(task.picture);
    
    
    foods.push(task);
    
    saveFoods();
    
    renderfood();
}
renderfood();


const onClickButton =dom_food_view.querySelector("#btn_Add");
onClickButton.addEventListener("click",onAddfood);
  
  
const onClickButtonCancel =dom_food_dialog.querySelectorAll("button")[0];
onClickButtonCancel.addEventListener("click",onCancel);
  
  
const onClickButtonCreate =dom_food_dialog.querySelectorAll("button")[1];
onClickButtonCreate.addEventListener("click",onCreate); 