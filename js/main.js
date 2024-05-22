const tabs = document.querySelectorAll(["data-target"]);
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach(tab => {
    tab.addEventListener("click", ()=>{
        console.log("hsgdjfgjhgdfjgdfjd");
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove("qualification__active")
        })
        target.classList.add("qualification__active")

        tab.forEach(tab =>{
            tab.classList.remove("qualification__active")
        })
        tab.classList.add("qualification__active")
    })

})