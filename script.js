document.addEventListener("DOMContentLoaded", function() {
    let birthDate = new Date('2009-03-26');
    let today = new Date();
    let diff = today - birthDate;
    let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let seconds = Math.floor(diff / 1000);
    
    document.getElementById("countdown").innerHTML = 
        `<b>${years} years</b> | <b>${days} days</b> | <b>${seconds} seconds</b> on Earth! 🚀`;
});

function showSurprise() {
    alert("🎆 Happy Birthday, Veeraj! Keep shining! 🎇");
    document.getElementById("birthdaySong").play();
}

function addWish() {
    let wishInput = document.getElementById("wishInput").value;
    if (wishInput.trim() !== "") {
        let wishList = document.getElementById("wishesList");
        let newWish = document.createElement("li");
        newWish.textContent = wishInput;
        wishList.appendChild(newWish);
        document.getElementById("wishInput").value = "";
    }
}
