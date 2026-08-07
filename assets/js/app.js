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
