// Display Loops
setInterval(() => {
    document.getElementById("displayKnowledge").innerText = "Knowledge: " + player.knowledge;

    solveMood();
    updateLifespan();
}, 20);


function solveMood() {
    let ratio = Math.min(player.knowledge/player.knowledgeCap, 1) // EQ for mood over ticks, base cap 1k
    mood = ratio*1000
    
    if (mood>=player.knowledgeCap) {
        mood = player.knowledgeCap;
        moodStatus = "Death awaits, calmly."
    }

    else if (mood>(player.knowledgeCap/25)) {
        moodStatus = "Sad"
    }

    else if (mood<=(player.knowledgeCap/75) && mood > 0) {
        moodStatus = "Happy"
    }

    else if (mood<=0) {
        mood = 0;
        moodStatus = "Overjoyed";
    } else {
        moodStatus = "Ok"
    }

    document.getElementById("displayMood").innerText = "Mood: " + moodStatus;
    
};


// Time System
let day = 0;
let year = 0;

function updateTime() {
    day += 1;
    if (day > 365) {
        day = 0;
        year += 1;
    };

    if (year>=lifespan) {
        initiateDeath();
    }

    document.getElementById("displayDay").innerText = "Day: " + day;
    document.getElementById("displayYear").innerText = "Age: " + year;
};

function updateLifespan() {
    const lifespanReal = lifespan.toFixed(2) // Sets decimals to max 0.XX
    document.getElementById("displayLifespan").innerText = "Lifespan: " + lifespanReal;
}

setInterval(() => {
    updateTime();
}, 1000);

function initiateDeath() {
    console.log("Player has died, end.")
}