// Varibles
let knowledge = 0;
let depression = 0;
let baseIncrease = 1;
let depressionStatus = "Ok";

/*
Ideas:

- Add when you get 100 knowledge you get awareness of your death time, showing an age timer
- When you get to age 50 you get a disease and die
- You CAN prevent this by getting higher VIT, which is unlocked by paying 100 knowledge



*/

// Knowledge accumilination system
document.getElementById("createKnowledge").addEventListener("click", () => {
    knowledge += baseIncrease;

    updateKnowledge();
});



function updateKnowledge() {
    document.getElementById("displayKnowledge").innerText = "Knowledge: " + knowledge;
};


// Chatbox creation to send a message

function say(message) {
    document.getElementById("messageplaceholder").innerText = message;
};


// Depression Mechanics + time
setInterval(() => {
    depression += (knowledge/10-10)

    if (depression>99) {
        depressionStatus = "Death awaits, calmly."
        depression = 100;
    }

    if (depression>50 && depression<99) {
        depressionStatus = "Sad"
    }

    if (depression<-50) {
        depressionStatus = "Happy"
    }
    if (depression<-100) {
        depression = -100;
        depressionStatus = "Overjoyed";
    };
    

    document.getElementById("displayDepression").innerText = "Mood: " + depressionStatus;

    updateTime();
}, 1000);
    
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



//Tabs
const TabButtons= document.querySelectorAll(".tab-button");

TabButtons.forEach(button => {
    button.addEventListener("click", () => {
        const tabId = button.dataset.tab;

        // Hides all tabs
        document.querySelectorAll(".tab-content").forEach(tab => {
            tab.style.display = "none";

        });

        // Shows selected tab
        document.getElementById(tabId).style.display = "block";
    });
});
