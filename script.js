// ===== SCRIPT MODERNE – Z3phyrLand (Tabnine-like) =====

const chaosBtn = document.getElementById('chaos-btn');
const counterDisplay = document.getElementById('counter-display');
const form = document.getElementById('contact-form');
const successDiv = document.getElementById('form-success');

let clickCount = 0;

// Phrases pour le bouton chaos (toujours aussi absurdes)
const buttonPhrases = [
    "✨ Encore une !",
    "🎨 Douceur visuelle",
    "🌙 Mode nuit+",
    "☀️ Mode jour-",
    "🌀 On tourne",
    "🌈 Pastel power",
    "🖌️ Nouvelle teinte",
    "🎭 Ambiance change"
];

// Génère un dégradé doux aléatoire (couleurs pastel ou sombres)
function getSoftGradient() {
    const hue1 = Math.floor(Math.random() * 360);
    const hue2 = (hue1 + 30 + Math.floor(Math.random() * 60)) % 360;
    return `linear-gradient(135deg, hsl(${hue1}, 50%, 15%), hsl(${hue2}, 50%, 20%))`;
}

// Génère une couleur d'accent (pour les titres, bordures)
function getAccentColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 60%)`;
}

// Fonction pour appliquer le chaos… mais en douceur
function applyChaos() {
    // Fond avec dégradé doux
    document.body.style.background = getSoftGradient();
    
    // Couleur des titres (h1) + slogan
    const accent = getAccentColor();
    document.querySelector('h1').style.setProperty('background', `linear-gradient(135deg, ${accent}, #bc8cff)`);
    document.querySelector('h1').style.webkitBackgroundClip = 'text';
    document.querySelector('h1').style.webkitTextFillColor = 'transparent';
    
    // Bordures des cartes
    const cards = document.querySelectorAll('section > *:not(h1)');
    cards.forEach(card => {
        card.style.borderColor = accent;
    });

    // Changer le texte du bouton
    const randomIndex = Math.floor(Math.random() * buttonPhrases.length);
    chaosBtn.textContent = buttonPhrases[randomIndex];

    // Changer couleur du bouton chaos
    chaosBtn.style.background = accent;
    chaosBtn.style.boxShadow = `0 4px 20px ${accent}66`;

    // Incrémenter compteur
    clickCount++;
    counterDisplay.textContent = `👆 Clics : ${clickCount}`;

    // Footer (petite blague)
    const footerP = document.querySelector('footer p');
    const footers = [
        "© AzhellLand — trop facile.",
        "© AzhellLand - j'arrête, j'arrête.",
        "© AzhellLand — Un site, mille couleurs.",
        "© AzhellLand — Imagine le meilleur message ici.",
        "© AzhellLand — T'inquiète, je m'ennuie aussi."
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
        alert("😅 Hé, il manque un champ ! Remplis tout, s'il te plaît.");
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
            // petit effet visuel
            document.body.style.background = 'linear-gradient(135deg, #0d1117, #1a2a1a)';
        } else {
            alert("🙈 Le message n'est pas parti. Réessaie ou envoie un pigeon voyageur.");
        }
    } catch {
        alert("💤 Le serveur fait la sieste. Réessaie dans 2 minutes.");
    }
});

// Au chargement : fond initial avec dégradé doux
window.addEventListener('load', () => {
    document.body.style.background = 'linear-gradient(135deg, #0d1117, #161b22)';
    chaosBtn.style.background = '#238636';
});
