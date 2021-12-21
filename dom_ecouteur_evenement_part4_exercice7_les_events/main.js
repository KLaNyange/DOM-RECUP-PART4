//*EXO1
let div = document.getElementById("content")
let h1 = div.firstElementChild
let h2 = h1.nextElementSibling
let p = div.lastElementChild
// function cactus() {
//     div.setAttribute("style", "border: solid black;")
//     p.setAttribute("style", "color: red;")
//     h1.setAttribute("style", "text-decoration: underline;")
//     h2.innerText = h2.innerText.substr(0, h2.innerText.length-1)
// }

function cactus(e) {
    switch (e.target.tagName) {
        case "DIV":
            div.setAttribute("style", "border: dotted purple;")
            break;
        case "P":
            if (p.style != "color: red;") {
                p.setAttribute("style", "color: red;")
            } else {
                p.style.color = "black"
            }
            console.log(p);
            break;
        case "H1":
            h1.setAttribute("style", "background-color: orange; width: 200px; text-align: center;")
            break;
        case "H2":
            h2.innerText = h2.innerText.substr(0, h2.innerText.length - 1)
            break;
    }
}
div.addEventListener("click", cactus)

//*EXO2
let phrase = "Il est possible de passer des paramètres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"
let section = div.nextElementSibling
section.setAttribute("style", "height: 50px; background-color: blue;")
let p2 = section.firstElementChild
// p2.innerText = "Passez sur moi"

function hover(e) {
    if (e.target.tagName == "SECTION") {
        p2.innerText = phrase
        p2.setAttribute("style", "color: white; text-align: center; font-size: 23px; padding-top: 10px;")
        section.style.background = "orange"
    }
}

function notHover(e) {
    if (e.target.tagName == "SECTION") {
        p2.innerText = " "
        section.style.background = "blue"
    }
}

section.addEventListener("mouseover", hover)
section.addEventListener("mouseout", notHover)