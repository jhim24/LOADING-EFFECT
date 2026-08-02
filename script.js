/* ==========================================
   HAPPY BIRTHDAY WEBSITE
   STEP 3
========================================== */

const background = document.getElementById("background");

/* ==========================================
   CREATE STARS
========================================== */

for(let i=0;i<180;i++){

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random()*100+"%";

    star.style.top = Math.random()*100+"%";

    star.style.animationDelay = Math.random()*5+"s";

    star.style.animationDuration = (2+Math.random()*4)+"s";

    background.appendChild(star);

}

/* ==========================================
   CELEBRATE BUTTON
========================================== */

const btn=document.getElementById("celebrate");

btn.addEventListener("click",()=>{

    btn.innerHTML="<i class='fa-solid fa-heart'></i> Happy Birthday Ryan!";

    btn.style.background="#ff4081";

    btn.style.color="white";

});
/* ==========================================
   POPUP
========================================== */

const popup = document.getElementById("birthdayPopup");

const closePopup = document.getElementById("closePopup");

btn.addEventListener("click",()=>{

    popup.style.display="flex";

    fireworkInterval=setInterval(createFirework,700);

});
let fireworkInterval;

closePopup.addEventListener("click",()=>{

    popup.style.display="none";

    clearInterval(fireworkInterval);

});
/* ==========================================
   FIREWORKS ENGINE
========================================== */

const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

let particles=[];

class Particle{

    constructor(x,y,color){

        this.x=x;
        this.y=y;

        this.color=color;

        this.radius=2+Math.random()*3;

        this.speedX=(Math.random()-0.5)*10;

        this.speedY=(Math.random()-0.5)*10;

        this.life=100;

    }

    update(){

        this.x+=this.speedX;

        this.y+=this.speedY;

        this.speedY+=0.05;

        this.life--;

    }

    draw(){

        ctx.beginPath();

        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);

        ctx.fillStyle=this.color;

        ctx.shadowColor=this.color;

        ctx.shadowBlur=20;

        ctx.fill();

    }

}

function createFirework(){

    const x=Math.random()*canvas.width;

    const y=Math.random()*canvas.height*0.5;

    const colors=[

        "#FFD700",

        "#FF4D6D",

        "#00E5FF",

        "#00FF99",

        "#FF9800",

        "#E040FB",

        "#FFFFFF"

    ];

    const color=

    colors[Math.floor(Math.random()*colors.length)];

    for(let i=0;i<120;i++){

        particles.push(

            new Particle(x,y,color)

        );

    }

}

function animateFireworks(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let i=particles.length-1;i>=0;i--){

        particles[i].update();

        particles[i].draw();

        if(particles[i].life<=0){

            particles.splice(i,1);

        }

    }

    requestAnimationFrame(animateFireworks);

}

animateFireworks();
