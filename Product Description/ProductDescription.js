/* Fade In First Row */
$(document).ready(function(){
    $(".row").hide();
    $(".row").fadeIn(3650);
})

/* Click to Reveal More Info */
$(document).ready(function(){
    $("#first").click(function(){
        $("#clicked").remove();
        $("#second").slideDown(1000);
    });
});


// intro var
let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");
const idx = 0;

/* Intro screen */
window.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=>{
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add("active");
            }, (idx + 1) * 400)
        });
        setTimeout(() => {
            logoSpan.forEach((span,idx)=> {
                span.classList.remove("active");
                span.classList.add("fade");
            }, (idx + 1) * 50)
        }, 2000);

        setTimeout(()=>{
            intro.style.top = "-100vh";
        }, 2300);
    })
})

/* Scroll Effect */
window.addEventListener("scroll", reveal);
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {

        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < (windowHeight - revealPoint)) {
            reveals[i].classList.add("active");
        }
        else {
            reveals[i].classList.remove("active");
        }
    }
}