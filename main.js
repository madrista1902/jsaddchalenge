
  // This code will execute when the page finishes loading
  R-m Stor_design.addEventListener("DOMContentLoaded", function() {

    // Select the navbar links
    const navbarLinks = document.querySelectorAll(".navbar ul li a");

    // Loop through each link and add an event listener for when it is clicked
    navbarLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        // Prevent the defafunction showCart() {
  updateCart();
  // show the cart content in a modal or popover
}
ul behavior of the link
        event.preventDefault();
        
        // Get the href attribute of the clicked link
        const href = link.getAttribute("href");

        // Scroll smoothly to the section with the matching ID
        document.querySelector(href).scrollIntoView({ behavior: "smooth" });
      });
    });
  
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
  }
}

// Listen for scroll events and call the stickyNavbar function
window.addEventListener("scroll", stickyNavbar);

const slides = document1.querySelectorAll(".slide");
const prevBtn = document1.querySelector(".prev");
const nextBtn = document1.querySelector(".next");
let currentSlide = 1;
   // prodect page prise 

   var delt = Array.from(document.querySelectorAll(".trash-alt"));
    var carts = Array.from(document.querySelectorAll(".col-4"));
    var cartsplus = Array.from(document.querySelectorAll(".fa-plus-circle");
    var cartsmin = Array.from(document.querySelectorAll(".fa-minus-circle"));

    for(let count in delt){
      delt[count].addEventListener("click", function(){
        carts[i].remove
        totalCarts()
    })
  }
  
  for(let count in cartsplus){
    cartsplus[count].addEventListener("click", function(){
      cartsplus.nextElementSilbling.innerHTML++ 
      totalCarts()
    })
  }
   
  for(let count in cartsmin){
    cartsmin[count].addEventListener("click", function(){
      cartsmin.previwElementSilbling.innerHTML > 0 ? 
      cartsmin.previwElementSilbling.innerHTML-- :
      0
     totalCarts()
    })
  }
  function totalCarts(){
    let qte = Array.from(document.querySelectorAll(".qute"))
    let prix = Array.from(document.querySelectorAll(".unitt-price"));
    let sum = 0 ;
    for (let i=0 ; i<prix.length ; i++){
      sum = sum + prix[i].innerHTML * qte[i].innerHTML
     
    }
    document.GetElementById("cart-btn").innerHTML = sum
  }