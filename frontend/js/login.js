document
.getElementById("loginForm")

.addEventListener(
"submit",

function(e){

e.preventDefault();

const role =
document
.getElementById("role")
.value;



if(role==="guest"){

window.location.href=
"index.html";

}

else if(role==="client"){

window.location.href=
"client-dashboard.html";

}

else{

window.location.href=
"dentist-dashboard.html";

}

});

const registerLink = document.getElementById("ForgotPasswordLink");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

registerLink.addEventListener("click", function(event) {
    event.preventDefault();
    popup.style.display = "flex";
});

closeBtn.addEventListener("click", function() {
    popup.style.display = "none";
});