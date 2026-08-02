/* ==========================================
   HAPPY BIRTHDAY WEBSITE V3
   PART 1
========================================== */

window.addEventListener("DOMContentLoaded",()=>{

/* ==========================================
INTRO
========================================== */

const intro=document.getElementById("intro");

setTimeout(()=>{

intro.style.opacity="0";

intro.style.visibility="hidden";

},2500);

/* ==========================================
CREATE STARS
========================================== */

const stars=document.getElementById("stars");

for(let i=0;i<180;i++){

const star=document.createElement("div");

star.className="star";

star.style.position="absolute";

star.style.width="3px";

star.style.height="3px";

star.style.borderRadius="50%";

star.style.background="white";

star.style.boxShadow="0 0 15px white";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.opacity=Math.random();

star.style.animation=

`twinkle ${2+Math.random()*4}s infinite`;

stars.appendChild(star);

}

/* ==========================================
PARTICLES
========================================== */

const particles=document.getElementById("particles");

for(let i=0;i<60;i++){

const p=document.createElement("div");

p.className="particle";

p.style.position="absolute";

p.style.width="6px";

p.style.height="6px";

p.style.borderRadius="50%";

p.style.background="#FFD54F";

p.style.left=Math.random()*100+"%";

p.style.top=Math.random()*100+"%";

p.style.opacity=".4";

p.style.animation=

`particleFloat ${8+Math.random()*8}s linear infinite`;

particles.appendChild(p);

}

/* ==========================================
BALLOONS
========================================== */

const balloons=document.getElementById("balloons");

const colors=[

"#ff6b6b",

"#74c0fc",

"#FFD43B",

"#69db7c",

"#d0bfff"

];

for(let i=0;i<12;i++){

const b=document.createElement("div");

b.style.position="absolute";

b.style.bottom="-200px";

b.style.left=Math.random()*100+"%";

b.style.width="70px";

b.style.height="90px";

b.style.borderRadius="50%";

b.style.background=

colors[Math.floor(Math.random()*colors.length)];

b.style.animation=

`floatBalloon ${15+Math.random()*8}s linear infinite`;

b.style.animationDelay=

Math.random()*10+"s";

balloons.appendChild(b);

}

/* ==========================================
SCROLL REVEAL
========================================== */

const reveals=document.querySelectorAll(".reveal");

function reveal(){

reveals.forEach(el=>{

const top=

el.getBoundingClientRect().top;

if(top<window.innerHeight-100){

el.classList.add("active");

}

});

}

window.addEventListener(

"scroll",

reveal

);

reveal();

});
/* ==========================================
   PART 2
   CELEBRATE MODAL
========================================== */

const celebrateBtn = document.getElementById("celebrate");
const modal = document.getElementById("celebrateModal");
const closeModal = document.getElementById("closeModal");
const message = document.getElementById("message");

const birthdayMusic =
document.getElementById("birthdayMusic");

const playMusic =
document.getElementById("playMusic");

const birthdayText =

"May this special day bring you endless happiness, good health, success and God's abundant blessings. Happy Birthday Ryan! We love you very much! ❤️";

/* ==========================================
OPEN MODAL
========================================== */

if(celebrateBtn){

celebrateBtn.addEventListener("click",()=>{

modal.style.display="flex";

launchConfetti();

startFireworks();

typeMessage();

});

}

/* ==========================================
CLOSE MODAL
========================================== */

if(closeModal){

closeModal.addEventListener("click",()=>{

modal.style.display="none";

stopFireworks();

});

}

/* ==========================================
TYPEWRITER
========================================== */

function typeMessage(){

message.innerHTML="";

let i=0;

const timer=setInterval(()=>{

message.innerHTML+=birthdayText.charAt(i);

i++;

if(i>=birthdayText.length){

clearInterval(timer);

}

},35);

}

/* ==========================================
MUSIC
========================================== */

let playing=false;

if(playMusic){

playMusic.addEventListener("click",()=>{

if(!playing){

birthdayMusic.play();

playMusic.innerHTML=

"<i class='fa-solid fa-pause'></i> Pause";

playing=true;

}else{

birthdayMusic.pause();

playMusic.innerHTML=

"<i class='fa-solid fa-music'></i> Music";

playing=false;

}

});

}

/* ==========================================
CONFETTI
========================================== */

function launchConfetti(){

for(let i=0;i<180;i++){

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
FIREWORKS
========================================== */

const canvas=document.getElementById("fireworksCanvas");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});

let particles=[];

let fireworkTimer;

/* Particle */

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

/* Explosion */

function createFirework(){

const colors=[

"#FFD54F",

"#FF6B6B",

"#4DABF7",

"#69DB7C",

"#D0BFFF",

"#FFFFFF"

];

const color=

colors[Math.floor(Math.random()*colors.length)];

const x=Math.random()*canvas.width;

const y=Math.random()*canvas.height*.5;

for(let i=0;i<90;i++){

particles.push(

new Particle(x,y,color)

);

}

}

/* Animation */

function animateFireworks(){

ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);

for(let i=particles.length-1;i>=0;i--){

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

/* START */

function startFireworks(){

clearInterval(fireworkTimer);

fireworkTimer=

setInterval(createFirework,450);

}

/* STOP */

function stopFireworks(){

clearInterval(fireworkTimer);

}
