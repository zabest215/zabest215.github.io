// Portfolio Content and 3D Coordinates Configuration
export const portfolioData = [
    {
        id: "reception",
        title: "Empfangshalle",
        btnText: "Empfang",
        pos: { x: 0, y: 0, z: 0 },
        cam: { x: 0, y: 3, z: 12 },
        color: 0x00e5ff,
        shape: "torus",
        content: `
            <h1>Willkommen im Innovationscampus</h1>
            <p><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300" style="width:110px;height:110px;border-radius:50%;margin-bottom:15px;"><p>Ich bin <strong>Zakariae Idrissi</strong>, ein hochmotivierter Student der Elektronik aus Marokko.</p></p>
            <p>Mein Ziel ist es, meine interkulturellen Kompetenzen und mein fundiertes technisches Wissen durch eine <strong>duale Ausbildung in Deutschland</strong> zu professionalisieren.</p>
            <h2>Mein Karriereziel</h2>
            <p>Ausbildung als <strong>Elektroniker für Automatisierungstechnik</strong> oder <strong>Fachinformatiker</strong> im starken deutschen Industriesektor.</p>
            <p><em>Wählen Sie unten eine Abteilung aus, um den Campus zu erkunden.</em></p>
        `
    },
    {
        id: "language",
        title: "Sprachlabor",
        btnText: "Sprachen",
        pos: { x: 25, y: 0, z: -20 },
        cam: { x: 25, y: 3, z: -8 },
        color: 0xffaa00,
        shape: "sphere",
        content: `
            <h1>Sprachkompetenz</h1>
            <p>Sprache ist der Schlüssel zur erfolgreichen Integration in den deutschen Arbeitsmarkt.</p>
            <h2>Deutsch <span style="font-size: 0.9rem; font-weight: normal;">(In intensiver Vorbereitung)</span></h2>
            <p><strong>Niveau:</strong> ÖSD B2 Zertifizierung</p>
            <p>Tägliches und systematisches Studium komplexer Grammatikstrukturen (z.B. Redepartikeln, Relativsätze), um im deutschen Berufsalltag präzise kommunizieren zu können.</p>
            <h2>Weitere Sprachen</h2>
            <ul>
                <li><strong>Arabisch:</strong> Muttersprache</li>
                <li><strong>Französisch:</strong> Fließend in Wort und Schrift</li>
                <li><strong>Englisch:</strong> Fließend in Wort und Schrift</li>
            </ul>
        `
    },
    {
        id: "projects",
        title: "Entwicklungszentrum",
        btnText: "Projekte",
        pos: { x: 45, y: 0, z: 15 },
        cam: { x: 45, y: 3, z: 27 },
        color: 0xff0055,
        shape: "cube",
        content: `
            <h1>Aktuelle Projekte</h1>
            <h2>Einachsiger Solar-Tracker</h2>
            <p>Ein interdisziplinäres Projekt, das Mechanik, Elektronik und Programmierung verbindet.</p>
            <ul>
                <li><strong>Hardware:</strong> Arduino-Microcontroller. Erfolgreicher Transfer der Prototypen-Schaltung vom Breadboard auf eine professionelle Lötverbindung.</li>
                <li><strong>Software & Logik (C++):</strong> Entwicklung einer präzisen Motorsteuerung. Ich habe den Code iterativ optimiert, um sicherzustellen, dass das System bei Sonnenuntergang fehlerfrei in die <strong>Ost-Position</strong> zurückkehrt.</li>
                <li><strong>Simulation:</strong> Das Solarmodul wurde im Prototyp spezifisch als <em>mechanische Gewichtssimulation</em> eingesetzt, um die physische Belastung der Motoren realitätsnah zu testen.</li>
            </ul>
            <a href="#" class="btn-action"><i class="fab fa-github"></i> Quellcode auf GitHub</a>
        `
    },
    {
        id: "academic",
        title: "Akademische Abteilung",
        btnText: "Bildung",
        pos: { x: 15, y: 0, z: 35 },
        cam: { x: 15, y: 3, z: 47 },
        color: 0xaa00ff,
        shape: "pyramid",
        content: `
            <h1>Bildungsweg</h1>
            <h2>Licence Électronique</h2>
            <p><strong>Faculty of Sciences Dhar El Mahraz (FSDM), Fès</strong></p>
            <p><em>Voraussichtlicher Abschluss: Mai 2026</em></p>
            <ul>
                <li>Fundiertes theorethisches Wissen in der Elektrotechnik und Schaltungstechnik.</li>
                <li>Anwendungsorientierte Projekte im Bereich erneuerbare Energien und Sensorik.</li>
                <li>Abschlussprojekt fokussiert auf Automatisierung und eingebettete Systeme.</li>
            </ul>
        `
    },
    {
        id: "skills",
        title: "Kompetenzlabor",
        btnText: "Skills",
        pos: { x: -25, y: 0, z: 20 },
        cam: { x: -25, y: 3, z: 32 },
        color: 0x00ffaa,
        shape: "icosahedron",
        content: `
            <h1>Technische Expertise</h1>
            <div class="tech-grid">
                <span class="badge"><i class="fas fa-microchip"></i> Eingebettete Systeme</span>
                <span class="badge"><i class="fas fa-code"></i> C++ & Arduino</span>
                <span class="badge"><i class="fas fa-network-wired"></i> Schaltungssimulation</span>
                <span class="badge"><i class="fas fa-fire-burner"></i> Löttechnik</span>
                <span class="badge"><i class="fas fa-desktop"></i> Proteus</span>
                <span class="badge"><i class="fas fa-chart-line"></i> MATLAB</span>
            </div>
            <h2>Moderne Workflows & KI</h2>
            <p>Ich arbeite hocheffizient, indem ich moderne KI-Werkzeuge in meinen Entwicklungsprozess integriere. Ich nutze aktiv <strong>Gemini Pro 1.5</strong>, sowie Claude und ChatGPT zur Fehlerbehebung, Code-Optimierung und zur Beschleunigung meiner Lernprozesse.</p>
        `
    },
    {
        id: "contact",
        title: "Kontaktbüro",
        btnText: "Kontakt",
        pos: { x: -35, y: 0, z: -15 },
        cam: { x: -35, y: 3, z: -3 },
        color: 0x0077ff,
        shape: "cylinder",
        content: `
            <h1>Lassen Sie uns vernetzen</h1>
            <p>Ich bin sofort einsatzbereit für Interviews und freue mich darauf, Sie in einem Gespräch von meiner Motivation und meinen Fähigkeiten zu überzeugen.</p>
            <div style="margin-top: 20px; display: flex; flex-direction: column; gap: 15px;">
                <a href="mailto:email@beispiel.de" style="color: var(--text-color); text-decoration: none;"><i class="fas fa-envelope" style="color: var(--primary); width: 25px;"></i> email@beispiel.de</a>
                <a href="#" style="color: var(--text-color); text-decoration: none;"><i class="fab fa-linkedin" style="color: var(--primary); width: 25px;"></i> LinkedIn Profil</a>
                <a href="#" style="color: var(--text-color); text-decoration: none;"><i class="fab fa-github" style="color: var(--primary); width: 25px;"></i> GitHub Portfolio</a>
            </div>
            <button class="btn-action" style="margin-top: 2rem; width: 100%;" onclick="alert('Nachrichtensystem im Demo-Modus. Bitte nutzen Sie die E-Mail.')">Nachricht senden</button>
        `
    }
];