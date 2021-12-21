//?Exo 1
let h1 = document.querySelector("h1")
h1.addEventListener("click", function () {
    h1.classList.add("text-blue")
})

//?Exo 2
let h3 = h1.nextElementSibling
h3.addEventListener("dblclick", function () {
    h3.classList.add("text-error")
})

//?Exo 3
let p = h3.nextElementSibling
p.addEventListener("click", function () {
    if (p.className != "text-style") {
        p.classList.add("text-style")
        // console.log(p);
    } else if (p.className == "text-style") {
        p.classList.remove("text-style")
        // console.log(p);
    }
})

//?Exo 4
let span = p.nextElementSibling.children
console.log(span);
span = Array.from(span)
console.log(span);
span.forEach(element => {
    console.log(element);
    element.addEventListener("click", function(){
        element.classList.add("bolder")
        console.log(element);
    })
});

//?Exo 5
let span2 = p.nextElementSibling.nextElementSibling.children
span2 = Array.from(span2)
// span2.forEach(element => {
//     element.addEventListener("click", function(){
//         if (element.className != "bolder-red") {
//             element.classList.add("bolder-red")
//             console.log(element);
//         }else if (element.className == "bolder-red") {
//             element.classList.remove("bolder-red")
//             console.log(element);
//         }
//     })
// });

span2.forEach(element => {
    element.addEventListener("click", function(){
        span2.forEach(e => {
            e.classList.remove("bolder-red")
        });
        element.classList.add("bolder-red")
    })
});