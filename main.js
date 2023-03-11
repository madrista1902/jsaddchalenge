
  // This code will execute when the page finishes loading
  document.addEventListener("DOMContentLoaded", function() {

    // Select the navbar links
    const navbarLinks = document.querySelectorAll(".navbar ul li a");

     // Loop through each link and add an event listener for when it is clicked
      navbarLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        // Prevent the defafunction showCart() {
        updateCart();
        // show the cart content in a modal or popover
        })

   
  
        // Get the navbar element
        const navbar = document.querySelector('.navbar');

        // Get the offset position of the navbar
          const sticky = navbar.offsetTop;

       // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
     function stickyNavbar() {
      if (window.pageYOffset >= sticky) {
       navbar.classList.add("sticky");
       } else {
      navbar.classList.remove("sticky");
       }}
})})



const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentSlide = 1;
   // product page price
var delt = Array.from(document.querySelectorAll(".fa-trash-alt"));
var carts = Array.from(document.querySelectorAll(".col-4"));
var cartsplus = Array.from(document.querySelectorAll(".fa-plus-circle"));
var cartsmin = Array.from(document.querySelectorAll(".fa-minus-circle"));

for (let count in delt) {
  delt[count].addEventListener("click", function () {
    carts[count].remove();
    totalCarts();
  });
}

for (let count1 in cartsplus) {
  cartsplus[count1].addEventListener("click", function () {
    cartsplus[count1].nextElementSibling.innerHTML++;
    totalCarts();
  });
}

for (let count2 in cartsmin) {
  cartsmin[count2].addEventListener("click", function () {
    if (cartsmin[count2].previousElementSibling.innerHTML > 0) {
      cartsmin[count2].previousElementSibling.innerHTML--;
    } else {
      cartsmin[count2].previousElementSibling.innerHTML = 0;
    }
    totalCarts();
  });
}

function totalCarts() {
  let qte = Array.from(document.querySelectorAll(".qute"));
  let prix = Array.from(document.querySelectorAll(".unitt-price"));
  let sum = 0;
  for (let i = 0; i < prix.length; i++) {
    sum += prix[i].innerHTML * qte[i].innerHTML;
  }
  document.getElementById("cart-btn").innerHTML = sum;
}