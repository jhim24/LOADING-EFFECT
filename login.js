/* ==========================================
   BIRTHDAY LOGIN V6
========================================== */

const PASSWORD = "123";

const loginBtn = document.getElementById("loginBtn");
const loginPassword = document.getElementById("loginPassword");
const loginMessage = document.getElementById("loginMessage");

/* ==========================================
AUTO FOCUS
========================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        loginPassword.focus();

    }, 300);

});

/* ==========================================
LOGIN
========================================== */

function checkPassword() {

    const value = loginPassword.value.trim();

    if (value === "") {

        loginMessage.style.color = "#FFD700";
        loginMessage.textContent = "Please enter your password.";

        loginPassword.focus();

        return;
    }

    if (value !== PASSWORD) {

        loginMessage.style.color = "#ff8080";
        loginMessage.textContent = "Incorrect Password.";

        loginPassword.select();

        return;
    }

    loginMessage.style.color = "#7CFC00";
    loginMessage.textContent = "Password Accepted.";

    loginBtn.disabled = true;

   setTimeout(() => {

    sessionStorage.setItem("birthdayLogin","true");

    window.location.href="index.html";

},800);

}

/* ==========================================
BUTTON
========================================== */

loginBtn.addEventListener("click", checkPassword);

/* ==========================================
ENTER KEY
========================================== */

loginPassword.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        checkPassword();

    }

});
