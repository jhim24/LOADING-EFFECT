/* ==========================================================
   LOGIN.JS V7 PREMIUM
   PART 1
========================================================== */

/* ==========================================
WAIT UNTIL PAGE IS READY
========================================== */

window.addEventListener("DOMContentLoaded",()=>{

createStars();

createParticles();

createBalloons();

startIntro();

});

/* ==========================================
PASSWORD
========================================== */

const PASSWORD="123";

/* ==========================================
ELEMENTS
========================================== */

const loginWrapper=document.querySelector(".login-wrapper");

const loginBtn=document.getElementById("loginBtn");

const loginPassword=document.getElementById("loginPassword");

const loginMessage=document.getElementById("loginMessage");

const loadingScreen=document.getElementById("loadingScreen");

const countdownScreen=document.getElementById("countdownScreen");

const giftScreen=document.getElementById("giftScreen");

/* ==========================================
INTRO
========================================== */

function startIntro(){

if(loginWrapper){

loginWrapper.style.opacity="0";

loginWrapper.style.transform="translateY(40px) scale(.95)";

}

setTimeout(()=>{

if(loginWrapper){

loginWrapper.style.transition="all 1s ease";

loginWrapper.style.opacity="1";

loginWrapper.style.transform="translateY(0) scale(1)";

}

loginPassword.focus();

},1800);

}
/* ==========================================================
   LOGIN.JS V7 PREMIUM
   PART 2
========================================================== */

/* ==========================================
LOGIN BUTTON
========================================== */

loginBtn.addEventListener("click",checkPassword);

loginPassword.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

checkPassword();

}

});

/* ==========================================
CHECK PASSWORD
========================================== */

function checkPassword(){

const password=loginPassword.value.trim();

if(password!==PASSWORD){

wrongPassword();

return;

}

correctPassword();

}

/* ==========================================
WRONG PASSWORD
========================================== */

function wrongPassword(){

loginMessage.style.color="#ff6b6b";

loginMessage.innerHTML="❌ Incorrect Password";

loginPassword.value="";

loginPassword.focus();

/* Shake Animation */

const card=document.querySelector(".login-card");

card.animate([

{transform:"translateX(0)"},

{transform:"translateX(-10px)"},

{transform:"translateX(10px)"},

{transform:"translateX(-10px)"},

{transform:"translateX(10px)"},

{transform:"translateX(0)"}

],{

duration:500

});

}

/* ==========================================
CORRECT PASSWORD
========================================== */

function correctPassword(){

loginMessage.style.color="#7CFC00";

loginMessage.innerHTML="✅ Password Accepted";

/* Save Login Session */

sessionStorage.setItem(

"birthdayLogin",

"true"

);

/* Glow Effect */

const card=document.querySelector(".login-card");

card.style.boxShadow=

"0 0 60px rgba(0,255,120,.55)";

/* Disable Button */

loginBtn.disabled=true;

loginBtn.innerHTML="WELCOME ❤️";

setTimeout(()=>{

showLoading();

},900);

}

/* ==========================================
LOADING
========================================== */

function showLoading(){

document.querySelector(".login-wrapper")

.style.display="none";

loadingScreen.style.display="flex";

/* Create Loading UI if Empty */

if(loadingScreen.innerHTML===""){

loadingScreen.innerHTML=`

<div class="loading-box">

<div class="birthday-loader">

🎂

</div>

<h2>

Preparing Birthday Surprise...

</h2>

<div class="progress">

<div id="progressBar"></div>

</div>

<p id="loadingText">

Loading...

</p>

</div>

`;

}

const progressBar=

document.getElementById("progressBar");

const loadingText=

document.getElementById("loadingText");

let percent=0;

const timer=setInterval(()=>{

percent++;

progressBar.style.width=

percent+"%";

if(percent<25){

loadingText.innerHTML=

"Checking Password...";

}

else if(percent<50){

loadingText.innerHTML=

"Loading Memories...";

}

else if(percent<75){

loadingText.innerHTML=

"Preparing Celebration...";

}

else{

loadingText.innerHTML=

"Welcome Ryan ❤️";

}

if(percent>=100){

clearInterval(timer);

setTimeout(()=>{

showCountdown();

},600);

}

},35);

}
/* ==========================================================
   LOGIN.JS V7 PREMIUM
   PART 3 (FINAL)
========================================================== */

/* ==========================================
COUNTDOWN
========================================== */

function showCountdown(){

loadingScreen.style.display="none";

countdownScreen.style.display="flex";

/* Create UI if Empty */

if(countdownScreen.innerHTML===""){

countdownScreen.innerHTML=`

<div class="countdown-content">

<h1 id="countNumber">3</h1>

<h2 id="countMessage">

Get Ready...

</h2>

</div>

`;

}

const number=document.getElementById("countNumber");

const message=document.getElementById("countMessage");

const countdown=["3","2","1","🎉"];

let index=0;

const timer=setInterval(()=>{

number.innerHTML=countdown[index];

if(index===3){

message.innerHTML="🎂 HAPPY BIRTHDAY RYAN! 🎂";

}

index++;

if(index>=countdown.length){

clearInterval(timer);

setTimeout(showGift,1200);

}

},1000);

}

/* ==========================================
GIFT
========================================== */

function showGift(){

countdownScreen.style.display="none";

giftScreen.style.display="flex";

/* Create UI if Empty */

if(giftScreen.innerHTML===""){

giftScreen.innerHTML=`

<div class="gift-container">

<h2>

A Special Birthday Surprise

</h2>

<p>

Tap the Gift to Continue

</p>

<div id="giftBox">

🎁

</div>

</div>

`;

}

const gift=document.getElementById("giftBox");

gift.addEventListener("click",openGift);

}

/* ==========================================
OPEN GIFT
========================================== */

function openGift(){

const gift=document.getElementById("giftBox");

gift.innerHTML="🎉";

gift.style.transform="scale(1.25) rotate(12deg)";

gift.style.transition=".6s";

setTimeout(()=>{

fadeToWebsite();

},1200);

}

/* ==========================================
FADE TO WEBSITE
========================================== */

function fadeToWebsite(){

giftScreen.style.transition=".8s";

giftScreen.style.opacity="0";

setTimeout(()=>{

window.location.replace("index.html");

},800);

}

/* ==========================================
AUTO FOCUS
========================================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

if(loginPassword){

loginPassword.focus();

}

},800);

});

/* ==========================================
PREVENT DOUBLE CLICK
========================================== */

loginBtn.addEventListener("dblclick",(e)=>{

e.preventDefault();

});

/* ==========================================
END
========================================== */

console.log("🎂 LOGIN V7 PREMIUM LOADED");
