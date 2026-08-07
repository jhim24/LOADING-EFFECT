/* ==========================================
LOGIN PROTECTION
========================================== */

if(sessionStorage.getItem("birthdayLogin")!=="true"){

    window.location.href="login.html";

}


/* ==========================================================
   HAPPY BIRTHDAY WEBSITE V6
   SCRIPT.JS
   PART 1
========================================================== */

window.addEventListener("DOMContentLoaded",()=>{

startCinematicIntro();

createStars();

createParticles();

createBalloons();

initReveal();

});

/* ==========================================================
   CINEMATIC INTRO
========================================================== */

function startCinematicIntro(){

const cinematic=document.getElementById("cinematicIntro");

if(!cinematic) return;

cinematic.style.display="flex";
cinematic.style.opacity="1";

setTimeout(()=>{

    cinematic.style.opacity="0";
    cinematic.style.pointerEvents="none";

    setTimeout(()=>{

      cinematic.remove();
    },1000);

},5000);

}

/* ==========================================
STARS
========================================== */

function createStars(){

const stars=document.getElementById("stars");

if(!stars) return;

for(let i=0;i<180;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDuration=

(2+Math.random()*4)+"s";

star.style.opacity=Math.random();

stars.appendChild(star);

}

}

/* ==========================================
GOLD PARTICLES
========================================== */

function createParticles(){

const particles=document.getElementById("particles");

if(!particles) return;

for(let i=0;i<60;i++){

const p=document.createElement("div");

p.className="particle";

p.style.left=Math.random()*100+"%";

p.style.top=Math.random()*100+"%";

p.style.animationDuration=

(8+Math.random()*6)+"s";

particles.appendChild(p);

}

}

/* ==========================================
BALLOONS
========================================== */

function createBalloons(){

const balloons=document.getElementById("balloons");

if(!balloons) return;

const colors=[

"#C8102E",

"#FFD700",

"#FFFFFF",

"#E63946"

];

for(let i=0;i<12;i++){

const balloon=document.createElement("div");

balloon.className="balloon";

balloon.style.left=Math.random()*100+"%";

balloon.style.background=

colors[Math.floor(Math.random()*colors.length)];

balloon.style.animationDuration=

(15+Math.random()*8)+"s";

balloon.style.animationDelay=

Math.random()*6+"s";

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
/* ==========================================================
   SCRIPT.JS
   PART 2
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
TYPEWRITER MESSAGE
========================================== */

const message=

`Happy Birthday Ryan Cortez Manebog!

May God bless you with good health,
happiness,
success,
peace,
and many more wonderful birthdays.

Always remember that your family loves you very much.

❤️ Happy Birthday ❤️`;

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

birthdayMessage.innerHTML+=message.charAt(i);

i++;

if(i>=message.length){

clearInterval(timer);

}

},30);

}

/* ==========================================
MUSIC
========================================== */

let musicPlaying=false;

function toggleMusic(){

if(!birthdayMusic) return;

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

const text=

musicPlaying

? "<i class='fa-solid fa-pause'></i> Pause Music"

: "<i class='fa-solid fa-music'></i> Play Music";

if(playMusicBtn){

playMusicBtn.innerHTML=text;

}

if(musicBtn){

musicBtn.innerHTML=text;

}

}

if(playMusicBtn){

playMusicBtn.addEventListener("click",toggleMusic);

}

if(musicBtn){

musicBtn.addEventListener("click",toggleMusic);

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

window.addEventListener("resize",resizeCanvas);

let fireworkParticles=[];

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
/* ==========================================================
   SCRIPT.JS
   PART 3 (FINAL)
========================================================== */

/* ==========================================
CREATE FIREWORK
========================================== */

function createFirework(){

const colors=[
"#C8102E",
"#FFD700",
"#FFFFFF",
"#FF5252",
"#FFA500"
];

const color=colors[Math.floor(Math.random()*colors.length)];

const x=Math.random()*canvas.width;

const y=Math.random()*canvas.height*0.45;

for(let i=0;i<90;i++){

fireworkParticles.push(

new Particle(x,y,color)

);

}

}

/* ==========================================
ANIMATE FIREWORKS
========================================== */

function animateFireworks(){

ctx.clearRect(0,0,canvas.width,canvas.height);

for(let i=fireworkParticles.length-1;i>=0;i--){

fireworkParticles[i].update();

fireworkParticles[i].draw();

if(fireworkParticles[i].life<=0){

fireworkParticles.splice(i,1);

}

}

}

requestAnimationFrame(animateFireworks);

}

animateFireworks();

/* ==========================================
START / STOP FIREWORKS
========================================== */

function startFireworks(){

clearInterval(fireworkTimer);

fireworkTimer=setInterval(createFirework,500);

}

function stopFireworks(){

clearInterval(fireworkTimer);

}

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

let current=0;

/* ==========================================
OPEN GALLERY
========================================== */

if(galleryBtn){

galleryBtn.onclick=()=>{

galleryModal.style.display="flex";

galleryImage.src=gallery[current];

};

}

if(closeGallery){

closeGallery.onclick=()=>{

galleryModal.style.display="none";

};

}

if(nextPhoto){

nextPhoto.onclick=()=>{

current++;

if(current>=gallery.length){

current=0;

}

galleryImage.src=gallery[current];

};

}

if(prevPhoto){

prevPhoto.onclick=()=>{

current--;

if(current<0){

current=gallery.length-1;

}

galleryImage.src=gallery[current];

};

}

/* ==========================================
KEYBOARD
========================================== */

document.addEventListener("keydown",(e)=>{

if(!galleryModal ||

galleryModal.style.display!="flex") return;

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

conf.style.position="fixed";

conf.style.width="10px";

conf.style.height="16px";

conf.style.left=Math.random()*100+"%";

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

heart.style.left=Math.random()*100+"%";

heart.style.bottom="-40px";

heart.style.fontSize=(20+Math.random()*25)+"px";

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

flower.style.fontSize=(18+Math.random()*18)+"px";

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
END
========================================== */

console.log("🎂 Happy Birthday Website V6 Loaded Successfully");
