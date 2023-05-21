const btn_easy = document.querySelector("#easy");
const content_easy = document.querySelector("#easy-content");
const btn_base = document.querySelector("#base");
const content_base = document.querySelector("#base-content");
const btn_team = document.querySelector("#team");
const content_team = document.querySelector("#team-content");

btn_easy.addEventListener("click", ()=> {
    content_easy.classList.toggle("hidden");
})

btn_base.addEventListener("click", ()=> {
    content_base.classList.toggle("hidden");
})

btn_team.addEventListener("click", ()=> {
    content_team.classList.toggle("hidden");
})
