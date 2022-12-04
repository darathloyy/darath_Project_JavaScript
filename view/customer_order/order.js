// let inforStorage = JSON.parse(localStorage.getItem("informate"));

let cardStorage = JSON.parse(localStorage.getItem("storecard"));
const cards_dialog = document.querySelector("#foods-dialog");
let total =document.querySelector(".total h3");
console.log(total)

let sum = document.querySelector(".sum");

function hide(element) {
    element.style.display = "none";
}
  
function show(element) {
    element.style.display = "block";
}


function savecard() {
    localStorage.setItem("storecard", JSON.stringify(cardStorage));
}
function loacalCard() {
    let cardGet = JSON.parse(localStorage.getItem("storecard"));
    if (cardGet !== null) {
        cardStorage= cardGet;
        
    }
}

function renderfood() {
    let count =0;
    let countPrice =0;
    
    let choose =document.querySelector(".display");
    
   
    
    

    for (let index = 0; index < cardStorage.length; index++) {
        let cardStorages = cardStorage[index];
        console.log(index)
        let cardOrder = document.createElement("div");
        cardOrder.className="cardOrder";
        
        count+=1;
        let trash = document.createElement("img");
        trash.className="trash";
        trash.style.width="5%";
        trash.style.height="50%";
        trash.src = "../../img/trash.png"
        trash.addEventListener("click",removeMessage)
        let foodImage = document.createElement("img");
        let foodName = document.createElement("div");
        let foodPrice = document.createElement("div");

    
        foodImage.src = cardStorages.picture;
        foodImage.style.width="5%";
        foodName.textContent = "Fast food: " + cardStorages.kinf_food;
        foodPrice.textContent = "Price: " + cardStorages.price;
        countPrice+=parseFloat(cardStorages.price);
        
        total.textContent= "Total: " +String(countPrice) +"$";
        cardOrder.appendChild(foodImage);
        cardOrder.appendChild(foodName);
        cardOrder.appendChild(foodPrice);
        cardOrder.appendChild(trash);

        


        
        choose.appendChild(cardOrder)
        console.log(countPrice)
        
    
        sum.textContent=count;
    }
 
}



function byFood(e) {
    show(cards_dialog)
}


function onCancel(e) {
    hide(cards_dialog)
}




function OrderNow(e) {
    
        
      
        let LOCATION=cards_dialog.querySelector("#loc").value;
        let PHONE=cards_dialog.querySelector("#pho").value;
        let DATE=cards_dialog.querySelector("#date").value;
        
        if ((LOCATION && PHONE && DATE)){
        
            
            hide(cards_dialog);
            
            
        }
    
        
    
        
        // console.log(task.picture);
        
        
    }



function removeMessage(event){
    
    
    
    
    
    if (event.target.className =="trash"){
        event.target.parentElement.remove();
    }
    
    let index = event.target.parentElement.dataset.index;
    // let cardStorages = cardStorage[index];
    // countPrice-=parseFloat(cardStorages.price);
    cardStorage.splice(index, 1);
    savecard(); 
    // renderfood()
    
}



// loacalCard()
renderfood()
