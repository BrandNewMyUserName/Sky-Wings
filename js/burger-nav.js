// const manageBurger = document.getElementById('manage-burger');

// manageBurger.addEventListener("click", function () {
//     const menu = document.getElementById("nav-burger");
//     const img_burger = manageBurger.querySelector("img");
//     if (menu.style.display === "none") {
//       menu.style.display = "flex";
//       img_burger.src = "./img/header/close.png"; 

//     } else {
//       menu.style.display = "none";
//       img_burger.src = "./img/header/open.png";
//     }
//   });
  


const manageBurger = document.getElementById('manage-burger');

manageBurger.addEventListener("click", function () {
    const menu = document.getElementById("nav-burger");
    const img_burger = manageBurger.querySelector("img");
    if (menu.style.display === "none") {
        menu.style.display = "flex";
        img_burger.src = "./img/header/close.png"; 
    } else {
        menu.style.display = "none";
        img_burger.src = "./img/header/open.png";
    }
});

// Додаємо обробник події resize для закриття меню при ширині > 1200px
window.addEventListener("resize", function () {
    const menu = document.getElementById("nav-burger");
    const img_burger = manageBurger.querySelector("img");
    if (window.innerWidth > 1200) {
        menu.style.display = "none"; // Примусово закриваємо меню
        img_burger.src = "./img/header/open.png"; // Міняємо іконку на "open"
    }
});