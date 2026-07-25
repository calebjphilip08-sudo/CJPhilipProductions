const heroImages = [
  'Images/Hero%20Images/HeroImage.jpg',
  'Images/Hero%20Images/pinterest-pin-1785017888848.png',
  'Images/Hero%20Images/pinterest-pin-1785017938938.jpg',
  'Images/Hero%20Images/pinterest-pin-1785018044506.jpg'
];

let currentImageIndex = 0;

function cycleHeroImage() {
  const hero = document.querySelector('.hero');
  if (!hero || heroImages.length === 0) return;

  hero.style.opacity = '0';

  setTimeout(() => {
    const imageUrl = heroImages[currentImageIndex];
    hero.style.backgroundImage = `url('${imageUrl}')`;
    hero.style.opacity = '1';

    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
  }, 500);
}

function startHeroCarousel() {
  cycleHeroImage();
  setInterval(cycleHeroImage, 10000);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startHeroCarousel);
} else {
  startHeroCarousel();
}
