// Knowledge exclusive loop
setInterval(() => {
    document.getElementById("displayKnowledge").innerText = "Knowledge: " + knowledge;  
}, 250);

// Time System
let day = 0;
let year = 14;

function updateTime() {
    day += 1;
    if (day > 365) {
        day = 0;
        year += 1;
    };

    document.getElementById("displayDay").innerText = "Day: " + day;
    document.getElementById("displayYear").innerText = "Age: " + year;
};

function updateLifespan() {
    document.getElementById("displayLifespan").innerText = "Lifespan: " + lifespan;
}

function solveMood() {
    mood = (knowledge-100) // EQ for mood over ticks

    if (mood>99) {
        moodStatus = "Death awaits, calmly."
        mood = 100;
    }

    if (mood<50) {
        moodStatus = "Sad"
    }

    if (mood<-50) {
        moodStatus = "Happy"
    }
    if (mood<-100) {
        mood = -100;
        moodStatus = "Overjoyed";
    };

    document.getElementById("displayMood").innerText = "Mood: " + moodStatus;
};

// Gameloop per second checker
setInterval(() => {
    solveMood();
    updateTime();
    updateLifespan();
}, 1000);