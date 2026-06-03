import * as THREE from 'https://unpkg.com/three@0.150.1/build/three.module.js';
import { portfolioData } from './data.js';

export let camera;

export function initCamera() {
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    // Initial position high up
    camera.position.set(0, 50, 50);
    camera.lookAt(0, 0, 0);
}

export function moveCameraToRoom(index, onCompleteCallback) {
    const room = portfolioData[index];
    
    // Animate Camera Position using GSAP
    gsap.to(camera.position, {
        x: room.cam.x,
        y: room.cam.y,
        z: room.cam.z,
        duration: 2.5,
        ease: "power3.inOut",
        onUpdate: () => {
            // Continuously look at the room center while moving
            camera.lookAt(room.pos.x, room.pos.y, room.pos.z);
        },
        onComplete: () => {
            if(onCompleteCallback) onCompleteCallback(room);
        }
    });
}