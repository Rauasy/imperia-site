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
