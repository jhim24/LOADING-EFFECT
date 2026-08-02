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
