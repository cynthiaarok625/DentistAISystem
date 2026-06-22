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