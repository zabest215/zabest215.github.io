import * as THREE from 'https://unpkg.com/three@0.150.1/build/three.module.js';
import { initScene, scene, renderer, roomMeshes, particlesMesh } from './scene.js';
import { initCamera, camera } from './camera.js';
import { initUI, navigateTo } from './ui.js';

const clock = new THREE.Clock();

function init() {
    const container = document.getElementById('canvas-container');
    
    // Initialize Core Systems
    initScene(container);
    initCamera();
    initUI();

    // Handle Window Resize
    window.addEventListener('resize', onWindowResize, false);

    // Remove Loader & Start First Room
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            navigateTo(0); // Go to Reception
        }, 1000);
    }, 1500);

    // Start Render Loop
    animate();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Idle animations for room objects
    roomMeshes.forEach((item, index) => {
        item.mesh.rotation.y += 0.005;
        item.mesh.rotation.x += 0.002;
        // Gentle floating
        item.mesh.position.y = item.basePosY + Math.sin(elapsedTime * 1.5 + index) * 0.3;
    });

    // Slowly rotate particles
    if(particlesMesh) {
        particlesMesh.rotation.y = elapsedTime * 0.02;
    }

    renderer.render(scene, camera);
}

// Bootstrap Application
window.onload = init;