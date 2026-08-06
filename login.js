/* ==========================================
   CINEMATIC LOGIN
   PART 1
========================================== */

window.addEventListener("DOMContentLoaded",()=>{

createStars();

createParticles();

createBalloons();

});

/* ==========================================
PASSWORD
========================================== */

const PASSWORD="123";

/* ==========================================
ELEMENTS
========================================== */

const loginBtn=document.getElementById("loginBtn");
const loginPassword=document.getElementById("loginPassword");
const loginMessage=document.getElementById("loginMessage");

const loading=document.getElementById("loadingScreen");
const progress=document.getElementById("progressBar");
const loadingText=document.getElementById("loadingText");

const countdown=document.getElementById("countdownScreen");
const countNumber=document.getElementById("countNumber");
const countMessage=document.getElementById("countMessage");

const gift=document.getElementById("giftScreen");
const giftBox=document.getElementById("giftBox");

/* ==========================================
LOGIN
========================================== */

loginBtn.addEventListener("click",checkPassword);

loginPassword.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

checkPassword();

}

});

function checkPassword(){

    if(loginPassword.value!==PASSWORD){

        loginMessage.style.color="#ff8080";

        loginMessage.innerHTML="❌ Incorrect Password";

        loginPassword.focus();

        return;

    }

    loginMessage.style.color="#7CFC00";

    loginMessage.innerHTML="✅ Password Accepted";

    /* Hide Login Screen */

    const loginOverlay=document.getElementById("loginOverlay");

    loginOverlay.style.opacity="0";

    loginOverlay.style.pointerEvents="none";

    setTimeout(()=>{

        loginOverlay.style.display="none";

        startLoading();

    },600);

}
/* ==========================================
   PART 2
   LOADING → COUNTDOWN
========================================== */

function startLoading(){

loading.style.display="flex";

let percent=0;

const timer=setInterval(()=>{

percent++;

progress.style.width=percent+"%";

if(percent<30){

loadingText.innerHTML="Checking Password...";

}else if(percent<60){

loadingText.innerHTML="Preparing Birthday Surprise...";

}else if(percent<90){

loadingText.innerHTML="Loading Memories...";

}else{

loadingText.innerHTML="Welcome Ryan ❤️";

}

if(percent>=100){

clearInterval(timer);

setTimeout(()=>{

loading.style.display="none";

startCountdown();

},500);

}

},40);

}

/* ==========================================
COUNTDOWN
========================================== */

function startCountdown(){

countdown.style.display="flex";

const numbers=["3","2","1","🎉"];

let index=0;

const timer=setInterval(()=>{

countNumber.innerHTML=numbers[index];

if(index===3){

countMessage.innerHTML="🎂 HAPPY BIRTHDAY RYAN! 🎂";

}

index++;

if(index>=numbers.length){

clearInterval(timer);

setTimeout(()=>{

countdown.style.display="none";

showGift();

},1500);

}

},1000);

}
/* ==========================================
   PART 3
   GIFT → REDIRECT
========================================== */

function showGift(){

gift.style.display="flex";

}

giftBox.addEventListener("click",()=>{

giftBox.innerHTML="🎉";

giftBox.style.transform="scale(1.3)";

setTimeout(()=>{

window.location.href="index.html";

},1800);

});

/* ==========================================
STARS
========================================== */

function createStars(){

const stars=document.getElementById("stars");

if(!stars) return;

for(let i=0;i<180;i++){

const star=document.createElement("div");

star.style.position="absolute";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.width="2px";

star.style.height="2px";

star.style.background="#fff";

star.style.borderRadius="50%";

star.style.opacity=Math.random();

star.style.boxShadow="0 0 10px white";

star.style.animation=`twinkle ${2+Math.random()*4}s infinite`;

stars.appendChild(star);

}

}

/* ==========================================
PARTICLES
========================================== */

function createParticles(){

const particles=document.getElementById("particles");

if(!particles) return;

for(let i=0;i<60;i++){

const p=document.createElement("div");

p.style.position="absolute";

p.style.width="6px";

p.style.height="6px";

p.style.borderRadius="50%";

p.style.background="#FFD700";

p.style.left=Math.random()*100+"%";

p.style.top=Math.random()*100+"%";

p.style.opacity=".35";

p.style.animation=`particleFloat ${8+Math.random()*6}s linear infinite`;

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

for(let i=0;i<10;i++){

const b=document.createElement("div");

b.style.position="absolute";

b.style.width="70px";

b.style.height="90px";

b.style.borderRadius="50%";

b.style.left=Math.random()*100+"%";

b.style.bottom="-150px";

b.style.background=colors[Math.floor(Math.random()*colors.length)];

b.style.opacity=".85";

b.style.animation=`balloonFloat ${15+Math.random()*10}s linear infinite`;

b.style.animationDelay=Math.random()*8+"s";

balloons.appendChild(b);

}

}

console.log("✅ Login Loaded");
