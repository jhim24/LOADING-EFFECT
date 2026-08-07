/* ==========================================================
   BIRTHDAY WEBSITE V8
   APP.JS
   PART 1
========================================================== */

"use strict";

/* ==========================================
LOGIN PROTECTION
========================================== */

if(sessionStorage.getItem("birthdayLogin")!=="true"){

window.location.replace("login.html");

}

/* ==========================================
ELEMENTS
========================================== */

const menuBtn=document.getElementById("menuBtn");

const mobileMenu=document.getElementById("mobileMenu");

const celebrateBtn=document.getElementById("celebrate");

const galleryBtn=document.getElementById("galleryBtn");

const musicBtn=document.getElementById("musicBtn");

/* ==========================================
START
========================================== */

window.addEventListener("DOMContentLoaded",()=>{

initMenu();

createStars();

createParticles();

initReveal();

console.log("🎂 Birthday Website V8 Loaded");

});

/* ==========================================
MENU
========================================== */

function initMenu(){

if(!menuBtn || !mobileMenu) return;

menuBtn.addEventListener("click",()=>{

mobileMenu.classList.toggle("show");

});

document.querySelectorAll("#mobileMenu a").forEach(link=>{

link.addEventListener("click",()=>{

mobileMenu.classList.remove("show");

});

});

}

/* ==========================================
SCROLL REVEAL
========================================== */

function initReveal(){

const items=document.querySelectorAll(".reveal");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{

threshold:.15

});

items.forEach(item=>observer.observe(item));

}
/* ==========================================================
   APP.JS
   PART 2
========================================================== */

/* ==========================================
STARS
========================================== */

function createStars(){

const container=document.getElementById("stars");

if(!container) return;

const total=window.innerWidth<768?80:180;

for(let i=0;i<total;i++){

const star=document.createElement("span");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDuration=

(2+Math.random()*5)+"s";

star.style.opacity=Math.random();

container.appendChild(star);

}

}

/* ==========================================
GOLD PARTICLES
========================================== */

function createParticles(){

const container=document.getElementById("particles");

if(!container) return;

const total=window.innerWidth<768?25:60;

for(let i=0;i<total;i++){

const particle=document.createElement("span");

particle.className="gold-particle";

particle.style.left=Math.random()*100+"%";

particle.style.top=Math.random()*100+"%";

particle.style.animationDuration=

(8+Math.random()*6)+"s";

particle.style.animationDelay=

Math.random()*5+"s";

container.appendChild(particle);

}

}

console.log("✨ Background Effects Ready");
