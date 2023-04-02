const eshowModal = document.querySelectorAll(".open_button");
const close = document.querySelector(".getit");
const modal = document.querySelector(".modal");

const closeModal = () => {
    // закрытие окна (hidden)
    modal.classList.add("hidden")
}

eshowModal.forEach ((e) => {
    e.addEventListener("click", function() {
        modal.classList.remove("hidden")
    })
})

close.addEventListener("click", closeModal)

document.addEventListener("keydown", function(e) {
    if(e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal()
    }
})
