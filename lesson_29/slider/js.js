const slidesContainer = document.querySelector(".slide-container")
const slide = document.querySelector(".slide")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")

next.addEventListener("click", () =>{
    const slideWidth = slide.clientWidth
    slidesContainer.scrollLeft += slideWidth
})

prev.addEventListener ("click", () =>{
    const slideWidth = slide.clientWidth
    slidesContainer.scrollLeft -= slideWidth
})
