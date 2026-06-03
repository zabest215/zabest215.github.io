# 3D Portfolio Campus - Zakariae Idrissi

Eine interaktive, dreidimensionale Portfolio-Website, entwickelt für die Bewerbung um einen Ausbildungsplatz in Deutschland als Elektroniker für Automatisierungstechnik oder Fachinformatiker.

## Architektur
Das Projekt nutzt modernste Frontend-Technologien und verzichtet bewusst auf ein Backend, um maximale Portabilität und Sicherheit zu gewährleisten. 
- **HTML5 & CSS3** (inklusive Glassmorphismus-UI)
- **Vanilla JavaScript (ES6 Modules)**
- **Three.js** für das 3D-Rendering
- **GSAP** für sanfte Kamerafahrten

## Lokale Ausführung
Da das Projekt ES6-Module (Import/Export) nutzt, kann die `index.html` nicht einfach per Doppelklick im Browser geöffnet werden (CORS-Richtlinien). 
Bitte starte einen lokalen Webserver:
1. Wenn du VS Code nutzt: Installiere die Erweiterung "Live Server" und klicke auf "Go Live".
2. Oder nutze Python: Öffne das Terminal in diesem Ordner und führe aus: `python3 -m http.server 8000`. Besuche dann `http://localhost:8000`.

## GitHub Pages Deployment
Das Projekt ist sofort bereit für GitHub Pages.
1. Erstelle ein neues Repository auf GitHub.
2. Lade den gesamten Inhalt dieses Ordners in das Repository hoch.
3. Gehe zu **Settings > Pages**.
4. Wähle unter "Build and deployment" die Quelle `Deploy from a branch`.
5. Wähle deinen `main` Branch aus und klicke auf Speichern.
6. Nach wenigen Minuten ist deine 3D-Website weltweit erreichbar!

## Anpassung
- Alle Texte, Räume und Koordinaten können in der Datei `js/data.js` angepasst werden.
- Die visuellen Stile, Farben und der Dark/Light-Mode können in `css/style.css` und `js/scene.js` editiert werden.
