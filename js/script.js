let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images =>{
    images.onclick = () =>{
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop : true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
    },
});

window.addEventListener("DOMContentLoaded", function () {
// get the form elements defined in your form HTML above

var form = document.getElementById("my-form");
// var button = document.getElementById("my-form-button");
var status = document.getElementById("status");

// Success and Error functions for after the form is submitted

function success() {
form.reset();
status.classList.add("success");
status.innerHTML = "Thanks for your reservation! We will call you back.";
}

function error() {
status.classList.add("error");
status.innerHTML = "Oops! There was a problem.";
}

// handle the form submission event

form.addEventListener("submit", function (ev) {
ev.preventDefault();
var data = new FormData(form);
ajax(form.method, form.action, data, success, error);
});
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
var xhr = new XMLHttpRequest();
xhr.open(method, url);
xhr.setRequestHeader("Accept", "application/json");
xhr.onreadystatechange = function () {
if (xhr.readyState !== XMLHttpRequest.DONE) return;
if (xhr.status === 200) {
  success(xhr.response, xhr.responseType);
} else {
  error(xhr.status, xhr.response, xhr.responseType);
}
};
xhr.send(data);
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

