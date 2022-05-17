const profiles = document.querySelectorAll(".profile-photo");
const overlays = document.querySelectorAll(".overlay");
const photos = document.querySelectorAll(".image-container");

profiles.forEach((profile) => {
    profile.addEventListener("click", (e) => {
        e.target.nextElementSibling.classList.add("active");
        e.target.classList.add("active");
    });
});
const carousel = document.getElementById("carouselGallery");
photos.forEach((photo) => {
    photo.addEventListener("click", (e) => {
        carousel.classList.add("active");
    });
});

$(document).bind('keyup', function(e) {
    if(e.which == 39){
        $('.carousel').carousel('next');
    }
    else if(e.which == 37){
        $('.carousel').carousel('prev');
    }
});

overlays.forEach((overlay) => {
    overlay.addEventListener("click", closePopup); 
});



function closePopup(){
    var activeElements = document.querySelectorAll(".active");
    activeElements.forEach((e) => {
        if (!e.classList.contains("carousel-item")){
            e.classList.remove("active");
        }
    });
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

$(document).ready( function() {
    $(window).scroll(function() {
      var s = $(window).scrollTop() * 20,
          c = $(document).height() - $(window).height(),
          scrollPercent = (s / c),
          opacity = (scrollPercent + 0.35).toFixed(2),
          translation = (scrollPercent * 500 + 50).toFixed(2);
          
      $(".cover-photo-overlay").css("opacity", opacity);
      $("#title").css({"transform": "translate(-50%, -" + translation + "%)"});
    });
});
