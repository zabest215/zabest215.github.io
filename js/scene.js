import * as THREE from 'https://unpkg.com/three@0.150.1/build/three.module.js';
import { portfolioData } from './data.js';

export let scene, renderer, particlesMesh;
export const roomMeshes = [];

export function initScene(canvasContainer) {
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050914, 0.015);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    canvasContainer.appendChild(renderer.domElement);

    // Global Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
    dirLight.position.set(20, 50, 20);
    scene.add(dirLight);

    // Create Environment / Rooms
    portfolioData.forEach((room) => {
        createRoomPlatform(room);
    });

    createParticles();
}

function createRoomPlatform(room) {
    // Platform Base
    const floorGeo = new THREE.CylinderGeometry(8, 8, 0.5, 32);
    const floorMat = new THREE.MeshPhysicalMaterial({
        color: room.color,
        transparent: true,
        opacity: 0.3,
        roughness: 0.1,
        transmission: 0.9,
        thickness: 1.0
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.position.set(room.pos.x, room.pos.y - 1.5, room.pos.z);
    scene.add(floor);

    // Central Floating Object representing the room
    let coreGeo;
    switch(room.shape) {
        case "torus": coreGeo = new THREE.TorusKnotGeometry(1.2, 0.4, 64, 16); break;
        case "sphere": coreGeo = new THREE.SphereGeometry(1.5, 32, 32); break;
        case "cube": coreGeo = new THREE.BoxGeometry(2, 2, 2); break;
        case "pyramid": coreGeo = new THREE.ConeGeometry(1.5, 2.5, 4); break;
        case "icosahedron": coreGeo = new THREE.IcosahedronGeometry(1.5, 0); break;
        case "cylinder": coreGeo = new THREE.CylinderGeometry(1, 1, 3, 16); break;
        default: coreGeo = new THREE.BoxGeometry(2, 2, 2);
    }

    const coreMat = new THREE.MeshStandardMaterial({
        color: room.color,
        emissive: room.color,
        emissiveIntensity: 0.5,
        wireframe: (room.shape === "icosahedron" || room.shape === "torus")
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.position.set(room.pos.x, room.pos.y + 1.5, room.pos.z);
    scene.add(core);
    
    // Add point light to make it glow
    const pointLight = new THREE.PointLight(room.color, 1.5, 25);
    pointLight.position.set(room.pos.x, room.pos.y + 2, room.pos.z);
    scene.add(pointLight);

    roomMeshes.push({ mesh: core, basePosY: room.pos.y + 1.5 });
}

function createParticles() {
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 150;
    }
    
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMat = new THREE.PointsMaterial({
        size: 0.15,
        color: 0x00e5ff,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
    });
    
    particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);
}

export function updateTheme(isDark) {
    if(!scene) return;
    const bgColor = isDark ? 0x050914 : 0xf0f4f8;
    scene.fog.color.setHex(bgColor);
}