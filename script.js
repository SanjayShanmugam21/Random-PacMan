const imagesRight = ['PacMan1.png', 'PacMan2.png'];
const imagesLeft = ['PacMan3.png', 'PacMan4.png'];
let pacmanElements = [];
let moveInterval;

function createPacman() {
    const img = document.createElement('img');
    img.src = imagesRight[0];
    img.classList.add('pacman');
    img.style.left = '0px'; 
    img.style.top = Math.random() * (window.innerHeight) + 'px'; 
    document.getElementById('pacmanContainer').appendChild(img);
    pacmanElements.push({ element: img, direction: 1 }); 
}

function startMoving() {
    if (moveInterval) {
        clearInterval(moveInterval); 
    }

    moveInterval = setInterval(() => {
        pacmanElements.forEach(pacman => {
            let pos = parseInt(pacman.element.style.left);
            let vel = 5 * pacman.direction;

            pos += vel;
            if (pos > window.innerWidth - 50 || pos < 0) {
                pacman.direction *= -1; 
                pacman.element.src = pacman.direction > 0 ? imagesRight[0] : imagesLeft[0];
            }

            pacman.element.style.left = pos + 'px'; 
        });
    }, 20);
}