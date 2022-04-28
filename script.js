const profiles = document.querySelectorAll(".profile-photo");
const overlays = document.querySelectorAll(".overlay");

profiles.forEach((profile) => {
    profile.addEventListener("click", (e) => {
        e.target.nextElementSibling.classList.add("active");
        e.target.classList.add("active");
    });
});

overlays.forEach((overlay) => {
    overlay.addEventListener("click", closePopup); 
});

function closePopup(){
    document.querySelector(".popup.active").classList.remove("active");
    document.querySelector(".profile-photo.active").classList.remove("active");
}

const topButton = document.getElementById("topBtn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function topFunction() {   
    document.getElementById('top').scrollIntoView();
}

var collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((collapsible) => {
    collapsible.addEventListener("click", function() {
        this.parentElement.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "flex") {
          content.style.display = "none";
        } else {
          content.style.display = "flex";
        }
    });
});