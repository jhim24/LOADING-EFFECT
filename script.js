/* ==========================================
   HAPPY BIRTHDAY WEBSITE V2
   PART 1
========================================== */

/* ==========================================
INTRO LOADER
========================================== */

window.addEventListener("load", () => {

    const intro = document.getElementById("intro");

    setTimeout(() => {

        intro.style.opacity = "0";

        intro.style.visibility = "hidden";

    }, 2500);

});

/* ==========================================
CREATE STARS
========================================== */

const stars = document.getElementById("stars");

for (let i = 0; i < 180; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.animationDuration =
        (2 + Math.random() * 4) + "s";

    star.style.animationDelay =
        Math.random() * 5 + "s";

    stars.appendChild(star);

}

/* ==========================================
FLOATING BALLOONS
========================================== */

const balloons = document.getElementById("balloons");

const balloonColors = [

    "red",

    "blue",

    "yellow",

    "green",

    "purple"

];

for (let i = 0; i < 12; i++) {

    const balloon = document.createElement("div");

    balloon.className =
        "balloon " +
        balloonColors[
            Math.floor(Math.random() * balloonColors.length)
        ];

    balloon.style.left =
        Math.random() * 100 + "%";

    balloon.style.animationDuration =
        (15 + Math.random() * 10) + "s";

    balloon.style.animationDelay =
        Math.random() * 8 + "s";

    balloons.appendChild(balloon);

}

/* ==========================================
GOLD PARTICLES
========================================== */

const particles =
document.getElementById("particles");

for (let i = 0; i < 60; i++) {

    const dot = document.createElement("div");

    dot.className = "particle";

    dot.style.left =
        Math.random() * 100 + "%";

    dot.style.top =
        Math.random() * 100 + "%";

    dot.style.animationDuration =
        (8 + Math.random() * 10) + "s";

    dot.style.animationDelay =
        Math.random() * 10 + "s";

    particles.appendChild(dot);

}

/* ==========================================
SCROLL REVEAL
========================================== */

const reveals =
document.querySelectorAll(".reveal");

function revealElements() {

    reveals.forEach((item) => {

        const top =
        item.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            item.classList.add("active");

        }

    });

}

window.addEventListener(

    "scroll",

    revealElements

);

revealElements();
/* ==========================================
   PART 2
   CELEBRATE BUTTON
========================================== */

const celebrateBtn =
document.getElementById("celebrate");

if (celebrateBtn) {

    celebrateBtn.addEventListener("click", () => {

        celebrateBtn.innerHTML =
        "<i class='fa-solid fa-heart'></i> Happy Birthday!";

        celebrateBtn.style.background =
        "#FF5E7E";

        celebrateBtn.style.color =
        "#fff";

        celebrateBtn.style.transform =
        "scale(1.08)";

        setTimeout(() => {

            celebrateBtn.style.transform =
            "scale(1)";

        },300);

    });

}

/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll("button")

.forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=

e.clientX-rect.left-size/2+"px";

ripple.style.top=

e.clientY-rect.top-size/2+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});

/* ==========================================
   HEADER SHADOW
========================================== */

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow=

"0 10px 25px rgba(0,0,0,.08)";

}else{

header.style.boxShadow="none";

}

});
/* ==========================================
RIPPLE EFFECT
========================================== */

button{

position:relative;

overflow:hidden;

}

.ripple{

position:absolute;

border-radius:50%;

background:rgba(255,255,255,.5);

transform:scale(0);

animation:ripple .7s linear;

pointer-events:none;

}

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}
/* ==========================================
PART 3
CELEBRATE MODAL
========================================== */

const modal =
document.getElementById("celebrateModal");

const closeModal =
document.getElementById("closeModal");

const typing =
document.getElementById("typingText");

const music =
document.getElementById("birthdayMusic");

const playMusic =
document.getElementById("startMusic");

const message =

"May this special day bring you happiness, good health, success, and countless blessings. Happy Birthday Ryan! We love you very much. ❤️";

if (celebrateBtn && modal) {

    celebrateBtn.addEventListener("click",()=>{

        modal.style.display="flex";

        typeMessage();

    });

}

function typeMessage(){

typing.innerHTML="";

let i=0;

const timer=setInterval(()=>{

typing.innerHTML+=message.charAt(i);

i++;

if(i>=message.length){

clearInterval(timer);

}

},35);

}

if(playMusic){

playMusic.addEventListener("click",()=>{

music.play();

});

}

if(closeModal){

closeModal.addEventListener("click",()=>{

modal.style.display="none";

});

}
