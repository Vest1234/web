const saaBtn = document.querySelectorAll(".saa");
const numberBtn = document.querySelectorAll(".saa").length;

document.addEventListener("keydown", function(event){
    makeSound(event.key)
})

const makeSound = (key) => {
    switch(key) {
        case "a" :
            const bababooey = new Audio("sounds/bababooey-sound-effect.mp3");
            bababooey.play();
            break;
        case "s" :
            const bru = new Audio("sounds/brue.mp3");
                bru.play();
             break;
    }
}

for (let i = 0; i < numberBtn; i++) {
    //Нажатие кнопки
    saaBtn[i].addEventListener("click", function() {})
    //Получаем букву
    const btnInnerHtml = saaBtn[i].innerHTML;
    makeSound(btnInnerHtml);
    console.log("Кнопка:", btnInnerHtml)
}

