function lightmode() {
    window.alert("Light mode is still under development :)");
    // const body = document.querySelector('body');
    // body.style.backgroundImage = 'linear-gradient(180deg, #fffeef 0%, #dffff7 100%)';
}

function submitted(){
    window.alert("Your message has been sent!");
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector("main").style.opacity = 1;
    }, 2000);
});