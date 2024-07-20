const backgrounds = [
    'images/background1.jpg',
    'images/background2.jpg',
    'images/background3.jpg'
];

let currentBackgroundIndex = 0;

document.getElementById('changeBackground').addEventListener('click', function() {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    console.log('Changing to background:', backgrounds[currentBackgroundIndex]);
    document.querySelector('.aquarium').style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;
});

function moveFishRandomly(fish) {
    const aquariumWidth = document.querySelector('.aquarium').offsetWidth;
    const aquariumHeight = document.querySelector('.aquarium').offsetHeight;

    const newLeft = Math.random() * (aquariumWidth - fish.offsetWidth);
    const newTop = Math.random() * (aquariumHeight - fish.offsetHeight);

    fish.style.left = `${newLeft}px`;
    fish.style.top = `${newTop}px`;
}

function moveFishRandomly(fish) {
    const aquariumWidth = document.querySelector('.aquarium').offsetWidth;
    const aquariumHeight = document.querySelector('.aquarium').offsetHeight;

    const newLeft = Math.random() * (aquariumWidth - fish.offsetWidth);
    const newTop = Math.random() * (aquariumHeight - fish.offsetHeight);

    fish.style.left = `${newLeft}px`;
    fish.style.top = `${newTop}px`;
}

function moveFish(fish) {
    const aquarium = document.querySelector('.aquarium');
    const aquariumWidth = aquarium.offsetWidth;
    const aquariumHeight = aquarium.offsetHeight;

    let x = Math.random() * (aquariumWidth - fish.offsetWidth);
    let y = Math.random() * (aquariumHeight - fish.offsetHeight);
    let dx = (Math.random() - 0.5) * 2; // Hướng di chuyển ngẫu nhiên
    let dy = (Math.random() - 0.5) * 2;
    let angle = Math.random() * 360; // Góc xoay ban đầu

    function updatePosition() {
        x += dx;
        y += dy;

        // Nếu cá chạm vào viền của bể, đổi hướng và quay đầu
        if (x <= 0 || x >= aquariumWidth - fish.offsetWidth) {
            dx = -dx;
            angle = (angle + 180) % 360; // Quay đầu 180 độ
        }
        if (y <= 0 || y >= aquariumHeight - fish.offsetHeight) {
            dy = -dy;
            angle = (angle + 180) % 360; // Quay đầu 180 độ
        }

        fish.style.left = `${x}px`;
        fish.style.top = `${y}px`;
        fish.style.transform = `rotate(${angle}deg)`; // Xoay hình ảnh cá

        requestAnimationFrame(updatePosition); // Cập nhật liên tục
    }

    updatePosition(); // Bắt đầu di chuyển
}

function animateFish() {
    const fishes = document.querySelectorAll('.fish');
    fishes.forEach(fish => {
        moveFish(fish);
    });
}

document.addEventListener('DOMContentLoaded', animateFish);


document.addEventListener('DOMContentLoaded', animateFish);

const musicList = [
    'music/song1.mp3',
    'music/song2.mp3',
    'music/song3.mp3'
];

let currentMusicIndex = 0;
let audio;

document.getElementById('changeMusic').addEventListener('click', function() {
    if (audio) {
        audio.pause();
    }
    currentMusicIndex = (currentMusicIndex + 1) % musicList.length;
    audio = new Audio(musicList[currentMusicIndex]);
    audio.loop = true;
    audio.play();
});
