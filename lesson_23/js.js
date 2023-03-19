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
let u = document.querySelector(".eee1")
let life = 10
let recod = document.querySelector(".iii1")
let q = Math.floor(Math.random() * 100 + 1)  // стартовое значение

function again() {
    life = 10
    u.innerHTML = life
    q = Math.floor(Math.random() * 100 + 1)  // новое число
    document.querySelector(".ooo").innerHTML = "?" 
    
    console.log(q)
}

function uuu() {
    let w = document.querySelector(".bbb").value
    
    if (w == q){
        document.querySelector(".more_less").innerHTML = "тоже" 
        document.querySelector(".ooo").innerHTML = q
        check_record()
    } else if (w < q) {
        document.querySelector(".more_less").innerHTML = "больше" 
        life--
        u.innerHTML = life
        console.log(`not`)
        game_over()
    } else {
        document.querySelector(".more_less").innerHTML = "меньше" 
        life--
        u.innerHTML = life
        console.log(`not`)
        game_over()
    }
}
again()


function game_over(){
    if(life <= 0){

        alert("Конец")
    }
}
game_over()

function check_record() {
    if (recod.innerHTML == "-"){
        recod.innerHTML = 10 - life
    }else {
        if (recod.innerHTML > 10 - life) {
            recod.innerHTML = 10 - life
        }
    }
}

