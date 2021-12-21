//?EXO1
let h1 = document.querySelector("h1")

h1.addEventListener("dblclick", function(){
    h1.classList.add("red")
})
//?EXO2
let h3 = h1.nextElementSibling

// h3.addEventListener("mouseover", function(){
//     h3.classList.add("h3")

// })
h3.addEventListener("mouseover", function(){
    h3.innerText = h3.innerText.substr(0, h3.innerText.length-1)
})

//?EXO2
let p = h3.nextElementSibling
console.log(p);

p.addEventListener("click", function(){
    if (p.className != 'blue') {
        p.className = "blue"
    }else if(p.className == 'blue'){
        p.className = "black"
    }
    console.log(p.className);
})
