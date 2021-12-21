//*EXO 1
let div1 = document.querySelectorAll(".box-body")[0]
let input = div1.getElementsByTagName("input")[0]

input.addEventListener("focus", function(){
    input.style.backgroundColor = "blue"
})

//*EXO 2
let div2 = document.querySelectorAll(".box-body")[1]
let secondInput = div2.getElementsByTagName("input")[0]

secondInput.addEventListener("focus", function(){
    secondInput.style.backgroundColor = "blue"
})
secondInput.addEventListener("focusout", function(){
    secondInput.style.backgroundColor = ""
})

//*EXO 3
let div3 = document.querySelectorAll(".box-body")[2]
let p1 = div3.getElementsByClassName("premierParagraphe")[0]
let p2 = div3.getElementsByClassName("secondParagraphe")[0]
let p3 = div3.getElementsByClassName("dernierParagraphe")[0]
let btn = div3.getElementsByClassName("buttonExo")[0]
btn.addEventListener("click", function(){
    p1.innerText = p2.innerText
    p3.innerText = p2.innerText
})

//*EXO 4
let div4 = document.querySelectorAll(".box-body")[3]
let inputPrenom = div4.querySelector("input")
let prenom = div4.querySelector("#exo4")
let btnPrenon = div4.querySelector(".buttonExo")
btnPrenon.addEventListener("click", function(){
    prenom.innerText = inputPrenom.value
})

//*EXO 5
let div5 = document.querySelectorAll(".box-body")[4]
let pImage = div5.querySelector("p")
let img = div5.querySelector("img")
let btnImage = div5.querySelector("button")

btnImage.addEventListener("click", function(){
    //c'est mieux de ne pas utiliser slice parce que sinin ce n'est pas dynamique
    // img.src = pImage.innerText.slice(9)
    img.src = pImage.innerText.replace("Chemin : ", "")
    pImage.innerText = " "
})

//*EXO 6
let div6 = document.querySelectorAll(".box-body")[5]
let imgTartine = div6.querySelector("img")
let imgPhoto = imgTartine.nextElementSibling
let vol;
imgTartine.addEventListener("click", function(){
    vol = imgTartine.src
})
imgPhoto.addEventListener("click", function(){
    imgPhoto.src = vol
})

//*EXO 7
let div7 = document.querySelectorAll(".box-body")[6]
let pTxt1 = div7.querySelector("p")
let btnTxt = div7.querySelector("button")
let pTxt2 = div7.lastElementChild
let txt1bis;
btnTxt.addEventListener("click", function(){
    txt1bis = pTxt1.innerText
    pTxt1.innerText = pTxt2.innerText
    pTxt2.innerText = txt1bis
})








