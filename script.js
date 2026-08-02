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

});

closePopup.addEventListener("click",()=>{

    popup.style.display="none";

});
