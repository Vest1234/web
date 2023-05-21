
const btn_first = document.querySelector("#first");
const content_first = document.querySelector("#first-content");
const btn_second = document.querySelector("#second");
const content_second= document.querySelector("#second-content");
const btn_pravila = document.querySelector("#pravila");
const content_pravila= document.querySelector("#pravila-content");
const btn_today = document.querySelector("#today");
const content_today= document.querySelector("#today-content");

btn_first.addEventListener("click", ()=> {
    content_first.classList.toggle("hidden");
})

btn_second.addEventListener("click", ()=> {
    content_second.classList.toggle("hidden");
})

btn_pravila.addEventListener("click", ()=> {
    content_pravila.classList.toggle("hidden");
})

btn_today.addEventListener("click", ()=> {
    content_today.classList.toggle("hidden");
})