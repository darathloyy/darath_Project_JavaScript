const dom_food_view = document.querySelector(".food");
const dom_food_dialog = document.querySelector("#foods-dialog");

let getBody = document.querySelector("body");
let getNav = document.querySelector("nav");

let color = document.querySelector("#color");
color.addEventListener("click", changeBoby);




function changeBoby(event) {
    event.preventDefault()
    getBody.style.background = "rgba(255, 166, 0, 0.456)";
    getNav.style.background = "rgba(6, 6, 6, 0.245)";
}

let foods = [
    {
        picture: "../../img/pizza.png",
        kinf_food: "Pizza",
        price: "10.99$",

    },
    {
        picture: "../../img/pizza.png",
        kinf_food: "Pizza",
        price: "10.99$",

    },
    {
        picture: "../../img/humburger.png",
        kinf_food: "Humburger",
        price: "5.99$",

    },
    {
        picture: "../../img/humburger.png",
        kinf_food: "Humburger",
        price: "5.99$",

    },
    {
        picture: "../../img/french_fries.png",
        kinf_food: "French fries",
        price: "2.99$",

    },
    {
        picture: "../../img/french_fries.png",
        kinf_food: "French fries",
        price: "2.99$",


    },
    {
        picture: "../../img/stink.png",
        kinf_food: "Sting",
        price: "0.5$",


    },
    {
        picture: "../../img/stink.png",
        kinf_food: "Sting",
        price: "0.5$",


    },
    {
        picture: "../../img/coca.png",
        kinf_food: "Cocacola",
        price: "0.99$",


    },
    {
        picture: "../../img/coca.png",
        kinf_food: "Cocacola",
        price: "0.99$",


    },
    {
        picture: "../../img/hot_dog.png",
        kinf_food: "Big hot dog",
        price: "1.99$",


    },
    {
        picture: "../../img/braind_juice.png",
        kinf_food: "Braind Juice",
        price: "3.99$",


    },
    {
        picture: "../../img/green_tea.png",
        kinf_food: "Green tea Juice",
        price: "0.99$",


    }
];

function hide(element) {
    element.style.display = "none";
}

function show(element) {
    element.style.display = "block";
}



function saveFoods() {
    localStorage.setItem("foods", JSON.stringify(foods));
}
// saveFoods();

function loacalFoods() {
    let foodsStorage = JSON.parse(localStorage.getItem("foods"));

    if (foodsStorage !== null) {
        foods = foodsStorage;

    }
}
// loacalFoods();


function renderfood() {

    dom_foods_container = document.querySelector(".choose");
    dom_foods_container.remove();
    dom_foods_container = document.createElement("div");

    dom_foods_container.className = "choose";
    dom_food_view.appendChild(dom_foods_container);
    console.log(dom_foods_container)

    for (let index = 0; index < foods.length; index++) {
        let food = foods[index];

        let card = document.createElement("div");
        card.className = "cards";
        card.dataset.index = index;

        let toDo = document.createElement("div");
        toDo.className = "to_dos";

        let imgFood = document.createElement("img");
        imgFood.src = food.picture;
        imgFood.style.width = "5%";




        let btn = document.createElement("button");
        btn.textContent = "Order"

        let Delete = document.createElement("img");
        Delete.className = "delete";
        Delete.addEventListener("click", removeFood);
        Delete.src = "../../img/delete.png";
        Delete.style.width = "15%";
        // console.log(Delete);

        let Edit = document.createElement("img");
        Edit.className = "edit";
        Edit.addEventListener("click", editFoods);
        Edit.src = "../../img/edit.png";
        Edit.style.width = "15%";

        // console.log(Edit);


        let imStar = document.createElement("img");
        imStar.src = "../../img/star.png";




        let name_food = document.createElement("div");
        name_food.className = "name-foods";

        let nameFood = document.createElement("p");
        nameFood.className = "kind-food";
        nameFood.textContent = food.kinf_food;

        let priceFood = document.createElement("p");
        priceFood.className = "price";
        priceFood.textContent = food.price;

        toDo.appendChild(Edit);
        toDo.appendChild(Delete);




        name_food.appendChild(nameFood);
        name_food.appendChild(priceFood);

        card.appendChild(imgFood);
        card.appendChild(name_food);
        card.appendChild(toDo);
        dom_foods_container.appendChild(card);
    }
}






function editFoods(event) {

    document.querySelector("menu").lastElementChild.textContent = "Edit";
    let index = event.target.parentElement.parentElement.dataset.index;


    let food = foods[index];
    document.querySelector("#textName").value = food.kinf_food;
    document.querySelector("img").value = food.picture;
    document.querySelector("#textPrice").value = food.price;
    console.log(food)

    show(dom_food_dialog);

    foods.splice(index,1);



}

function removeFood(event) {

    let index = event.target.parentElement.parentElement.dataset.index;


    foods.splice(index, 1);


    saveFoods();


    renderfood();
}




function onAddfood() {
    document.querySelector("menu").lastElementChild.textContent = "Create";

    show(dom_food_dialog);
}

function onCancel(e) {

    hide(dom_food_dialog)
}


function onCreate(e) {

    
    let task = {};
    task.kinf_food = dom_food_dialog.querySelector("#textName").value;
    task.price = dom_food_dialog.querySelector("#textPrice").value;
    task.picture = dom_food_dialog.querySelector("#theImag").value;
    hide(dom_food_dialog);



    foods.push(task);

    saveFoods();

    renderfood();

}





renderfood();

// const onClickButton = dom_food_view.querySelector("#btn_Add");
// onClickButton.addEventListener("click", onAddfood);


// const onClickButtonCancel = dom_food_dialog.querySelectorAll("button")[0];
// onClickButtonCancel.addEventListener("click", onCancel);


// const onClickButtonCreate = dom_food_dialog.querySelectorAll("button")[1];
// onClickButtonCreate.addEventListener("click", onCreate);



