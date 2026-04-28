const hamburger = document.querySelector(".hamburger");
const nav_link = document.querySelector(".nav-links");
const cross = document.querySelector('.cross');

hamburger.addEventListener("click" , ()=>{
      nav_link.classList.add("open");
      cross.classList.add("show");
      hamburger.classList.add("hide");
})

cross.addEventListener("click" , ()=>{
      nav_link.classList.remove("open");
      cross.classList.remove("show");
      hamburger.classList.remove("hide");
})