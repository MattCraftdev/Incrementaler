// Display Loops
setInterval(() => {
    document.getElementById("displayKnowledge").innerText = "Knowledge: " + knowledge;

    solveMood();
    updateLifespan();
}, 20);

// Time System
let day = 0;
let year = 0;

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
    let ratio = Math.min(knowledge/knowledgeCap, 1) // EQ for mood over ticks, base cap 1k
    mood = ratio*1000
    
    if (mood>=knowledgeCap) {
        mood = knowledgeCap;
        moodStatus = "Death awaits, calmly."
    }

    else if (mood>(knowledgeCap/25)) {
        moodStatus = "Sad"
    }

    else if (mood<=(knowledgeCap/75) && mood > 0) {
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

// Time exclusive
setInterval(() => {
    updateTime();
    console.log(mood)
}, 1000);