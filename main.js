// Varibles
let knowledge = 0;
let depression = 0;
let baseIncrease = 1;
let depressionStatus = null;


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


// Depression Mechanics
setInterval(() => {
    depression += (knowledge/100-10)

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
}, 100);
    
// Time System
let day = 0;
let year = 14;

setInterval(() => {
    day += 1;
    updateTime();
    document.getElementById("displayDay").innerText = "Day: " + day;
    document.getElementById("displayYear").innerText = "Year: " + year;
}, 1000);

function updateTime() {
    if (day > 365) {
        day = 0;
        year += 1;
    };
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
