let burger = document.querySelector(".header__burger")

burger.addEventListener("click", function(){
    document.querySelector(".header__burger_list").classList.toggle("header__burger_list_active")
    document.querySelector(".header__burger").classList.toggle("header__burger_active")
    document.querySelector("body").classList.toggle("lock")
})


window.addEventListener("scroll", function(){
    if (scrollY >= 300) {
        document.querySelector(".arrow").classList.add("arrow_active")
    } else {
        document.querySelector(".arrow_active").classList.remove("arrow_active")
    }
    
})

let arrow = document.querySelector(".arrow")

arrow.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})