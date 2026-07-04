
let mood = 0;
let moodStatus = "Ok";

const player = {
    knowledge: 0,
    knowledgeCap: 1000,
    baseKnowledgeIncrease: 1,

}


/*
Ideas:
- Knowledge Cap through mood
- Mood alters task progress (such as on vitality)
- Add chatbox message multiple
- Make it so you actually lose when the lifespan runs out
- Actually fix moood
- Add more to upgrade system

*/

// Knowledge accumilination system
document.getElementById("createKnowledge").addEventListener("click", () => {
    if (mood<player.knowledgeCap) {
        player.knowledge += player.baseKnowledgeIncrease;
    } else {
        console.log(`knowledge is ${player.knowledge}. Mood is ${mood}`)
    }

});

// Chatbox creation to send a message
function say(message) {
    document.getElementById("messageplaceholder").innerText = message;
};


// Tab code foreach
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
