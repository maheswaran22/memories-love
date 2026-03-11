// Initialize AOS
AOS.init();

// ===============================
// START BUTTON
// ===============================
function startSurprise(){
    
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
}

// ======================   =========
// FIREWORKS
// ===============================
function fireworks(){
    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
    });
}

// ===============================
// PREMIUM INTERACTIVE INFINITE SLIDER
// ===============================
const slider = document.getElementById("slider");
const track = document.getElementById("track");

if(slider && track){

    let speed = 0.6;
    let position = 0;
    let mouseX = 0;
    let isPaused = false;

    // Mouse movement control
    slider.addEventListener("mousemove",(e)=>{
        const rect = slider.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const center = rect.width / 2;
        mouseX = (x - center) / center;
    });

    // Pause on hover
    slider.addEventListener("mouseenter", ()=> isPaused = true);
    slider.addEventListener("mouseleave", ()=>{
        isPaused = false;
        mouseX = 0;
    });

    // Touch support (mobile)
    slider.addEventListener("touchmove",(e)=>{
        const touch = e.touches[0];
        const rect = slider.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const center = rect.width / 2;
        mouseX = (x - center) / center;
    });

    // Animation loop
    function animateSlider(){

        if(!isPaused){
            position -= speed + (mouseX * 2);
            track.style.transform = `translate3d(${position}px,0,0)`;

            // Seamless infinite reset
            if(Math.abs(position) >= track.scrollWidth / 2){
                position = 0;
            }
        }

        requestAnimationFrame(animateSlider);
    }

    animateSlider();
}

// ===============================
// FLOATING PARTICLES (FOG EFFECT)
// ===============================
const particlesContainer = document.querySelector(".particles");

if(particlesContainer){
    for(let i = 0; i < 40; i++){
        let particle = document.createElement("span");

        let size = Math.random() * 6 + 4;
        particle.style.width = size + "px";
        particle.style.height = size + "px";

        particle.style.left = Math.random() * 100 + "vw";
        particle.style.animationDuration = (Math.random() * 10 + 10) + "s";
        particle.style.animationDelay = Math.random() * 5 + "s";

        particlesContainer.appendChild(particle);
    }
}

function toggleMusic(){
    const song = document.getElementById("song");
    const btn = document.getElementById("musicBtn");

    if(song.paused){
        song.play();
        btn.innerText = "⏸ Pause Music";
    } else {
        song.pause();
        btn.innerText = "🎵 Play Music";
    }
}


// // NO button escape effect
// const noBtn = document.getElementById("noBtn");

// noBtn.addEventListener("mouseover", function () {
//     const x = Math.random() * window.innerWidth - 100;
//     const y = Math.random() * window.innerHeight - 50;

//     noBtn.style.position = "absolute";
//     noBtn.style.left = x + "px";
//     noBtn.style.top = y + "px";
// });

// function openHidden() {
//     window.location.href = "hidden.html";
// }

function openHidden() {
    window.location.href = "hidden.html";
}

function sadEffect() {

    const tom = document.getElementById("sadTom");

    // Restart animation every click
    tom.style.display = "none";
    void tom.offsetWidth;

    tom.style.display = "block";

    document.body.classList.add("dark-mode");

    setTimeout(() => {
        tom.style.display = "none";
        document.body.classList.remove("dark-mode");
    }, 5000);
}