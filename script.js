setTimeout(cambiaMensaje,2300) 

function cambiaMensaje(){
    document.getElementById("loading-message").innerText = "¡Enviado!"
}

setTimeout(cambiarMensaje,2800)

function cambiarMensaje(){
    document.getElementById("feliz").innerText = "¡Feliz San Valentín!"
}

function cambiarTexto() {
    document.getElementById("feliz").innerText = "¡Texto cambiado!";
}

function rateStars(stars) {
    const starElements = document.querySelectorAll('.star');
    for (let i = 0; i < starElements.length; i++) {
        if (i < stars) {
            starElements[i].classList.add('active');
        } else {
            starElements[i].classList.remove('active');
        }
    }
    
    if (stars === 5) {
        createConfetti();
    }
}

function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['red', 'green', 'blue'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.classList.add('confetti', randomColor);
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confettiContainer.appendChild(confetti);
    }
}
