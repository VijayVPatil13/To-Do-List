let inputBox = document.querySelector("#input-box");
let addBtn = document.querySelector("#add-btn");
let listContainer = document.querySelector("#list-container");
let msgBox = document.querySelector(".empty-msg-box");
let msg = document.querySelector("#empty-msg");
let msgBtn = document.querySelector("#empty-btn");

addBtn.addEventListener("click", () => {
    if(inputBox.value === '') {
        msg.innerText = "You must write something";
        msgBox.classList.remove("hide");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    inputBox.value = '';
});

listContainer.addEventListener("click" , (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else {
        e.target.parentElement.remove()
        saveData();
    }
});

msgBtn.addEventListener("click", () => {
    msgBox.classList.add("hide");
});


saveData = () => {
    localStorage.setItem("newData", listContainer.innerHTML);
}

getData = () => {
    listContainer.innerHTML = localStorage.getItem("newData");
}

getData();


