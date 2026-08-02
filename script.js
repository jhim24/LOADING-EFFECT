/* ==================================================
   HAPPY BIRTHDAY WEBSITE V4
   SCRIPT.JS
   PART 1
================================================== */

window.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       INTRO
    ========================================== */

    const intro = document.getElementById("intro");

    if (intro) {

        setTimeout(() => {

            intro.style.opacity = "0";
            intro.style.visibility = "hidden";

        }, 2500);

    }

    /* ==========================================
       CREATE STARS
    ========================================== */

    const stars = document.getElementById("stars");

    if (stars) {

        for (let i = 0; i < 180; i++) {

            const star = document.createElement("div");

            star.className = "star";

            star.style.position = "absolute";

            star.style.left = Math.random() * 100 + "%";

            star.style.top = Math.random() * 100 + "%";

            star.style.width = "3px";

            star.style.height = "3px";

            star.style.borderRadius = "50%";

            star.style.background = "#ffffff";

            star.style.boxShadow = "0 0 10px white";

            star.style.opacity = Math.random();

            star.style.animation =
                `twinkle ${2 + Math.random() * 4}s infinite`;

            stars.appendChild(star);

        }

    }

    /* ==========================================
       GOLD PARTICLES
    ========================================== */

    const particles = document.getElementById("particles");

    if (particles) {

        for (let i = 0; i < 60; i++) {

            const dot = document.createElement("div");

            dot.style.position = "absolute";

            dot.style.width = "6px";

            dot.style.height = "6px";

            dot.style.borderRadius = "50%";

            dot.style.background = "#D4AF37";

            dot.style.opacity = ".35";

            dot.style.left = Math.random() * 100 + "%";

            dot.style.top = Math.random() * 100 + "%";

            dot.style.animation =
                `particleFloat ${8 + Math.random() * 6}s linear infinite`;

            particles.appendChild(dot);

        }

    }

    /* ==========================================
       FLOATING BALLOONS
    ========================================== */

    const balloons = document.getElementById("balloons");

    if (balloons) {

        const colors = [

            "#C8102E",

            "#D4AF37",

            "#FFFFFF",

            "#B8860B",

            "#E63946"

        ];

        for (let i = 0; i < 12; i++) {

            const balloon = document.createElement("div");

            balloon.style.position = "absolute";

            balloon.style.width = "70px";

            balloon.style.height = "90px";

            balloon.style.borderRadius = "50%";

            balloon.style.left =
                Math.random() * 100 + "%";

            balloon.style.bottom = "-150px";

            balloon.style.background =
                colors[Math.floor(Math.random() * colors.length)];

            balloon.style.opacity = ".85";

            balloon.style.animation =
                `float ${15 + Math.random() * 10}s linear infinite`;

            balloon.style.animationDelay =
                Math.random() * 8 + "s";

            balloons.appendChild(balloon);

        }

    }

    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const reveals =
        document.querySelectorAll(".reveal");

    function reveal() {

        reveals.forEach(item => {

            const top =
                item.getBoundingClientRect().top;

            if (top < window.innerHeight - 120) {

                item.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", reveal);

    reveal();

});
/* ==================================================
   HAPPY BIRTHDAY WEBSITE V4
   SCRIPT.JS
   PART 2
================================================== */

/* ==========================================
   ELEMENTS
========================================== */

const celebrateBtn = document.getElementById("celebrate");
const birthdayModal = document.getElementById("birthdayModal");
const closeModal = document.getElementById("closeModal");

const birthdayMessage =
document.getElementById("birthdayMessage");

const playMusicBtn =
document.getElementById("playMusic");

const musicBtn =
document.getElementById("musicBtn");

const birthdayMusic =
document.getElementById("birthdayMusic");

/* ==========================================
TYPEWRITER MESSAGE
========================================== */

const message =

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
TYPEWRITER
========================================== */

function startTyping(){

birthdayMessage.innerHTML="";

let i=0;

const timer=setInterval(()=>{

birthdayMessage.innerHTML+=

message.charAt(i);

i++;

if(i>=message.length){

clearInterval(timer);

}

},35);

}

/* ==========================================
MUSIC
========================================== */

let musicPlaying=false;

function toggleMusic(){

if(!birthdayMusic)return;

if(!musicPlaying){

birthdayMusic.play();

musicPlaying=true;

}else{

birthdayMusic.pause();

musicPlaying=false;

}

updateMusicButton();

}

function updateMusicButton(){

const html=musicPlaying

? "<i class='fa-solid fa-pause'></i> Pause Music"

: "<i class='fa-solid fa-music'></i> Play Music";

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

const canvas=

document.getElementById("fireworksCanvas");

const ctx=

canvas.getContext("2d");

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
PARTICLE
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
ANIMATE
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

if(

particles[i].life<=0

){

particles.splice(i,1);

}

}

requestAnimationFrame(

animateFireworks

);

}

animateFireworks();

/* ==========================================
START
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
STOP
========================================== */

function stopFireworks(){

clearInterval(

fireworkTimer

);

}
/* ==================================================
   HAPPY BIRTHDAY WEBSITE V4
   SCRIPT.JS
   PART 3 (FINAL)
================================================== */

/* ==========================================
   GALLERY
========================================== */

const galleryBtn = document.getElementById("galleryBtn");
const galleryModal = document.getElementById("galleryModal");
const galleryImage = document.getElementById("galleryImage");

const closeGallery = document.getElementById("closeGallery");

const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");

/* ==========================================
   IMAGES
========================================== */

const gallery = [

"assets/images/gallery1.jpg",

"assets/images/gallery2.jpg",

"assets/images/gallery3.jpg",

"assets/images/gallery4.jpg",

"assets/images/gallery5.jpg",

"assets/images/gallery6.jpg"

];

let current = 0;

/* ==========================================
OPEN
========================================== */

if(galleryBtn){

galleryBtn.addEventListener("click",()=>{

galleryModal.style.display="flex";

galleryImage.src=gallery[current];

});

}

/* ==========================================
CLOSE
========================================== */

if(closeGallery){

closeGallery.addEventListener("click",()=>{

galleryModal.style.display="none";

});

}

/* ==========================================
NEXT
========================================== */

if(nextPhoto){

nextPhoto.addEventListener("click",()=>{

current++;

if(current>=gallery.length){

current=0;

}

galleryImage.src=

gallery[current];

});

}

/* ==========================================
PREVIOUS
========================================== */

if(prevPhoto){

prevPhoto.addEventListener("click",()=>{

current--;

if(current<0){

current=

gallery.length-1;

}

galleryImage.src=

gallery[current];

});

}

/* ==========================================
KEYBOARD
========================================== */

document.addEventListener("keydown",(e)=>{

if(galleryModal.style.display!="flex") return;

if(e.key==="ArrowRight"){

nextPhoto.click();

}

if(e.key==="ArrowLeft"){

prevPhoto.click();

}

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

conf.style.width="10px";

conf.style.height="15px";

conf.style.left=

Math.random()*100+"%";

conf.style.top="-20px";

conf.style.background=

`hsl(${Math.random()*360},100%,60%)`;

conf.style.pointerEvents="none";

conf.style.zIndex="99999";

conf.style.transform=

`rotate(${Math.random()*360}deg)`;

conf.style.animation=

`confettiFall ${3+Math.random()*3}s linear forwards`;

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

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=

Math.random()*100+"%";

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

flower.style.left=

Math.random()*100+"%";

flower.style.top="-40px";

flower.style.fontSize=

(18+Math.random()*18)+"px";

flower.style.pointerEvents="none";

flower.style.animation=

`flowerFall ${6+Math.random()*4}s linear forwards`;

document.body.appendChild(flower);

setTimeout(()=>{

flower.remove();

},9000);

}

setInterval(createFlower,2500);

/* ==========================================
MODAL EFFECT
========================================== */

if(celebrateBtn){

celebrateBtn.addEventListener("click",()=>{

launchConfetti();

});

}

/* ==========================================
END
========================================== */

console.log(

"🎂 Happy Birthday Website V4 Loaded Successfully"

);
