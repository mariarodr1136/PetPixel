// Initialize pet stats
let hunger = 50;
let happiness = 50;
let energy = 50;

// Update displayed stats
function updateStats() {
    document.getElementById("hunger").innerText = hunger;
    document.getElementById("happiness").innerText = happiness;
    document.getElementById("energy").innerText = energy;
}

// Update pet's mood
function updateMood() {
    const petStatus = document.getElementById("pet-status");

    if (hunger > 70) {
        petStatus.innerText = "Your pet is hungry!";
    } else if (happiness < 30) {
        petStatus.innerText = "Your pet feels sad!";
    } else if (energy < 30) {
        petStatus.innerText = "Your pet is sleepy!";
    } else {
        petStatus.innerText = "Your pet is feeling happy!";
    }
}

// Actions for feeding, playing, and sleeping
function feedPet() {
    hunger = Math.max(0, hunger - 10);
    energy = Math.max(0, energy - 5);
    happiness = Math.min(100, happiness + 5);
    updateStats();
    updateMood();
}

function playWithPet() {
    hunger = Math.min(100, hunger + 10);
    energy = Math.max(0, energy - 10);
    happiness = Math.min(100, happiness + 15);
    updateStats();
    updateMood();
}

function putPetToSleep() {
    energy = Math.min(100, energy + 20);
    happiness = Math.min(100, happiness - 5);
    hunger = Math.min(100, hunger + 5);
    updateStats();
    updateMood();
}

// Gradually increase hunger and decrease happiness over time
setInterval(() => {
    hunger = Math.min(100, hunger + 1);
    happiness = Math.max(0, happiness - 1);
    energy = Math.max(0, energy - 1);
    updateStats();
    updateMood();
}, 3000); // every 3 seconds
