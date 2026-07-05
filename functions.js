// Display Loops
setInterval(() => {
    document.getElementById("displayKnowledge").innerText = "Knowledge: " + player.knowledge;

    solveMood();
    updateLifespan();
}, 20);


function solveMood() {
    let ratio = Math.min(player.knowledge/player.knowledgeCap, 1)
    mood = ratio*1000
    
    if (mood>=player.knowledgeCap) {
        mood = player.knowledgeCap;
        moodStatus = "Death awaits."
    }

    else if (mood>=(player.knowledgeCap*0.9)) {
        moodStatus = "Depressed."
    }

    else if (mood>(player.knowledgeCap*0.6) && mood<(player.knowledgeCap*0.9)) {
        moodStatus = "Sad."
    }
    
    else if (mood>(player.knowledgeCap*0.4) && mood<(player.knowledgeCap*0.6)) {
        moodStatus = "Alright."
    }

    else if (mood>(player.knowledgeCap*0.1) && mood<(player.knowledgeCap * 0.4)) {
        moodStatus = "Happy"
    }

    else if (mood<=(player.knowledgeCap*0.1)) {
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