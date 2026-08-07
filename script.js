/* ==========================================================
   HAPPY BIRTHDAY WEBSITE V7
   SCRIPT.JS
   PART 1
========================================================== */

"use strict";

/* ==========================================
LOGIN PROTECTION
========================================== */

if(sessionStorage.getItem("birthdayLogin")!=="true"){

location.replace("login.html");

}

/* ==========================================
DOM READY
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

startCinematicIntro();

initBackground();

initReveal();

});

/* ==========================================
CINEMATIC INTRO
========================================== */

function startCinematicIntro(){

const intro=document.getElementById("cinematicIntro");

if(!intro) return;

document.body.style.overflow="hidden";

intro.style.display="flex";

requestAnimationFrame(()=>{

intro.style.opacity="1";

});

setTimeout(()=>{

intro.style.opacity="0";

intro.style.pointerEvents="none";

setTimeout(()=>{

intro.remove();

document.body.style.overflowX="hidden";

document.body.style.overflowY="auto";

},1200);

},5000);

}

/* ==========================================
BACKGROUND INITIALIZER
========================================== */

function initBackground(){

createStars();

createParticles();

createBalloons();

}

/* ==========================================
SCROLL REVEAL
========================================== */

function initReveal(){

const items=document.querySelectorAll(".reveal");

if(items.length===0) return;

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

observer.unobserve(entry.target);

}

});

},{

threshold:.15

});

items.forEach(item=>{

observer.observe(item);

});

}

/* ==========================================
UTILITY
========================================== */

function random(min,max){

return Math.random()*(max-min)+min;

}

/* ==========================================
END PART 1
========================================== */

console.log("✅ Script V7 Part 1 Loaded");
/* ==========================================================
   HAPPY BIRTHDAY WEBSITE V7
   SCRIPT.JS
   PART 2
========================================================== */

/* ==========================================
STARS
========================================== */

function createStars(){

const container=document.getElementById("stars");

if(!container) return;

container.innerHTML="";

const total=window.innerWidth<768?80:180;

const fragment=document.createDocumentFragment();

for(let i=0;i<total;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=random(0,100)+"%";

star.style.top=random(0,100)+"%";

star.style.opacity=random(.2,1);

star.style.animationDuration=random(2,5)+"s";

star.style.animationDelay=random(0,5)+"s";

fragment.appendChild(star);

}

container.appendChild(fragment);

}

/* ==========================================
GOLD PARTICLES
========================================== */

function createParticles(){

const container=document.getElementById("particles");

if(!container) return;

container.innerHTML="";

const total=window.innerWidth<768?30:60;

const fragment=document.createDocumentFragment();

for(let i=0;i<total;i++){

const particle=document.createElement("div");

particle.className="particle";

particle.style.left=random(0,100)+"%";

particle.style.top=random(20,100)+"%";

particle.style.animationDuration=random(8,15)+"s";

particle.style.animationDelay=random(0,8)+"s";

fragment.appendChild(particle);

}

container.appendChild(fragment);

}

/* ==========================================
BALLOONS
========================================== */

function createBalloons(){

const container=document.getElementById("balloons");

if(!container) return;

container.innerHTML="";

const colors=[

"#C8102E",

"#FFD700",

"#FFFFFF",

"#FF5C77",

"#F7C948"

];

const total=window.innerWidth<768?6:12;

const fragment=document.createDocumentFragment();

for(let i=0;i<total;i++){

const balloon=document.createElement("div");

balloon.className="balloon";

balloon.style.left=random(0,100)+"%";

balloon.style.background=

colors[Math.floor(Math.random()*colors.length)];

balloon.style.animationDuration=

random(15,25)+"s";

balloon.style.animationDelay=

random(0,8)+"s";

fragment.appendChild(balloon);

}

container.appendChild(fragment);

}

/* ==========================================
RESPONSIVE RELOAD
========================================== */

let resizeTimer;

window.addEventListener("resize",()=>{

clearTimeout(resizeTimer);

resizeTimer=setTimeout(()=>{

createStars();

createParticles();

createBalloons();

},300);

});

/* ==========================================
END PART 2
========================================== */

console.log("✨ Script V7 Part 2 Loaded");
/* ==========================================================
   HAPPY BIRTHDAY WEBSITE V7
   SCRIPT.JS
   PART 3
========================================================== */

/* ==========================================
ELEMENTS
========================================== */

const celebrateBtn=document.getElementById("celebrate");

const birthdayModal=document.getElementById("birthdayModal");

const closeModal=document.getElementById("closeModal");

const birthdayMessage=document.getElementById("birthdayMessage");

const playMusicBtn=document.getElementById("playMusic");

const musicBtn=document.getElementById("musicBtn");

const birthdayMusic=document.getElementById("birthdayMusic");

/* ==========================================
MESSAGE
========================================== */

const birthdayText=

`Happy Birthday Ryan Cortez Manebog!

May God continue to bless you with good health, happiness, peace, success, wisdom, and many more birthdays to celebrate.

Thank you for being a wonderful husband, father, son, brother, and friend.

Always remember that your family loves you with all our hearts.

❤️ Happy Birthday ❤️`;

/* ==========================================
TYPEWRITER
========================================== */

let typingTimer=null;

function startTyping(){

if(!birthdayMessage) return;

clearInterval(typingTimer);

birthdayMessage.textContent="";

let index=0;

typingTimer=setInterval(()=>{

birthdayMessage.textContent+=birthdayText.charAt(index);

index++;

if(index>=birthdayText.length){

clearInterval(typingTimer);

}

},25);

}

/* ==========================================
MODAL
========================================== */

function openBirthdayModal(){

if(!birthdayModal) return;

birthdayModal.style.display="flex";

document.body.style.overflow="hidden";

startTyping();

startFireworks();

launchConfetti();

}

function closeBirthdayPopup(){

if(!birthdayModal) return;

birthdayModal.style.display="none";

document.body.style.overflowY="auto";

stopFireworks();

}

/* ==========================================
BUTTON EVENTS
========================================== */

if(celebrateBtn){

celebrateBtn.addEventListener("click",openBirthdayModal);

}

if(closeModal){

closeModal.addEventListener("click",closeBirthdayPopup);

}

/* ==========================================
MUSIC
========================================== */

let musicPlaying=false;

function updateMusicButtons(){

const icon=musicPlaying

? "<i class='fa-solid fa-pause'></i> Pause Music"

: "<i class='fa-solid fa-music'></i> Play Music";

if(playMusicBtn){

playMusicBtn.innerHTML=icon;

}

if(musicBtn){

musicBtn.innerHTML=icon;

}

}

async function toggleMusic(){

if(!birthdayMusic) return;

try{

if(musicPlaying){

birthdayMusic.pause();

musicPlaying=false;

}else{

await birthdayMusic.play();

musicPlaying=true;

}

}catch(error){

console.log("Music blocked by browser.");

}

updateMusicButtons();

}

if(playMusicBtn){

playMusicBtn.addEventListener("click",toggleMusic);

}

if(musicBtn){

musicBtn.addEventListener("click",toggleMusic);

}

/* ==========================================
ESC KEY
========================================== */

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

closeBirthdayPopup();

}

});

/* ==========================================
CLICK OUTSIDE
========================================== */

if(birthdayModal){

birthdayModal.addEventListener("click",(e)=>{

if(e.target===birthdayModal){

closeBirthdayPopup();

}

});

}

/* ==========================================
END PART 3
========================================== */

console.log("🎂 Script V7 Part 3 Loaded");
/* ==========================================================
   HAPPY BIRTHDAY WEBSITE V7
   SCRIPT.JS
   PART 4
========================================================== */

/* ==========================================
FIREWORKS
========================================== */

const canvas=document.getElementById("fireworksCanvas");

const ctx=canvas?canvas.getContext("2d"):null;

let fireworkParticles=[];

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

/* ==========================================
PARTICLE
========================================== */

class FireworkParticle{

constructor(x,y,color){

this.x=x;

this.y=y;

this.color=color;

this.radius=Math.random()*3+2;

this.dx=(Math.random()-0.5)*10;

this.dy=(Math.random()-0.5)*10;

this.life=100;

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

ctx.shadowBlur=15;

ctx.shadowColor=this.color;

ctx.fill();

}

}

/* ==========================================
CREATE FIREWORK
========================================== */

function createFirework(){

if(!ctx) return;

const colors=[

"#FFD700",

"#FFFFFF",

"#C8102E",

"#FF6B6B",

"#FFA500"

];

const color=colors[Math.floor(Math.random()*colors.length)];

const x=Math.random()*canvas.width;

const y=Math.random()*canvas.height*0.45;

const count=window.innerWidth<768?50:90;

for(let i=0;i<count;i++){

fireworkParticles.push(

new FireworkParticle(x,y,color)

);

}

}

/* ==========================================
ANIMATION
========================================== */

function animateFireworks(){

if(!ctx) return;

ctx.clearRect(0,0,canvas.width,canvas.height);

for(let i=fireworkParticles.length-1;i>=0;i--){

const p=fireworkParticles[i];

p.update();

p.draw();

if(p.life<=0){

fireworkParticles.splice(i,1);

}

}

requestAnimationFrame(animateFireworks);

}

if(canvas){

animateFireworks();

}

/* ==========================================
START / STOP
========================================== */

function startFireworks(){

stopFireworks();

createFirework();

fireworkInterval=setInterval(createFirework,700);

}

function stopFireworks(){

clearInterval(fireworkInterval);

fireworkParticles=[];

}

/* ==========================================
CONFETTI
========================================== */

function launchConfetti(){

const total=window.innerWidth<768?80:180;

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
HEARTS
========================================== */

function createHeart(){

const heart=document.createElement("div");

heart.className="floating-heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=

(18+Math.random()*20)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

}

setInterval(createHeart,2200);

/* ==========================================
FLOWERS
========================================== */

const flowers=[

"🌸",

"🌺",

"🌼",

"🌷"

];

function createFlower(){

const flower=document.createElement("div");

flower.className="floating-flower";

flower.innerHTML=

flowers[Math.floor(Math.random()*flowers.length)];

flower.style.left=Math.random()*100+"%";

flower.style.fontSize=

(18+Math.random()*20)+"px";

document.body.appendChild(flower);

setTimeout(()=>{

flower.remove();

},8000);

}

setInterval(createFlower,2800);

/* ==========================================
END PART 4
========================================== */

console.log("🎆 Script V7 Part 4 Loaded");
/* ==========================================================
   HAPPY BIRTHDAY WEBSITE V7
   SCRIPT.JS
   PART 5 (FINAL)
========================================================== */

/* ==========================================
GALLERY
========================================== */

const galleryBtn=document.getElementById("galleryBtn");
const galleryModal=document.getElementById("galleryModal");
const galleryImage=document.getElementById("galleryImage");
const closeGallery=document.getElementById("closeGallery");
const prevPhoto=document.getElementById("prevPhoto");
const nextPhoto=document.getElementById("nextPhoto");

const gallery=[

"assets/gallery/gallery1.jpg",
"assets/gallery/gallery2.jpg",
"assets/gallery/gallery3.jpg",
"assets/gallery/gallery4.jpg",
"assets/gallery/gallery5.jpg",
"assets/gallery/gallery6.jpg",
"assets/gallery/gallery7.jpg",
"assets/gallery/gallery8.jpg",
"assets/gallery/gallery9.jpg"

];

let currentPhoto=0;

/* ==========================================
SHOW IMAGE
========================================== */

function showPhoto(index){

if(!galleryImage) return;

if(index<0){

index=gallery.length-1;

}

if(index>=gallery.length){

index=0;

}

currentPhoto=index;

galleryImage.src=gallery[currentPhoto];

}

/* ==========================================
OPEN GALLERY
========================================== */

if(galleryBtn){

galleryBtn.addEventListener("click",()=>{

galleryModal.style.display="flex";

document.body.style.overflow="hidden";

showPhoto(currentPhoto);

});

}

/* ==========================================
CLOSE
========================================== */

function closeGalleryModal(){

if(!galleryModal) return;

galleryModal.style.display="none";

document.body.style.overflowY="auto";

}

if(closeGallery){

closeGallery.addEventListener("click",closeGalleryModal);

}

/* ==========================================
NEXT / PREVIOUS
========================================== */

if(nextPhoto){

nextPhoto.addEventListener("click",()=>{

showPhoto(currentPhoto+1);

});

}

if(prevPhoto){

prevPhoto.addEventListener("click",()=>{

showPhoto(currentPhoto-1);

});

}

/* ==========================================
KEYBOARD SUPPORT
========================================== */

document.addEventListener("keydown",(e)=>{

if(!galleryModal ||

galleryModal.style.display!=="flex") return;

switch(e.key){

case"ArrowRight":

showPhoto(currentPhoto+1);

break;

case"ArrowLeft":

showPhoto(currentPhoto-1);

break;

case"Escape":

closeGalleryModal();

break;

}

});

/* ==========================================
CLICK OUTSIDE
========================================== */

if(galleryModal){

galleryModal.addEventListener("click",(e)=>{

if(e.target===galleryModal){

closeGalleryModal();

}

});

}

/* ==========================================
MOBILE SWIPE
========================================== */

let touchStartX=0;

let touchEndX=0;

if(galleryModal){

galleryModal.addEventListener("touchstart",(e)=>{

touchStartX=e.changedTouches[0].clientX;

},{passive:true});

galleryModal.addEventListener("touchend",(e)=>{

touchEndX=e.changedTouches[0].clientX;

if(touchStartX-touchEndX>50){

showPhoto(currentPhoto+1);

}

else if(touchEndX-touchStartX>50){

showPhoto(currentPhoto-1);

}

},{passive:true});

}

/* ==========================================
PRELOAD IMAGES
========================================== */

gallery.forEach(src=>{

const img=new Image();

img.src=src;

});

/* ==========================================
PAGE VISIBILITY
========================================== */

document.addEventListener("visibilitychange",()=>{

if(document.hidden){

if(birthdayMusic && !birthdayMusic.paused){

birthdayMusic.pause();

}

stopFireworks();

}

});

/* ==========================================
PERFORMANCE
========================================== */

window.addEventListener("pageshow",()=>{

if(canvas){

resizeCanvas();

}

});

/* ==========================================
FINISHED
========================================== */

console.log("🎉 HAPPY BIRTHDAY WEBSITE V7 LOADED SUCCESSFULLY");
