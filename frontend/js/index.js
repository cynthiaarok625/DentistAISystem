const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {

    const inputs = document.querySelectorAll("input");

    let isValid = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            isValid = false;
        }
    });

    if (!isValid) {
        alert("Please fill all fields.");
        return;
    }

    alert("Appointment Request Submitted!");
}); 
const chatButton = document.getElementById("chatButton");
const chatWindow = document.getElementById("chatWindow");
const closeChat = document.getElementById("closeChat");

chatButton.addEventListener("click", () => {
    chatWindow.style.display = "flex";
});

closeChat.addEventListener("click", () => {
    chatWindow.style.display = "none";
});

const sendBtn = document.getElementById("sendBtn");
const userMessage = document.getElementById("userMessage");
const chatBody = document.getElementById("chatBody");

sendBtn.addEventListener("click", sendMessage);

function sendMessage() {

    const message = userMessage.value.trim();

    if(message === "") return;

    const userDiv = document.createElement("div");

    userDiv.classList.add("user-message");
    userDiv.textContent = message;

    chatBody.appendChild(userDiv);

    userMessage.value = "";

    chatBody.scrollTop = chatBody.scrollHeight;

    // Fake bot response
    setTimeout(() => {

        const botDiv = document.createElement("div");

        botDiv.classList.add("bot-message");
        botDiv.textContent =
            "Thank you. A dental assistant will help you shortly.";

        chatBody.appendChild(botDiv);

        chatBody.scrollTop = chatBody.scrollHeight;

    }, 1000);
}

// For scrolling to the Aboutus Section or Services Section when clicking on the respective nav links
const aboutUsLink = document.getElementById("aboutUsLink");
const servicesLink = document.getElementById("servicesLink");

aboutUsLink.addEventListener("click", (e) => {
    e.preventDefault();
    const aboutUsSection = document.getElementById("about");
    aboutUsSection.scrollIntoView({ behavior: "smooth" });
});

servicesLink.addEventListener("click", (e) => {
    e.preventDefault();
    const servicesSection = document.getElementById("services");
    servicesSection.scrollIntoView({ behavior: "smooth" });
});