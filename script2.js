// Utility Functions
function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function randomPosition() {
    return {
        x: Math.random() * (window.innerWidth - 50),
        y: Math.random() * (window.innerHeight - 50)
    };
}

function randomEmoji() {
    const emojis = ['😂','🐱','🌈','🍿','💩','👽','🎉','🚀','🐶','😎'];
    return emojis[Math.floor(Math.random() * emojis.length)];
}

// Main chaos elements
const mainButton = document.getElementById('main-button');
const message = document.getElementById('message');

function playRandomSound() {
    const sounds = [
        'https://www.soundjay.com/button/sounds/button-10.mp3',
        'https://www.soundjay.com/button/sounds/button-16.mp3',
        'https://www.soundjay.com/button/sounds/button-3.mp3'
    ];
    const audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
    audio.play();
}

function flyEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('flying-emoji');
    emoji.style.left = randomPosition().x + 'px';
    emoji.style.top = window.innerHeight + 'px';
    emoji.innerText = randomEmoji();
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 3000);
}

function popupMessage() {
    const msgs = [
        "Oops! Confetti explosion!",
        "You triggered the chaos button!",
        "Quick! Catch the rainbow!",
        "Secret ultra-button pressed… you’re immortal!",
        "Error 666: Too much fun!",
        "Warning: uncontrollable laughter ahead!"
    ];
    message.innerText = msgs[Math.floor(Math.random() * msgs.length)];
    setTimeout(() => message.innerText = '', 3000);
}

// Chaos behaviors
mainButton.addEventListener('click', () => {
    document.body.style.backgroundColor = randomColor();
    playRandomSound();
    for (let i=0; i<5; i++) flyEmoji();
    popupMessage();

    const pos = randomPosition();
    mainButton.style.position = 'absolute';
    mainButton.style.left = pos.x + 'px';
    mainButton.style.top = pos.y + 'px';

    if (Math.random() < 0.3) {
        const clone = mainButton.cloneNode(true);
        document.body.appendChild(clone);
        clone.addEventListener('click', mainButton.onclick);
    }

    const texts = ["Press me!", "Absolutely not!", "Do it!", "Click me again!", "Wheee!"];
    mainButton.innerText = texts[Math.floor(Math.random() * texts.length)];
});

mainButton.addEventListener('mouseover', () => {
    if (Math.random() < 0.5) {
        const pos = randomPosition();
        mainButton.style.left = pos.x + 'px';
        mainButton.style.top = pos.y + 'px';
    }
});

// Random background color every 2s
setInterval(() => {
    document.body.style.backgroundColor = randomColor();
}, 2000);

// Flying meme images
setInterval(() => {
    const img = document.createElement('img');
    img.src = 'https://i.imgflip.com/30b1gx.jpg';
    img.style.position = 'absolute';
    img.style.width = '100px';
    img.style.left = randomPosition().x + 'px';
    img.style.top = randomPosition().y + 'px';
    img.style.transform = 'rotate(' + (Math.random()*360) + 'deg)';
    document.body.appendChild(img);
    setTimeout(() => img.remove(), 5000);
}, 3000);

