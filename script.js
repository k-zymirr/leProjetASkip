const images = [];
for (let i = 1; i <= 5; i++) {
    const img = new Image();
    img.src = `img/${i}.png`;
    images.push(img);
}

const potentiometre = document.querySelector('#imageSlider');

potentiometre.addEventListener('input', function() {
    const image = document.querySelector('#imageSliderImage');
    image.src = `img/${potentiometre.value}.png`;
});