const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === ''){
        alert("Write your task first");
    }
        else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = '<img src="https://i.imgur.com/SXyQiz2.png" alt="X Symbol">';
        li.appendChild(span);
        saveData();
    }
    inputBox.value = "";
}
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN" || e.target.tagName === "IMG"){
        e.target.closest("li").remove();
        saveData();
    }
    }, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}
showTask();




















