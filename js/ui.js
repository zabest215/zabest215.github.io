import { portfolioData } from './data.js';
import { moveCameraToRoom } from './camera.js';
import { updateTheme as updateSceneTheme } from './scene.js';

const uiLayer = document.getElementById('ui-layer');
const uiContent = document.getElementById('ui-content');
const navContainer = document.getElementById('nav-container');
const themeBtn = document.getElementById('theme-toggle');

let currentRoomIndex = -1;

export function initUI() {
    // Generate Navigation Buttons
    portfolioData.forEach((room, index) => {
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.textContent = room.btnText;
        btn.onclick = () => navigateTo(index);
        navContainer.appendChild(btn);
    });

    // Theme Toggle Logic
    themeBtn.addEventListener('click', () => {
        const root = document.documentElement;
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        root.setAttribute('data-theme', newTheme);
        themeBtn.innerHTML = newTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
        
        // Notify 3D Scene
        updateSceneTheme(newTheme === 'dark');
    });
}

export function navigateTo(index) {
    if (currentRoomIndex === index) return;
    currentRoomIndex = index;

    // Hide UI
    uiLayer.classList.remove('active');
    
    // Update active button state
    document.querySelectorAll('.nav-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });

    // Trigger Camera Movement
    moveCameraToRoom(index, (roomData) => {
        // Upon arrival, update HTML and show UI
        uiContent.innerHTML = roomData.content;
        
        // Re-trigger CSS animation for content
        uiContent.classList.remove('fade-in');
        void uiContent.offsetWidth; // trigger reflow
        uiContent.classList.add('fade-in');

        uiLayer.classList.add('active');
    });
}