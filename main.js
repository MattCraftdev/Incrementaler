// Varibles
let knowledge = 0;
let knowledgeCap = 1000;
let mood = 0;
let baseIncrease = 1;
let moodStatus = "Ok";

/*
Ideas:
- Knowledge Cap through mood
- Mood alters task progress (such as on vitality)

*/

// Knowledge accumilination system
document.getElementById("createKnowledge").addEventListener("click", () => {
    if (mood<knowledgeCap) {
        knowledge += baseIncrease;
    } else {
        say(`knowledge is ${knowledge}. Mood is ${mood}`)
    }

});

// Chatbox creation to send a message
function say(message) {
    document.getElementById("messageplaceholder").innerText = message;
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
