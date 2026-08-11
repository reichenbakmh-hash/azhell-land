// ===== SCRIPT CHAOTIQUE – AzhellLand =====

const chaosBtn = document.getElementById('chaos-btn');
const counterDisplay = document.getElementById('counter-display');
const form = document.getElementById('contact-form');
const successDiv = document.getElementById('form-success');

let clickCount = 0;

// Phrases délirantes pour le bouton
const buttonPhrases = [
    "🔥 ENCORE !",
    "💀 AÏE MES YEUX !",
    "🌈 TROP STYLÉ !",
    "🤯 J'HALLUCINE !",
    "😱 ARRÊTE !",
    "🚀 ON DÉCOLLE !",
    "🍕 PIZZA TIME !",
    "🦄 LICORNE POWER !",
    "👽 Take me away",
    "🌋 BOOM !"
];

// Génère une couleur bien flashy
function getCrazyColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Applique le chaos visuel (mais garde le texte lisible)
function applyChaos() {
    // Fond flashy
    document.body.style.backgroundColor = getCrazyColor();
    
    // Couleur des titres (dégradé arc-en-ciel)
    const hue1 = Math.floor(Math.random() * 360);
    const hue2 = (hue1 + 60) % 360;
    document.querySelector('h1').style.background = `linear-gradient(45deg, hsl(${hue1}, 80%, 60%), hsl(${hue2}, 80%, 60%))`;
    document.querySelector('h1').style.webkitBackgroundClip = 'text';
    document.querySelector('h1').style.webkitTextFillColor = 'transparent';
    
    // Bordure des cartes
    const cards = document.querySelectorAll('section > *:not(h1)');
    cards.forEach(card => {
        card.style.borderColor = getCrazyColor();
        card.style.boxShadow = `0 0 40px ${getCrazyColor()}66`;
    });

    // Texte du bouton
    const randomIndex = Math.floor(Math.random() * buttonPhrases.length);
    chaosBtn.textContent = buttonPhrases[randomIndex];

    // Couleur du bouton
    chaosBtn.style.background = getCrazyColor();
    chaosBtn.style.borderColor = getCrazyColor();
    chaosBtn.style.boxShadow = `0 0 60px ${getCrazyColor()}77`;

    // Compteur
    clickCount++;
    counterDisplay.textContent = `👆 Clics : ${clickCount}`;

    // Footer : phrases moins IA, plus perso
    const footerP = document.querySelector('footer p');
    const footers = [
        "© 2026 AzhellLand — Bisous.",
        "© 2026 AzhellLand — Site créé entre deux placements boursiers.",
        "© 2026 AzhellLand — Mon meilleur investissement ? Ce site.",
        "© 2026 AzhellLand — Publication sous supervision de mon psy.",
        "© 2026 AzhellLand — Certifié par l'hôpital psychiatrique."
    ];
    footerP.textContent = footers[Math.floor(Math.random() * footers.length)];
}

chaosBtn.addEventListener('click', applyChaos);

// ===== FORMULAIRE AVEC FORMSPREE =====
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (!data.nom || !data.email || !data.message) {
        alert("😡 Hé ho ! T'as oublié un champ ! Même mon chat sait remplir un formulaire.");
        return;
    }

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            form.style.display = 'none';
            successDiv.style.display = 'block';
            // Célébration colorée
            document.body.style.backgroundColor = getCrazyColor();
            chaosBtn.style.background = getCrazyColor();
        } else {
            alert("😱 Oups ! Le message n'est pas parti. Réessaie ou envoie un pigeon voyageur.");
        }
    } catch {
        alert("💤 Le serveur fait la sieste. Réessaie dans 2 minutes.");
    }
});

// Chaos au chargement
window.addEventListener('load', () => {
    document.body.style.backgroundColor = getCrazyColor();
    chaosBtn.style.background = getCrazyColor();
    chaosBtn.textContent = "🎢 C'EST PARTI !";
});
