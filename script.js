// Datenstruktur für die Räume und Inhalte
const portfolioData = [
    {
        id: "entrance",
        title: "Eingangshalle",
        btnText: "Start",
        content: `
            <h1>Willkommen</h1>
            <p>Ich bin <strong>Zakariae Idrissi</strong>, ansässig in Fès, und strebe eine Ausbildung als <strong>Elektroniker für Automatisierungstechnik</strong> oder <strong>Fachinformatiker</strong> in Deutschland an.</p>
            <p>Dieses interaktive Smart House präsentiert meinen Werdegang, meine technischen Fähigkeiten und meine interkulturelle Kompetenz.</p>
            <p><em>Navigieren Sie über das Menü unten durch die Räume.</em></p>
        `,
        position: { x: 0, y: 0, z: 0 },
        cameraPos: { x: 0, y: 5, z: 20 },
        color: 0x00e5ff
    },
    {
        id: "education",
        title: "Bildung",
        btnText: "Bildung",
        content: `
            <h1>Akademischer Weg</h1>
            <h2>Licence Électronique</h2>
            <p><strong>Faculty of Sciences Dhar El Mahraz (FSDM), Fès</strong></p>
            <p>Voraussichtlicher Abschluss: <strong>2026</strong></p>
            <ul>
                <li>Fundierte Ausbildung in Elektronik und Automatisierung.</li>
                <li>Schwerpunkt auf eingebetteten Systemen und Schaltungsdesign.</li>
                <li>Vorbereitung auf komplexe industrielle Anforderungen.</li>
            </ul>
        `,
        position: { x: 30, y: 0, z: -30 },
        cameraPos: { x: 30, y: 5, z: -10 },
        color: 0x0077ff
    },
    {
        id: "projects",
        title: "Projekte",
        btnText: "Projekte",
        content: `
            <h1>Labor & Projekte</h1>
            <h2>Einachsiger Solar-Tracker</h2>
            <p>Entwicklung, Programmierung und Simulation eines Nachführsystems.</p>
            <ul>
                <li><strong>Logik:</strong> Präzise Motorsteuerung via C++, die sicherstellt, dass das System bei Sonnenuntergang exakt in die Ost-Position zurückkehrt.</li>
                <li><strong>Hardware:</strong> Arduino-Microcontroller. Erfolgreicher Übergang von Breadboards zu dauerhaften Lötverbindungen.</li>
                <li><strong>Mechanik:</strong> Einsatz des Solarmoduls als mechanische Gewichtssimulation zur Validierung der Motorkraft.</li>
            </ul>
            <a href="#" class="btn-action"><i class="fab fa-github"></i> GitHub Code</a>
        `,
        position: { x: 60, y: 0, z: 0 },
        cameraPos: { x: 60, y: 5, z: 20 },
        color: 0xff00e5
    },
    {
        id: "skills",
        title: "Kompetenzen",
        btnText: "Skills",
        content: `
            <h1>Skills & Tools</h1>
            <h2>Hard Skills</h2>
            <div>
                <span class="badge">C++</span>
                <span class="badge">Arduino</span>
                <span class="badge">Löttechnik</span>
                <span class="badge">Schaltungsdesign</span>
                <span class="badge">Proteus</span>
                <span class="badge">MATLAB</span>
            </div>
            <h2>KI & Moderne Workflows</h2>
            <p>Routinierter Einsatz moderner KI-Assistenzsysteme zur Code-Optimierung und Recherche (Gemini Pro 1.5, Claude, ChatGPT).</p>
        `,
        position: { x: 30, y: 0, z: 30 },
        cameraPos: { x: 30, y: 5, z: 50 },
        color: 0x00ff77
    },
    {
        id: "languages",
        title: "Sprachen",
        btnText: "Sprachen",
        content: `
            <h1>Sprachkenntnisse</h1>
            <h2>Deutsch</h2>
            <p><strong>Niveau:</strong> ÖSD B2 (in Vorbereitung)</p>
            <p>Intensives Studium komplexer Grammatikstrukturen (z.B. Redepartikeln, Relativsätze) zur optimalen Integration im deutschen Berufsalltag.</p>
            <h2>Weitere Sprachen</h2>
            <ul>
                <li><strong>Arabisch:</strong> Muttersprache</li>
                <li><strong>Französisch:</strong> Fließend</li>
                <li><strong>Englisch:</strong> Fließend</li>
            </ul>
        `,
        position: { x: -30, y: 0, z: 30 },
        cameraPos: { x: -30, y: 5, z: 50 },
        color: 0xffaa00
    },
    {
        id: "contact",
        title: "Kontaktbüro",
        btnText: "Kontakt",
        content: `
            <h1>Lassen Sie uns sprechen</h1>
            <p>Ich bin hochmotiviert, meine Fähigkeiten im Rahmen einer Ausbildung in Deutschland unter Beweis zu stellen.</p>
            <ul>
                <li><i class="fas fa-envelope"></i> zakariae.idrissi@example.com</li>
                <li><i class="fas fa-map-marker-alt"></i> Fès, Marokko</li>
            </ul>
            <a href="mailto:test@test.com" class="btn-action">E-Mail senden</a>
        `,
        position: { x: -30, y: 0, z: -30 },
        cameraPos: { x: -30, y: 5, z: -10 },
        color: 0xff0000
    }
];

// Three.js Setup
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x050914, 0.015);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Beleuchtung
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(50, 100, 50);
scene.add(dirLight);

// Hilfsfunktion für Glas-Material
const createGlassMaterial = (colorHex) => {
    return new THREE.MeshPhysicalMaterial({
        color: colorHex,
        metalness: 0.2,
        roughness: 0.1,
        transmission: 0.8, // Glas-Effekt
        thickness: 0.5,
        transparent: true,
        opacity: 0.7
    });
};

// Räume (Plattformen) generieren
const roomMeshes = [];
portfolioData.forEach((room) => {
    // Raum-Basis (Boden)
    const floorGeometry = new THREE.CylinderGeometry(10, 10, 0.5, 32);
    const floorMaterial = createGlassMaterial(room.color);
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.set(room.position.x, room.position.y - 2, room.position.z);
    scene.add(floor);

    // Schwebendes Objekt als Raum-Zentrum
    const coreGeometry = new THREE.IcosahedronGeometry(2, 0);
    const coreMaterial = new THREE.MeshStandardMaterial({ 
        color: room.color, 
        emissive: room.color,
        emissiveIntensity: 0.5,
        wireframe: true 
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    core.position.set(room.position.x, room.position.y + 3, room.position.z);
    scene.add(core);
    
    // Lichtquelle im Raum
    const pointLight = new THREE.PointLight(room.color, 2, 50);
    pointLight.position.set(room.position.x, room.position.y + 5, room.position.z);
    scene.add(pointLight);

    roomMeshes.push(core);
});

// Partikel im Hintergrund
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 1500;
const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 200;
}
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const particlesMaterial = new THREE.PointsMaterial({
    size: 0.2,
    color: 0x00e5ff,
    transparent: true,
    opacity: 0.5
});
const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// Navigation und UI Logic
const navContainer = document.getElementById('nav-container');
const uiLayer = document.getElementById('ui-layer');
const dynamicContent = document.getElementById('dynamic-content');
let currentRoomIndex = -1;

function goToRoom(index) {
    if (currentRoomIndex === index) return;
    currentRoomIndex = index;
    const room = portfolioData[index];

    // UI ausblenden
    uiLayer.style.opacity = '0';

    // Buttons updaten
    document.querySelectorAll('.nav-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });

    // Kamera animieren (GSAP)
    gsap.to(camera.position, {
        x: room.cameraPos.x,
        y: room.cameraPos.y,
        z: room.cameraPos.z,
        duration: 2,
        ease: "power3.inOut",
        onUpdate: () => {
            camera.lookAt(room.position.x, room.position.y + 2, room.position.z);
        },
        onComplete: () => {
            // UI Inhalt updaten und einblenden
            dynamicContent.innerHTML = room.content;
            uiLayer.style.opacity = '1';
        }
    });
}

// Menü aufbauen
portfolioData.forEach((room, index) => {
    const btn = document.createElement('button');
    btn.className = 'nav-btn';
    btn.textContent = room.btnText;
    btn.onclick = () => goToRoom(index);
    navContainer.appendChild(btn);
});

// Animations-Loop
const clock = new THREE.Clock();
function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Objekte rotieren
    roomMeshes.forEach((mesh, index) => {
        mesh.rotation.y += 0.005;
        mesh.rotation.x += 0.002;
        // Sanftes Schweben
        mesh.position.y = portfolioData[index].position.y + 3 + Math.sin(elapsedTime * 2 + index) * 0.5;
    });

    // Partikel langsam drehen
    particlesMesh.rotation.y = elapsedTime * 0.05;

    renderer.render(scene, camera);
}

// Window Resize Handling
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Audio Toggle
const audio = document.getElementById('bg-audio');
const audioBtn = document.getElementById('audio-toggle');
let isPlaying = false;

audioBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        audioBtn.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        audio.play();
        audioBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
    isPlaying = !isPlaying;
});

// Init
window.onload = () => {
    // Ladebildschirm entfernen
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
            // Start bei Raum 0
            goToRoom(0);
            animate();
        }, 1000);
    }, 1500); // Kurzer künstlicher Delay für den Lade-Effekt
};
