const tubsBtn = document.querySelectorAll(".tab");
const articles = document.querySelectorAll(".content");

tubsBtn.forEach((tab) => {
    tab.addEventListener("click", function () {
        const currentTab = tab
        const id = currentTab.dataset.id
        console.log(id)

        tubsBtn.forEach((btn) => {
            btn.classList.remove("active")
        })

        currentTab.classList.add("active")

        articles.forEach((article) => {
            article.classList.remove("active")
        })
        
        let element = document.getElementById(id)
        element.classList.add("active")
    })
})
