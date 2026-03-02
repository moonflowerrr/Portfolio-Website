

document.addEventListener('mousemove', (e) => {
    const img = document.createElement('img');
    
    // 1. RELATIVE PATH (Adjust this to your folder structure)
    img.src = '../assets/star.png'; 
    img.alt = ''; // Hides the broken image "outline" in some browsers
    img.className = 'cursor-image';
    
    // 2. CSS STYLING
    img.style.position = 'fixed'; // Must be fixed or absolute
    img.style.left = e.clientX + 'px';
    img.style.top = e.clientY + 'px';
    img.style.pointerEvents = 'none'; // Essential so you can still click things
    img.style.transform = 'translate(-50%, -50%)'; // Centers star on cursor
    
    document.body.appendChild(img);
    
    setTimeout(() => {
        img.remove();
    }, 500); 
});

document.addEventListener('scroll', () => {
  const movingImage = document.getElementById('movingImage');
  if (!movingImage) return; // Safety: don't throw if element is missing

  // Get the current vertical scroll position
  const scrollPosition = window.scrollY;

  // Update the image's position based on scroll
  // Move the image diagonally (left and slightly down) as the user scrolls
  const speedX = 1.5; // horizontal pixels per vertical pixel scrolled
  const speedY = 0.2; // vertical pixels per vertical pixel scrolled (small angle)
  movingImage.style.transform = `translateX(${ -scrollPosition * speedX }px) translateY(${ scrollPosition * speedY }px)`; // tweak speeds to taste
});

// Star Wars style crawl: move the `.crawl-content` as the user scrolls
document.addEventListener('scroll', () => {
  const crawl = document.getElementById('starwarsCrawl');
  if (!crawl) return;

  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = Math.min(scrollTop / (docHeight || 1), 1);

  // distance the crawl should travel upward (px)
  const maxTranslate = 1000; // increased so crawl has more room to travel on taller container

  // Translate upward based on progress
  const translateY = -progress * maxTranslate;

  // Reverse direction: decrease tilt and shrink as user scrolls down
  const baseRotate = 35;
  const rotateX = Math.max(baseRotate - progress * 12, 0);

  // Start larger and shrink as the user scrolls (reverse of previous behavior)
  const initialScale = 1.25; // starting scale (larger)
  const minScale = 0.5; // how small it becomes at the end
  const scale = Math.max(initialScale - progress * (initialScale - minScale), minScale);

  // Fade slightly as it goes away
  const opacity = Math.max(1 - progress * 1.1, 0);

  // keep horizontal centering (translateX(-50%)) while moving vertically, rotating and scaling
  crawl.style.transform = `translateX(-50%) translateY(${translateY}px) rotateX(${rotateX}deg) scale(${scale})`;
  crawl.style.opacity = opacity;
});
