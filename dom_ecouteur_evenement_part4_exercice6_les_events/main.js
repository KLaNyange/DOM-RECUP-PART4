//*Exo1
let div = document.getElementById("content")

function event(e) {
    console.log(e);
}

div.addEventListener("click", event)

//*Exo2
function event(e) {
    console.log(e.target);
}
div.addEventListener("click", event)


//*Exo3
function event(e) {
    e.target.setAttribute("style", "border: red solid;")
}
div.addEventListener("click", event)






