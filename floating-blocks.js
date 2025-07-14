// Floating Block'hood blocks script
// Will create floating images from widgets/1.png etc. and animate them

const blockImages = [
  'widgets/1.png',
  'widgets/2.png',
  'widgets/3.png',
  'widgets/4.png'
];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createFloatingBlock(imgSrc, zIndex = 10) {
  const img = document.createElement('img');
  img.src = imgSrc;
  img.className = 'floating-block-widget';
  img.style.position = 'fixed';
  img.style.zIndex = zIndex;
  img.style.width = randomBetween(48, 72) + 'px';
  img.style.opacity = randomBetween(0.75, 0.95);
  img.style.pointerEvents = 'none';

  // Initial random position, avoiding center 40% x 40% of viewport
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  let left, top;
  do {
    left = randomBetween(0, vw - 72);
    top = randomBetween(0, vh - 72);
    // Center bounds: 30%-70% of width/height (center 40%)
  } while (
    left > vw * 0.3 && left < vw * 0.7 - 72 &&
    top > vh * 0.3 && top < vh * 0.7 - 72
  );
  img.style.left = left + 'px';
  img.style.top = top + 'px';

  document.body.appendChild(img);

  // Animate floating path
  let angle = randomBetween(0, Math.PI * 2);
  let radius = randomBetween(24, 60);
  let speed = randomBetween(0.15, 0.35) * (Math.random() < 0.5 ? 1 : -1);
  const baseLeft = parseFloat(img.style.left);
  const baseTop = parseFloat(img.style.top);

  function animate() {
    angle += speed * 0.01;
    const x = baseLeft + Math.cos(angle) * radius;
    const y = baseTop + Math.sin(angle) * radius;
    img.style.left = Math.max(0, Math.min(vw - 72, x)) + 'px';
    img.style.top = Math.max(0, Math.min(vh - 72, y)) + 'px';
    requestAnimationFrame(animate);
  }
  animate();
}

// Add several floating blocks on DOM ready
window.addEventListener('DOMContentLoaded', function() {
  for (let i = 0; i < 6; i++) {
    const imgSrc = blockImages[Math.floor(Math.random() * blockImages.length)];
    createFloatingBlock(imgSrc, 30);
  }
});
