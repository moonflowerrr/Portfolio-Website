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

const movingImage = document.getElementById('movingImage');

document.addEventListener('scroll', () => {
  // Get the current vertical scroll position
  const scrollPosition = window.scrollY;

  // Update the image's position based on scroll
  // Example: Move the image horizontally as you scroll vertically
  movingImage.style.transform = `translateX(${scrollPosition * 2.5}px)`; // Adjust multiplier for speed
});
