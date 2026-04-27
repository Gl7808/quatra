// Event data object
const tournamentEvent = {
    title: "QUATTRA OPEN 2026",
    subtitle: "Турнир по Counter Strike 2. 5x5 team",
    date: new Date("2026-05-08"), // Event date
    backgroundImage: "../images/cyber/openteam.png"
};

// DOM Elements
const tournamentSection = document.querySelector(".pinned-panel--1");
const titleEl = document.querySelector(".tournament__title h1");
const subtitleEl = document.querySelector(".tournament__subtitle");
const tournamentEl = document.querySelector(".tournament");
const timerContainers = document.querySelectorAll(".timer__container");
const dateEl = document.createElement("p");
dateEl.className = "tournament__date";

// Generate content from object
function initTournament() {
    titleEl.textContent = tournamentEvent.title;
    subtitleEl.textContent = tournamentEvent.subtitle;
    tournamentEl.style.backgroundImage = `url("${tournamentEvent.backgroundImage}")`;

    // Add date display
    const dateString = tournamentEvent.date.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
    // dateEl.textContent = `${dateString}`;
    document.querySelector(".tournament__title").appendChild(dateEl);

    updateTimer();
    setInterval(updateTimer, 1000);
}

// Timer logic
function updateTimer() {
    const now = new Date();
    const diff = tournamentEvent.date - now;

    if (diff <= 0) {
        timerContainers.forEach((container, index) => {
            container.querySelector(".timer__number").textContent = "00";
        });
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const values = [days, hours, minutes, seconds];
    const labels = ["Дней", "Часов", "Минут", "Секунд"];

    timerContainers.forEach((container, index) => {
        const numberEl = container.querySelector(".timer__number");
        const textEl = container.querySelector(".timer__text");
        numberEl.textContent = String(values[index]).padStart(2, "0");
        textEl.textContent = labels[index];
    });
}

// Initialize
initTournament();