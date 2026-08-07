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
/* ==========================================================
   BIRTHDAY WEBSITE V8
   APP.JS
   PART 3
========================================================== */

/* ==========================================
FIREWORKS
========================================== */

const canvas=document.getElementById("fireworksCanvas");

const ctx=canvas?canvas.getContext("2d"):null;

let fireworks=[];

let fireworkInterval=null;

function resizeCanvas(){

if(!canvas) return;

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

}

if(canvas){

resizeCanvas();

window.addEventListener("resize",resizeCanvas);

}

class Firework{

constructor(x,y,color){

this.x=x;

this.y=y;

this.color=color;

this.life=100;

this.radius=Math.random()*3+2;

this.dx=(Math.random()-.5)*10;

this.dy=(Math.random()-.5)*10;

}

update(){

this.x+=this.dx;

this.y+=this.dy;

this.dy+=0.05;

this.life--;

}

draw(){

ctx.beginPath();

ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);

ctx.fillStyle=this.color;

ctx.shadowBlur=18;

ctx.shadowColor=this.color;

ctx.fill();

}

}

function createFirework(){

if(!ctx) return;

const colors=[

"#FFD700",

"#FFFFFF",

"#C8102E",

"#FFA500"

];

const color=

colors[Math.floor(Math.random()*colors.length)];

const x=Math.random()*canvas.width;

const y=Math.random()*canvas.height*.45;

const total=window.innerWidth<768?45:90;

for(let i=0;i<total;i++){

fireworks.push(

new Firework(x,y,color)

);

}

}

function animateFireworks(){

if(!ctx) return;

ctx.clearRect(0,0,canvas.width,canvas.height);

for(let i=fireworks.length-1;i>=0;i--){

fireworks[i].update();

fireworks[i].draw();

if(fireworks[i].life<=0){

fireworks.splice(i,1);

}

}

requestAnimationFrame(animateFireworks);

}

if(canvas){

animateFireworks();

}

function startFireworks(){

stopFireworks();

createFirework();

fireworkInterval=

setInterval(createFirework,700);

}

function stopFireworks(){

clearInterval(fireworkInterval);

fireworks=[];

}

/* ==========================================
CELEBRATE BUTTON
========================================== */

if(celebrateBtn){

celebrateBtn.addEventListener("click",()=>{

startFireworks();

launchConfetti();

setTimeout(stopFireworks,7000);

});

}

/* ==========================================
CONFETTI
========================================== */

function launchConfetti(){

const total=

window.innerWidth<768?70:160;

for(let i=0;i<total;i++){

const conf=document.createElement("div");

conf.className="confetti";

conf.style.left=Math.random()*100+"%";

conf.style.background=

`hsl(${Math.random()*360},100%,60%)`;

conf.style.animationDuration=

(3+Math.random()*3)+"s";

document.body.appendChild(conf);

setTimeout(()=>{

conf.remove();

},6000);

}

}

/* ==========================================
MUSIC
========================================== */

const music=

document.getElementById("birthdayMusic");

let playing=false;

if(musicBtn && music){

musicBtn.addEventListener("click",async()=>{

try{

if(!playing){

await music.play();

playing=true;

musicBtn.innerHTML="⏸ Pause";

}else{

music.pause();

playing=false;

musicBtn.innerHTML="🎵 Music";

}

}catch(e){

console.log(e);

}

});

}

/* ==========================================
END PART 3
========================================== */

console.log("🎆 APP.JS PART 3 READY");
/* ==========================================================
   APP.JS
   PART 4
   BIRTHDAY MODAL
========================================================== */

const birthdayModal=document.getElementById("birthdayModal");
const closeModal=document.getElementById("closeModal");
const playMusic=document.getElementById("playMusic");
const birthdayMusic=document.getElementById("birthdayMusic");

let musicPlaying=false;

/* ==========================================
OPEN MODAL
========================================== */

if(celebrateBtn){

celebrateBtn.addEventListener("click",()=>{

birthdayModal.style.display="flex";

document.body.style.overflow="hidden";

startFireworks();

launchConfetti();

});

}

/* ==========================================
CLOSE MODAL
========================================== */

function closeBirthdayModal(){

birthdayModal.style.display="none";

document.body.style.overflowY="auto";

stopFireworks();

}

if(closeModal){

closeModal.addEventListener("click",closeBirthdayModal);

}

/* ==========================================
CLICK OUTSIDE
========================================== */

birthdayModal.addEventListener("click",(e)=>{

if(e.target===birthdayModal){

closeBirthdayModal();

}

});

/* ==========================================
MUSIC
========================================== */

function toggleBirthdayMusic(){

if(!birthdayMusic) return;

if(!musicPlaying){

birthdayMusic.play();

musicPlaying=true;

playMusic.innerHTML="⏸ Pause Music";

musicBtn.innerHTML="⏸ Music";

}else{

birthdayMusic.pause();

musicPlaying=false;

playMusic.innerHTML="🎵 Play Music";

musicBtn.innerHTML="🎵 Music";

}

}

if(playMusic){

playMusic.addEventListener("click",toggleBirthdayMusic);

}

if(musicBtn){

musicBtn.addEventListener("click",toggleBirthdayMusic);

}

/* ==========================================
ESC KEY
========================================== */

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

closeBirthdayModal();

}

});

console.log("🎂 Birthday Modal Ready");
