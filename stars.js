// stars.js
const starContainer = document.querySelector('.stars');

for (let i = 0; i < 250; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = (Math.random() * 3 + 1) + 'px';
    star.style.height = star.style.width;
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.animationDelay = (Math.random() * 5) + 's';
    star.style.opacity = Math.random() * 0.7 + 0.3;
    if (Math.random() > 0.9) {
        star.style.boxShadow = '0 0 8px 2px white';
    }
    starContainer.appendChild(star);
}

function createFallingStar() {
    const star = document.createElement('div');
    star.classList.add('falling-star');
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = (Math.random() * 20) + 'vh';
    star.style.setProperty('--random-x', (Math.random() - 0.5) * 300 + 'px');
    const duration = 1 + Math.random() * 2;
    star.style.animationDuration = duration + 's';
    star.style.opacity = Math.random() * 0.8 + 0.2;
    const size = 3 + Math.random() * 2;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    starContainer.appendChild(star);
    setTimeout(() => {
        star.remove();
    }, duration * 1000);
}

function startFallingStars() {
    createFallingStar();
    setTimeout(startFallingStars, 300 + Math.random() * 1200);
}

setTimeout(startFallingStars, 500);
