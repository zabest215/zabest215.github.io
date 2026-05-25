// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Check Local Storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  root.setAttribute('data-theme', currentTheme);
} else {
  // Default to dark mode
  root.removeAttribute('data-theme');
}

themeToggle.addEventListener('click', () => {
  if (root.getAttribute('data-theme') === 'light') {
    root.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    root.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
  initCanvas(); // Re-init canvas colors on theme change
});

// Typing Effect for Hero
const typingText = document.getElementById('typing-text');
const phrases = [
  "Future Elektroniker für Automatisierungstechnik",
  "Aspiring Fachinformatiker",
  "Embedded Systems Enthusiast",
  "Automation & Tech Problem Solver"
];
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    typingText.textContent = currentPhrase.substring(0, letterIndex - 1);
    letterIndex--;
  } else {
    typingText.textContent = currentPhrase.substring(0, letterIndex + 1);
    letterIndex++;
  }

  let typeSpeed = isDeleting ? 40 : 100;

  if (!isDeleting && letterIndex === currentPhrase.length) {
    typeSpeed = 2000; // Pause at end of phrase
    isDeleting = true;
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typeSpeed = 500; // Pause before new phrase
  }
  setTimeout(typeLoop, typeSpeed);
}
typeLoop();

// Terminal Simulation for About Section
const terminalText = document.getElementById('terminal-text');
const termLines = [
  "> ./zakariae_status.sh",
  "[OK] Loading Physics & Electronics Foundation...",
  "[OK] Booting Linux Mint environment...",
  "[WAIT] Compiling C++ / Arduino logic...",
  "> cat goals.txt",
  "Seeking Ausbildung in Germany (Elektroniker / Fachinformatiker)",
  "> ping -c 1 OESD_B2_Exam",
  "Reply: Preparation active. Status: Ready for professional deployment."
];

let termLineIndex = 0;
let termCharIndex = 0;

function typeTerminal() {
  if (termLineIndex < termLines.length) {
    if (termCharIndex === 0) {
      terminalText.innerHTML += '<div class="term-line"></div>';
    }
    const lines = terminalText.getElementsByClassName('term-line');
    const currentLine = lines[lines.length - 1];
    
    currentLine.innerHTML += termLines[termLineIndex].charAt(termCharIndex);
    termCharIndex++;

    if (termCharIndex >= termLines[termLineIndex].length) {
      termCharIndex = 0;
      termLineIndex++;
      setTimeout(typeTerminal, 500); // delay before next line
    } else {
      setTimeout(typeTerminal, 25);
    }
  }
}

// Staggered Fade-in-up animations & triggering terminal via IntersectionObserver
const fadeElements = document.querySelectorAll('.fade-in-up');
const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
let terminalStarted = false;

const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Stagger effect based on DOM position
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 100); 
      
      // Check if terminal is in view
      if(entry.target.classList.contains('terminal-card') && !terminalStarted) {
        terminalStarted = true;
        setTimeout(typeTerminal, 500);
      }
      
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeElements.forEach(el => fadeObserver.observe(el));

// Custom 3D Tilt Effect on Cards
const tiltCards = document.querySelectorAll('.tilt-card');
tiltCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    // Only apply on larger screens for performance
    if(window.innerWidth > 768) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        // Invert for natural tilt
        const rotateX = ((y - centerY) / centerY) * -12; 
        const rotateY = ((x - centerX) / centerX) * 12;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    }
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
  });
});

// Interactive Canvas Particle Background
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 1.5;
    this.vy = (Math.random() - 0.5) * 1.5;
    this.radius = Math.random() * 2 + 1;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }
  draw(color) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }
}

function initCanvas() {
  resize();
  particles = [];
  // Adjust particle count based on screen size
  const particleCount = window.innerWidth < 768 ? 40 : 80;
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

function animateCanvas() {
  // Dynamically fetch colors based on current theme variables
  const style = getComputedStyle(document.body);
  const bgColor = style.getPropertyValue('--bg-color').trim();
  const primaryColor = style.getPropertyValue('--primary-color').trim();
  
  // Create a slight trail effect
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  particles.forEach(p => {
    p.update();
    p.draw(primaryColor);
  });
  
  // Draw connecting lines (nodes)
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      const connectDistance = window.innerWidth < 768 ? 80 : 130;

      if (dist < connectDistance) {
        ctx.beginPath();
        ctx.strokeStyle = primaryColor;
        ctx.globalAlpha = 1 - (dist / connectDistance);
        ctx.lineWidth = 0.8;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
        ctx.globalAlpha = 1.0;
      }
    }
  }
  requestAnimationFrame(animateCanvas);
}

// Start
initCanvas();
animateCanvas();
