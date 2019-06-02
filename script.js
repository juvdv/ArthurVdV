let menu = document.querySelector(".icon");
let navMenu = document.querySelector("nav");
menu.addEventListener("click", open);
function open() {
  menu.classList.toggle("active")
  navMenu.classList.toggle("onzichtbaar")

}

consoleText(['beeldhouwer', 'kunstenaar'], 'text',['black']);

function consoleText(words, id, colors) {
 if (colors === undefined) colors = ['#fff'];
 let visible = true;
 let con = document.getElementById('console');
 let letterCount = 1;
 let x = 1;
 let waiting = false;
 let target = document.getElementById(id)
 target.setAttribute('style', 'color:' + colors[0])
 window.setInterval(function() {

   if (letterCount === 0 && waiting === false) {
     waiting = true;
     target.innerHTML = words[0].substring(0, letterCount)
     window.setTimeout(function() {
       let usedColor = colors.shift();
       colors.push(usedColor);
       let usedWord = words.shift();
       words.push(usedWord);
       x = 1;
       target.setAttribute('style', 'color:' + colors[0])
       letterCount += x;
       waiting = false;
     }, 100)
   } else if (letterCount === words[0].length + 1 && waiting === false) {
     waiting = true;
     window.setTimeout(function() {
       x = -1;
       letterCount += x;
       waiting = false;
     }, 13000)
   } else if (waiting === false) {
     target.innerHTML = words[0].substring(0, letterCount)
     letterCount += x;
   }
 }, 100)
 window.setInterval(function() {
   if (visible === true) {
     con.className = 'console-underscore hidden'
     visible = false;

   } else {
     con.className = 'console-underscore'

     visible = true;
   }
 }, 800)
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

window.scrollConverter=function(e,t,n){var o,r,l=t.documentElement,i=!1,a=!1,s=!1,c=function(n,o,r){if(!i)return!0;var a,s,c,v,d,u,f,h;return a=0,s=10,d=(l?l.offsetWidth:0)||0,u=t.body.scrollWidth||0,f=l?l.clientWidth:0,h=Math.max(d,u)-f,Math.abs(o.wheelDeltaX)>Math.abs(o.wheelDeltaY)||(o.detail?a=-240*o.detail:o.wheelDelta&&(a=5*o.wheelDelta),c=a/120*s,(v=n.x-c)>=0&&v<=h?(n.x=v,n.setByScript=!0,e.scrollTo(n.x,n.y)):0!==n.x&&n.x!==h&&(n.x=v>h?h:0,n.setByScript=!0,e.scrollTo(n.x,n.y)),"function"==typeof r&&r(n),!1)},v=function(n){var o="scroll"+(n=n.toUpperCase()),r="scroll"+("X"===n?"Left":"Top");return e["page"+n+"Offset"]||e[o]||function(){var e=t.documentElement||t.body.parentNode;return("number"==typeof e[r]?e:t.body)[r]}()},d=function(n,l){o=function(t){t=t||e.event;if(!1===c(n,t,l)){if(!t.preventDefault||!t.stopPropagation)return!1;t.preventDefault(),t.stopPropagation()}},r=function(){n.setByScript||(n.x=v("x"),n.y=v("y")),n.setByScript=!1},e.addEventListener?"onmousewheel"in e?(e.addEventListener("mousewheel",o,!1),e.addEventListener("scroll",r,!1)):(e.addEventListener("DOMMouseScroll",o,!1),e.addEventListener("scroll",r,!1)):(t.attachEvent("onmousewheel",o),e.attachEvent("onscroll",r))},u=function(){(o||r)&&(e.removeEventListener?"onmousewheel"in e?(e.removeEventListener("mousewheel",o,!1),e.removeEventListener("scroll",r,!1)):(e.removeEventListener("DOMMouseScroll",o,!1),e.removeEventListener("scroll",r,!1)):(t.detachEvent("onmousewheel",o),e.detachEvent("onscroll",r)))},f=function(e){return e.preventDefault(),e.stopPropagation(),!1};return{activate:function(t){if(i=!0,!s){d({x:0,y:0},t),s=!0}a&&(e.addEventListener?e.removeEventListener("scroll",f,!0):e.detachEvent("onscroll",f),a=!1)},deactivate:function(){i=!1,s&&(u(),s=!1)},deactivateAllScrolling:function(){i=!1,a=!0,e.addEventListener?e.addEventListener("scroll",f,!0):e.attachEvent("onscroll",f)}}}(window,document);


scrollConverter.activate();
