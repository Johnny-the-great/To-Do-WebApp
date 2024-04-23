let itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];



console.log(itemsArray)





function displayItems(){
    let items = "";
    for(let i = 0; i < itemsArray.length; i++){
        items += `  <div class="item">
                        <div class="input-controller">
                            <textarea disabled class='mainText'>${itemsArray[i]}</textarea>
                            <div class="edit-controller">
                                <div><i class="fa-solid fa-check deleteBtn" title="done"></i></div>
                                
                                <div><i class="fa-solid fa-pen-to-square editBtn" title="edit"></i></div>
                            </div>
                        </div>
                        <div class="update-controller" style="display:none">
                            <button class="saveBtn">Save</button>
                            <button class="cancelBtn">Cancel</button>
                        </div>
                    </div>`
    }
    document.querySelector(".to-do-list").innerHTML = items
    activateDelete()
    activateEdit()
    activateSave()
    activateCancel()
}


function activateCancel () {
    const cancelBtn = document.querySelectorAll(".cancelBtn")
    const updateController = document.querySelectorAll(".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea")
    cancelBtn.forEach((cB, i) => {
        cB.addEventListener("click", () => {
            updateController[i].style.display = "none";
            inputs[i].disabled = true; 
            location.reload()
        })
    })
}





function activateSave (){
    const saveBtn = document.querySelectorAll(".saveBtn")
    const inputs = document.querySelectorAll(".input-controller textarea")
    saveBtn.forEach((sB, i) => {
        sB.addEventListener("click", () => {
            updateItem(inputs[i].value, i)
        })
    })
}


function updateItem(text, i){
    itemsArray[i] = text;
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload()
}


function activateEdit(){
    const editBtn = document.querySelectorAll(".editBtn")
    const updateController = document.querySelectorAll(".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea")
    editBtn.forEach((eB, i) => {
      eB.addEventListener("click", () => { 
        updateController[i].style.display = "block"
        inputs[i].disabled = false 
        
        
        })
        
        
    })
  }




function activateDelete(){
    let deleteBtn = document.querySelectorAll(".deleteBtn")
    deleteBtn.forEach((dB, i) => {
      dB.addEventListener("click", () => { deleteItem(i) })
    })
}

function deleteItem(i){
    itemsArray.splice(i,1)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    location.reload()
}

document.querySelector("#enter").addEventListener("click", () => {
    const item = document.querySelector("#item")
    createItem(item)

})

function createItem(item) {
    itemsArray.push(item.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload();
}





function displayDate(){
    let date = new Date;
    date = date.toString().split(" ")
    document.querySelector("#date").innerHTML = date[1] + " " + date[2] + " " + date[3]
}


window.onload = function(){
    displayDate()
    displayItems()
}










































