/* ==========================================================
   HAPPY BIRTHDAY WEBSITE V6
   SCRIPT.JS
   PART 1
   INITIALIZATION • INTRO • BACKGROUND EFFECTS
========================================================== */

"use strict";

/* ==========================================
   DOM READY
========================================== */

window.addEventListener("DOMContentLoaded", () => {

    initIntro();
    createStars();
    createParticles();
    createBalloons();
    initReveal();

});

/* ==========================================
   INTRO SCREEN
========================================== */

function initIntro(){

    const intro = document.getElementById("intro");

    if(!intro) return;

    setTimeout(()=>{

        intro.style.opacity="0";
        intro.style.visibility="hidden";

    },2500);

}

/* ==========================================
   CREATE STARS
========================================== */

function createStars(){

    const stars=document.getElementById("stars");

    if(!stars) return;

    stars.innerHTML="";

    for(let i=0;i<180;i++){

        const star=document.createElement("div");

        star.className="star";

        star.style.left=Math.random()*100+"%";

        star.style.top=Math.random()*100+"%";

        star.style.opacity=Math.random();

        star.style.animationDuration=
        (2+Math.random()*4)+"s";

        stars.appendChild(star);

    }

}

/* ==========================================
   CREATE PARTICLES
========================================== */

function createParticles(){

    const particles=document.getElementById("particles");

    if(!particles) return;

    particles.innerHTML="";

    for(let i=0;i<60;i++){

        const dot=document.createElement("div");

        dot.className="particle";

        dot.style.left=Math.random()*100+"%";

        dot.style.top=Math.random()*100+"%";

        dot.style.animationDuration=
        (8+Math.random()*6)+"s";

        particles.appendChild(dot);

    }

}

/* ==========================================
   CREATE BALLOONS
========================================== */

function createBalloons(){

    const balloons=document.getElementById("balloons");

    if(!balloons) return;

    balloons.innerHTML="";

    const colors=[
        "#C8102E",
        "#D4AF37",
        "#FFFFFF",
        "#B8860B",
        "#E63946"
    ];

    for(let i=0;i<12;i++){

        const balloon=document.createElement("div");

        balloon.className="balloon";

        balloon.style.left=Math.random()*100+"%";

        balloon.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        balloon.style.animationDuration=
        (15+Math.random()*10)+"s";

        balloon.style.animationDelay=
        (Math.random()*8)+"s";

        balloons.appendChild(balloon);

    }

}

/* ==========================================
   SCROLL REVEAL
========================================== */

function initReveal(){

    const reveals=document.querySelectorAll(".reveal");

    function reveal(){

        reveals.forEach(item=>{

            const top=item.getBoundingClientRect().top;

            if(top<window.innerHeight-120){

                item.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll",reveal);

    reveal();

}

/* ==========================================
   END OF PART 1
========================================== */

console.log("✅ SCRIPT V6 PART 1 LOADED");
/* ==========================================================
   HAPPY BIRTHDAY WEBSITE V6
   SCRIPT.JS
   PART 2
   MODAL • MUSIC • FIREWORKS
========================================================== */

/* ==========================================
   ELEMENTS
========================================== */

const celebrateBtn=document.getElementById("celebrate");
const birthdayModal=document.getElementById("birthdayModal");
const closeModal=document.getElementById("closeModal");

const birthdayMessage=
document.getElementById("birthdayMessage");

const playMusicBtn=
document.getElementById("playMusic");

const musicBtn=
document.getElementById("musicBtn");

const birthdayMusic=
document.getElementById("birthdayMusic");

/* ==========================================
   TYPEWRITER MESSAGE
========================================== */

const birthdayText=

"Happy Birthday Ryan Cortez Manebog! Wishing you happiness, good health, success, peace, and God's abundant blessings. May all your dreams come true. Your family loves you very much. ❤️";

/* ==========================================
   OPEN MODAL
========================================== */

if(celebrateBtn){

celebrateBtn.addEventListener("click",()=>{

birthdayModal.style.display="flex";

startTyping();

startFireworks();

});

}

/* ==========================================
   CLOSE MODAL
========================================== */

if(closeModal){

closeModal.addEventListener("click",()=>{

birthdayModal.style.display="none";

stopFireworks();

});

}

/* ==========================================
   TYPEWRITER EFFECT
========================================== */

function startTyping(){

birthdayMessage.innerHTML="";

let i=0;

const timer=setInterval(()=>{

birthdayMessage.innerHTML+=birthdayText.charAt(i);

i++;

if(i>=birthdayText.length){

clearInterval(timer);

}

},35);

}

/* ==========================================
   MUSIC PLAYER
========================================== */

let musicPlaying=false;

function toggleMusic(){

if(!birthdayMusic)return;

if(musicPlaying){

birthdayMusic.pause();

musicPlaying=false;

}else{

birthdayMusic.play().catch(()=>{});

musicPlaying=true;

}

updateMusicButtons();

}

function updateMusicButtons(){

const html=musicPlaying

?

"<i class='fa-solid fa-pause'></i> Pause Music"

:

"<i class='fa-solid fa-music'></i> Play Music";

if(playMusicBtn) playMusicBtn.innerHTML=html;

if(musicBtn) musicBtn.innerHTML=html;

}

if(playMusicBtn){

playMusicBtn.addEventListener(

"click",

toggleMusic

);

}

if(musicBtn){

musicBtn.addEventListener(

"click",

toggleMusic

);

}

/* ==========================================
   FIREWORKS
========================================== */

const canvas=document.getElementById("fireworksCanvas");

const ctx=canvas.getContext("2d");

function resizeCanvas(){

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

}

resizeCanvas();

window.addEventListener(

"resize",

resizeCanvas

);

let particles=[];

let fireworkTimer;

/* ==========================================
   PARTICLE CLASS
========================================== */

class Particle{

constructor(x,y,color){

this.x=x;

this.y=y;

this.color=color;

this.radius=2+Math.random()*3;

this.dx=(Math.random()-.5)*10;

this.dy=(Math.random()-.5)*10;

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

ctx.arc(

this.x,

this.y,

this.radius,

0,

Math.PI*2

);

ctx.fillStyle=this.color;

ctx.shadowBlur=20;

ctx.shadowColor=this.color;

ctx.fill();

}

}

/* ==========================================
   CREATE FIREWORK
========================================== */

function createFirework(){

const colors=[

"#C8102E",

"#D4AF37",

"#FFD700",

"#FFFFFF",

"#FF5252"

];

const color=

colors[Math.floor(

Math.random()*colors.length

)];

const x=

Math.random()*canvas.width;

const y=

Math.random()*canvas.height*.45;

for(let i=0;i<90;i++){

particles.push(

new Particle(

x,

y,

color

)

);

}

}

/* ==========================================
   FIREWORK ANIMATION
========================================== */

function animateFireworks(){

ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);

for(

let i=particles.length-1;

i>=0;

i--

){

particles[i].update();

particles[i].draw();

if(particles[i].life<=0){

particles.splice(i,1);

}

}

requestAnimationFrame(

animateFireworks

);

}

animateFireworks();

/* ==========================================
   START FIREWORKS
========================================== */

function startFireworks(){

clearInterval(fireworkTimer);

fireworkTimer=

setInterval(

createFirework,

500

);

}

/* ==========================================
   STOP FIREWORKS
========================================== */

function stopFireworks(){

clearInterval(

fireworkTimer

);

}

/* ==========================================
   END PART 2
========================================== */

console.log("✅ SCRIPT V6 PART 2 LOADED");
/* ==========================================================
   HAPPY BIRTHDAY WEBSITE V6
   SCRIPT.JS
   PART 3
   GALLERY • CONFETTI • HEARTS • FLOWERS
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

/* ==========================================
   IMAGES
========================================== */

const gallery=[

"assets/gallery/gallery1.jpg",
"assets/gallery/gallery2.jpg",
"assets/gallery/gallery3.jpg",
"assets/gallery/gallery4.jpg",
"assets/gallery/gallery5.jpg",
"assets/gallery/gallery6.jpg"

];

let currentPhoto=0;

/* ==========================================
   OPEN GALLERY
========================================== */

if(galleryBtn){

galleryBtn.onclick=()=>{

galleryModal.style.display="flex";

galleryImage.src=gallery[currentPhoto];

};

}

/* ==========================================
   CLOSE
========================================== */

if(closeGallery){

closeGallery.onclick=()=>{

galleryModal.style.display="none";

};

}

/* ==========================================
   NEXT
========================================== */

function nextImage(){

currentPhoto++;

if(currentPhoto>=gallery.length){

currentPhoto=0;

}

galleryImage.src=gallery[currentPhoto];

}

/* ==========================================
   PREVIOUS
========================================== */

function previousImage(){

currentPhoto--;

if(currentPhoto<0){

currentPhoto=gallery.length-1;

}

galleryImage.src=gallery[currentPhoto];

}

if(nextPhoto){

nextPhoto.onclick=nextImage;

}

if(prevPhoto){

prevPhoto.onclick=previousImage;

}

/* ==========================================
   KEYBOARD SUPPORT
========================================== */

document.addEventListener("keydown",(e)=>{

if(galleryModal.style.display!=="flex") return;

if(e.key==="ArrowRight") nextImage();

if(e.key==="ArrowLeft") previousImage();

if(e.key==="Escape"){

galleryModal.style.display="none";

}

});

/* ==========================================
   CONFETTI
========================================== */

function launchConfetti(){

for(let i=0;i<180;i++){

const conf=document.createElement("div");

conf.className="confetti";

conf.style.position="fixed";

conf.style.left=Math.random()*100+"%";

conf.style.top="-20px";

conf.style.width="10px";

conf.style.height="16px";

conf.style.background=

`hsl(${Math.random()*360},100%,60%)`;

conf.style.transform=

`rotate(${Math.random()*360}deg)`;

conf.style.pointerEvents="none";

conf.style.zIndex="99999";

conf.style.animation=

`confettiFall ${3+Math.random()*3}s linear forwards`;

document.body.appendChild(conf);

setTimeout(()=>{

conf.remove();

},6000);

}

}

/* ==========================================
   FLOATING HEARTS
========================================== */

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"%";

heart.style.bottom="-40px";

heart.style.fontSize=

(20+Math.random()*25)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="9999";

heart.style.animation=

`heartUp ${5+Math.random()*3}s linear forwards`;

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,1800);

/* ==========================================
   FLOWERS
========================================== */

const flowers=[

"🌸",
"🌺",
"🌼"

];

function createFlower(){

const flower=document.createElement("div");

flower.innerHTML=

flowers[Math.floor(Math.random()*flowers.length)];

flower.style.position="fixed";

flower.style.left=Math.random()*100+"%";

flower.style.top="-40px";

flower.style.fontSize=

(18+Math.random()*18)+"px";

flower.style.pointerEvents="none";

flower.style.zIndex="9999";

flower.style.animation=

`flowerFall ${6+Math.random()*4}s linear forwards`;

document.body.appendChild(flower);

setTimeout(()=>{

flower.remove();

},9000);

}

setInterval(createFlower,2500);

/* ==========================================
   CELEBRATE EFFECT
========================================== */

if(celebrateBtn){

celebrateBtn.addEventListener("click",()=>{

launchConfetti();

});

}

/* ==========================================
   END PART 3
========================================== */

console.log("✅ SCRIPT V6 PART 3 LOADED");
/* ==========================================================
   HAPPY BIRTHDAY WEBSITE V6
   SCRIPT.JS
   PART 4
   GIFT • COUNTDOWN • AUTO EFFECTS
========================================================== */

/* ==========================================
   ELEMENTS
========================================== */

const countdownScreen=
document.getElementById("countdownScreen");

const countNumber=
document.getElementById("countNumber");

const countMessage=
document.getElementById("countMessage");

const giftScreen=
document.getElementById("giftScreen");

const giftBox=
document.getElementById("giftBox");

/* ==========================================
   SHOW COUNTDOWN
========================================== */

function showCountdown(){

if(!countdownScreen) return;

countdownScreen.style.display="flex";

const numbers=["3","2","1","🎉"];

let index=0;

const timer=setInterval(()=>{

countNumber.innerHTML=numbers[index];

if(index===3){

countMessage.innerHTML=
"🎂 HAPPY BIRTHDAY RYAN! 🎂";

}

index++;

if(index>=numbers.length){

clearInterval(timer);

setTimeout(()=>{

countdownScreen.style.display="none";

showGift();

autoCelebrate();

},1800);

}

},1000);

}

/* ==========================================
   SHOW GIFT
========================================== */

function showGift(){

if(!giftScreen) return;

giftScreen.style.display="flex";

}

/* ==========================================
   OPEN GIFT
========================================== */

if(giftBox){

giftBox.onclick=function(){

giftBox.innerHTML="🎉";

giftBox.style.transform="scale(1.4)";

launchConfetti();

startFireworks();

if(birthdayMusic){

birthdayMusic.play().catch(()=>{});

musicPlaying=true;

updateMusicButtons();

}

setTimeout(()=>{

giftScreen.style.display="none";

},2000);

};

}

/* ==========================================
   AUTO CELEBRATION
========================================== */

function autoCelebrate(){

launchConfetti();

startFireworks();

if(birthdayMusic){

birthdayMusic.play().catch(()=>{});

musicPlaying=true;

updateMusicButtons();

}

}

/* ==========================================
   OPTIONAL WELCOME
   (Call this from login.js after loading)
========================================== */

function startBirthdayExperience(){

showCountdown();

}

/* ==========================================
   END PART 4
========================================== */

console.log("✅ SCRIPT V6 PART 4 LOADED");
/* ==========================================================
   HAPPY BIRTHDAY WEBSITE V6
   SCRIPT.JS
   PART 5 (FINAL)
   FINAL INITIALIZATION
========================================================== */

"use strict";

/* ==========================================
   PAGE LOADED
========================================== */

window.addEventListener("load",()=>{

console.log("🎂 Happy Birthday Website V6 Loaded Successfully");

});

/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(!target) return;

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

});

});

/* ==========================================
   IMAGE PRELOADER
========================================== */

window.addEventListener("load",()=>{

const images=document.images;

for(let img of images){

const preload=new Image();

preload.src=img.src;

}

});

/* ==========================================
   MOBILE TOUCH EFFECT
========================================== */

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("touchstart",()=>{

btn.style.transform="scale(.96)";

});

btn.addEventListener("touchend",()=>{

setTimeout(()=>{

btn.style.transform="";

},150);

});

});

/* ==========================================
   PREVENT IMAGE DRAG
========================================== */

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});

/* ==========================================
   DISABLE RIGHT CLICK
   (OPTIONAL)
========================================== */

/*

document.addEventListener("contextmenu",(e)=>{

e.preventDefault();

});

*/

/* ==========================================
   PREVENT DOUBLE TAP ZOOM
========================================== */

let lastTouchEnd=0;

document.addEventListener("touchend",(event)=>{

const now=(new Date()).getTime();

if(now-lastTouchEnd<=300){

event.preventDefault();

}

lastTouchEnd=now;

},{passive:false});

/* ==========================================
   AUTO CLOSE MODAL ON ESC
========================================== */

document.addEventListener("keydown",(e)=>{

if(e.key!=="Escape") return;

if(birthdayModal){

birthdayModal.style.display="none";

}

if(galleryModal){

galleryModal.style.display="none";

}

});

/* ==========================================
   WINDOW RESIZE
========================================== */

window.addEventListener("resize",()=>{

if(typeof resizeCanvas==="function"){

resizeCanvas();

}

});

/* ==========================================
   SAFETY CHECKS
========================================== */

if(typeof startFireworks!=="function"){

console.warn("Fireworks module missing.");

}

if(typeof launchConfetti!=="function"){

console.warn("Confetti module missing.");

}

if(typeof showCountdown!=="function"){

console.warn("Countdown module missing.");

}

/* ==========================================
   GLOBAL HELPERS
========================================== */

function openBirthdayModal(){

if(!birthdayModal) return;

birthdayModal.style.display="flex";

startTyping();

startFireworks();

}

function closeBirthdayModal(){

if(!birthdayModal) return;

birthdayModal.style.display="none";

stopFireworks();

}

/* ==========================================
   PERFORMANCE
========================================== */

window.requestIdleCallback?.(()=>{

console.log("⚡ Idle Optimizations Complete");

});

/* ==========================================
   FINAL MESSAGE
========================================== */

console.log(`
=========================================
 HAPPY BIRTHDAY WEBSITE V6
 Cinematic Edition
 Developed with ❤️
=========================================
`);

console.log("✅ SCRIPT V6 FINAL READY");
