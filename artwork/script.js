//hovering

let fotos = document.querySelectorAll('img')
let wat = document.querySelector('h1')
let z = 0;
while (z < fotos.length) {
	fotos[z].addEventListener("mouseover",toevoegen);
	z++;
}
function toevoegen() {
console.log("yay");
let tekst = this.getAttribute("data-text")
wat.innerHTML = tekst;

}

let pics = document.querySelectorAll('.tweede')
let what = document.querySelector('.twee')
let e = 0;
while (e < pics.length) {
	pics[e].addEventListener("mouseover",add);
	e++;
}
function add() {
console.log("yay");
let info = this.getAttribute("data-text")
what.innerHTML = info;

}



let menu = document.querySelector(".icon");
let navMenu = document.querySelector("nav");
menu.addEventListener("click", open);
function open() {
  menu.classList.toggle("active")
  navMenu.classList.toggle("onzichtbaar")

}
let mijnKnoppen = document.querySelectorAll(".goto");
let i = 0;
let scrollAantal = 0;
while (i < mijnKnoppen.length) {
      mijnKnoppen[i].addEventListener("click", function(event) {
         window.scroll({
            top: 0,
            left: (window.innerWidth*this.getAttribute("data-factor")),
            behavior: 'smooth'
         });
         event.preventDefault();
}, false);
      i++;
}
//scroll naar beneden om naar rechts te gaan

/*
scrollConverter 1.0.2
https://github.com/koggdal/scroll-converter

Copyright 2011–2017 Johannes Koggdal (http://koggdal.com/)
Developed for BombayWorks (http://bombayworks.com/)

Released under MIT license
*/
