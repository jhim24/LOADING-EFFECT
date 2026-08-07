/* ==========================================================
   BIRTHDAY WEBSITE V8
   LOGIN.JS
   PART 1
========================================================== */

"use strict";

/* ==========================================
CONFIG
========================================== */

const PASSWORD="2026";

/* ==========================================
ELEMENTS
========================================== */

const passwordInput=document.getElementById("password");

const loginBtn=document.getElementById("loginBtn");

const message=document.getElementById("message");

/* ==========================================
START
========================================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

if(passwordInput){

passwordInput.focus();

}

},300);

});

/* ==========================================
ENTER KEY
========================================== */

passwordInput.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

login();

}

});

/* ==========================================
BUTTON
========================================== */

loginBtn.addEventListener("click",login);

/* ==========================================
LOGIN
========================================== */

function login(){

const password=passwordInput.value.trim();

if(password===""){

showMessage("Please enter the password.","#FFD700");

passwordInput.focus();

return;

}

if(password!==PASSWORD){

showMessage("Incorrect password.","#ff8080");

passwordInput.select();

navigator.vibrate?.(200);

return;

}

successLogin();

}

/* ==========================================
MESSAGE
========================================== */

function showMessage(text,color){

message.textContent=text;

message.style.color=color;

}

/* ==========================================
SUCCESS
========================================== */

function successLogin(){

showMessage("Access Granted 🎉","#7CFC00");

loginBtn.disabled=true;

passwordInput.disabled=true;

sessionStorage.setItem("birthdayLogin","true");

}
/* ==========================================================
   LOGIN.JS
   PART 2
========================================================== */

/* ==========================================
LOADING SCREEN
========================================== */

function successLogin(){

showMessage("Access Granted 🎉","#7CFC00");

loginBtn.disabled=true;

passwordInput.disabled=true;

sessionStorage.setItem("birthdayLogin","true");

createLoadingScreen();

}

/* ==========================================
CREATE LOADING
========================================== */

function createLoadingScreen(){

const loading=document.createElement("div");

loading.id="loadingScreen";

loading.innerHTML=`

<div class="loading-card">

<div class="loading-logo">

🎂

</div>

<h2>

Preparing Your Surprise...

</h2>

<div class="progress">

<div class="progress-bar"></div>

</div>

<p id="loadingText">

Loading...

</p>

</div>

`;

document.body.appendChild(loading);

const bar=loading.querySelector(".progress-bar");

const text=loading.querySelector("#loadingText");

const steps=[

"Checking password...",

"Opening birthday surprise...",

"Loading memories...",

"Preparing celebration...",

"Almost Ready..."

];

let percent=0;

const timer=setInterval(()=>{

percent++;

bar.style.width=percent+"%";

if(percent<20){

text.innerHTML=steps[0];

}

else if(percent<40){

text.innerHTML=steps[1];

}

else if(percent<60){

text.innerHTML=steps[2];

}

else if(percent<80){

text.innerHTML=steps[3];

}

else{

text.innerHTML=steps[4];

}

if(percent>=100){

clearInterval(timer);

setTimeout(showGiftAnimation,700);

}

},35);

}

/* ==========================================
GIFT
========================================== */

function showGiftAnimation(){

const loading=document.getElementById("loadingScreen");

if(loading){

loading.remove();

}

const gift=document.createElement("div");

gift.id="giftScreen";

gift.innerHTML=`

<div class="gift-card">

<h2>

A Special Gift

</h2>

<p>

Tap the gift to continue

</p>

<div id="giftBox">

🎁

</div>

</div>

`;

document.body.appendChild(gift);

const box=document.getElementById("giftBox");

box.addEventListener("click",()=>{

box.innerHTML="🎉";

box.style.transform="scale(1.3) rotate(12deg)";

setTimeout(()=>{

window.location.replace("index.html");

},1800);

});

}

/* ==========================================
END PART 2
========================================== */

console.log("🎁 Login Part 2 Loaded");
