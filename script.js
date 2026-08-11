// ===== SCRIPT CHAOTIQUE - Z3phyrLand =====

const chaosBtn = document.getElementById('chaos-btn');
const counterDisplay = document.getElementById('counter-display');
const submitBtn = document.getElementById('submit-btn');
const form = document.getElementById('contact-form');

let clickCount = 0;

// Liste de phrases aléatoires pour le bouton
const buttonPhrases = [
    "🔥 Encore !",
    "💀 Aie mes yeux !",
    "🌈 Trop stylé !",
    "🤯 J'hallucine !",
    "😱 Arrête !",
    "🚀 On décolle !",
    "🍕 Pizza time !",
    "🦄 Licorne power !",
    "💩 C'est du lourd",
    "👽 Take me away"
];

// Fonction couleur aléatoire (bien flashy)
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Fonction pour changer le bordel
function applyChaos() {
    // Changer le fond
    document.body.style.backgroundColor = getRandomColor();
    
    // Changer la couleur du texte principal
    document.body.style.color = getRandomColor();

    // Changer le texte du bouton
    const randomIndex = Math.floor(Math.random() * buttonPhrases.length);
    chaosBtn.textContent = buttonPhrases[randomIndex];

    // Changer la couleur du bouton
    chaosBtn.style.backgroundColor = getRandomColor();
    chaosBtn.style.borderColor = getRandomColor();

    // Incrémenter le compteur
    clickCount++;
    counterDisplay.textContent = `👆 Clics : ${clickCount}`;

    // Bonus : changer le texte du footer au hasard
    const footerP = document.querySelector('footer p');
    const footers = [
        "© 2026 Z3phyrLand — Mon chat a codé ceci.",
        "© 2026 Z3phyrLand — Si tu lis ça, t'as trop de temps libre.",
        "© 2026 Z3phyrLand — Je suis payé en likes.",
        "© 2026 Z3phyrLand — Ce site est certifié BS.",
        "© 2026 Z3phyrLand — Je code mieux que je dors (faux)."
    ];
    footerP.textContent = footers[Math.floor(Math.random() * footers.length)];
}

// Écouteur du bouton chaos
chaosBtn.addEventListener('click', applyChaos);

// Gestion du formulaire
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!nom || !email || !message) {
        alert("😡 Hé ho ! T'as oublié un champ ! Même mon chat sait remplir un formulaire.");
        return;
    }

    // Réponse absolument pas professionnelle
    const reponses = [
        `Merci ${nom} ! Ton message "${message}" a été envoyé dans l'espace. (En vrai, il est dans ma boîte spam, je checkerai dans 3 mois).`,
        `Bravo ${nom} ! Tu as réussi à m'envoyer un message. Récompense : une image de chat dans ta tête.`,
        `${nom}, j'ai bien reçu ton mail. Je vais l'imprimer, le manger, et te répondre par télépathie.`,
        `Message de ${nom} reçu ! Je le garde précieusement dans mon dossier "trucs à lire quand je m'ennuie".`
    ];

    const reponseAleatoire = reponses[Math.floor(Math.random() * reponses.length)];
    alert(`📨 ${reponseAleatoire}`);
    
    // Reset du formulaire
    form.reset();
});

// Petit chaos au chargement de la page (pour l'accueil)
window.addEventListener('load', () => {
    document.body.style.backgroundColor = getRandomColor();
    chaosBtn.style.backgroundColor = getRandomColor();
    chaosBtn.textContent = "🎢 C'est parti !";
});
