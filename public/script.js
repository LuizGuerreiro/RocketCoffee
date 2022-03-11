const menu = document.querySelector(".menu")
const closeButton = document.querySelector(".close")
const modal = document.querySelector(".modal")

menu.addEventListener("click", function() {
   menu.classList.remove("active")
   closeButton.classList.add("active")
   modal.classList.add("active")
})

closeButton.addEventListener("click", function() {
   modal.classList.remove("active")
   closeButton.classList.remove("active")
   menu.classList.add("active")
})