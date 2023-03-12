// console.log(Math.ceil(5.00001)) //Вверх
// console.log(Math.floor(5.99)) //Вниз
// console.log(Math.random(5.6)) //Математическое
// console.log(Math.trunc(5.0064001)) //Убрать дробн. часть / можно использовать floor
// console.log(5.405.toFixed(2)) // Округление после точки / в скобках сколько чисел после запитой округлять

// let x = Math.trunc(Math.random() * 6) +1;
// console.log(x)

// let red = document.querySelector(".red")
// red.innerHTML ="Прив"
// let inp =document.querySelector("cc")
// inp.value = "Москва"
// function myFunction() {
//     document.querySelector(".myText").value = "Johnny";
// }
let q = Math.floor(Math.random() * 100 + 1)
function again() {
    let q = Math.floor(Math.random() * 100 + 1)

    console.log(q)

}

function uuu() {
    let w = document.querySelector(".bbb").value
    if (q == w) {
        console.log(`ok`)
    } else {
        console.log(`not`)
    }
}
again()

