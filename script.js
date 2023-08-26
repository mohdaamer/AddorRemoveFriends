var istatus = document.querySelector("h2")
var addremovefriend = document.getElementById("btn")
var check = 0

addremovefriend.addEventListener("click", function () {
    if (check == 0) {
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        addremovefriend.innerHTML = "Remove"
        addremovefriend.style.backgroundColor = "#dadada"
        addremovefriend.style.color = "#000"
        check = 1
    }
    else {
        istatus.innerHTML = "Stranger"
        istatus.style.color = "black"
        addremovefriend.innerHTML = "Add Friend"
        addremovefriend.style.backgroundColor = "cornFlowerblue"
        addremovefriend.style.color = "#fff"
        check = 0
    }
})