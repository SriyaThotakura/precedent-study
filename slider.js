// Slider images and labels
const images = [
    { src: 'images/Collab.jpg', label: 'Collab', description: 'Collab.jpg' },
    { src: 'images/Construction timelines.jpg', label: 'Construction timelines', description: 'Construction timelines.jpg' },
    { src: "images/Decay and Entropy in Block'hood.jpeg", label: "Decay and Entropy in Block'hood", description: "Decay and Entropy in Block'hood.jpeg" },
    { src: 'images/Decay.jpg', label: 'Decay', description: 'Decay.jpg' },
    { src: 'images/Eco-Urban.png', label: 'Eco-Urban', description: 'Eco-Urban.png' },
    { src: 'images/Everywhere cow.jpg', label: 'Everywhere cow', description: 'Everywhere cow.jpg' },
    { src: 'images/Functional component.png', label: 'Functional component', description: 'Functional component.png' },
    { src: 'images/Gardens.jpeg', label: 'Gardens', description: 'Gardens.jpeg' },
    { src: 'images/Hill.jpg', label: 'Hill', description: 'Hill.jpg' },
    { src: "images/Population & Community-Focused Eco Build with High Leisure and Knowledge Gains.jpg", label: 'Population & Community-Focused Eco Build with High Leisure and Knowledge Gains', description: 'Population & Community-Focused Eco Build with High Leisure and Knowledge Gains.jpg' },
    { src: 'images/Thriving Eco-Urban Environment.png', label: 'Thriving Eco-Urban Environment', description: 'Thriving Eco-Urban Environment.png' },
    { src: 'images/Urban tower.png', label: 'Urban tower', description: 'Urban tower.png' },
    { src: 'images/Vertical Eco-Commercial Tower Under Strain.png', label: 'Vertical Eco-Commercial Tower Under Strain', description: 'Vertical Eco-Commercial Tower Under Strain.png' },
    { src: 'images/World Builder – Biome and Terrain Creation.jpg', label: 'World Builder – Biome and Terrain Creation', description: 'World Builder – Biome and Terrain Creation.jpg' },
    { src: 'images/dystopian.jpg', label: 'dystopian', description: 'dystopian.jpg' },
    { src: 'images/landscape.png', label: 'landscape', description: 'landscape.png' },
    { src: 'images/modular wooden scaffold grid.jpg', label: 'modular wooden scaffold grid', description: 'modular wooden scaffold grid.jpg' },
    { src: 'images/process.png', label: 'process', description: 'process.png' },
    { src: 'images/species in landscape.jpg', label: 'species in landscape', description: 'species in landscape.jpg' },
    { src: 'images/species.jpg', label: 'species', description: 'species.jpg' },
    { src: 'images/start.png', label: 'start', description: 'start.png' },
    { src: 'images/zones.jpg', label: 'zones', description: 'zones.jpg' }
];

const slider = document.getElementById('imageSlider');
const dots = document.getElementById('sliderDots');
let currentIndex = 0;

function renderSlides() {
    slider.innerHTML = '';
    images.forEach((img, idx) => {
        const slide = document.createElement('div');
        slide.className = 'slide' + (idx === currentIndex ? ' active' : '');
        slide.innerHTML = `
            <div class="slide-label"><strong>${img.label}</strong></div>
            <img src="${img.src}" alt="${img.label}" />
            <div class="slide-desc">${img.description}</div>
        `;
        slider.appendChild(slide);
    });
}

function renderDots() {
    dots.innerHTML = '';
    images.forEach((_, idx) => {
        const dot = document.createElement('span');
        dot.className = 'dot' + (idx === currentIndex ? ' active' : '');
        dot.onclick = () => goToSlide(idx);
        dots.appendChild(dot);
    });
}

function goToSlide(idx) {
    currentIndex = (idx + images.length) % images.length;
    updateSlider();
}

function nextSlide() {
    goToSlide(currentIndex + 1);
}

function prevSlide() {
    goToSlide(currentIndex - 1);
}

function updateSlider() {
    renderSlides();
    renderDots();
}

document.getElementById('sliderNext').onclick = nextSlide;
document.getElementById('sliderPrev').onclick = prevSlide;

// Initial render
updateSlider();
