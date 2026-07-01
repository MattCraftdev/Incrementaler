let knowledge = 0;
let baseIncrease = 1;



document.getElementById("createKnowledge").addEventListener("click", () => {
    knowledge += baseIncrease;
    updateKnowledge();
});


function updateKnowledge() {
    document.getElementById("displayKnowledge").innerText = "Knowledge: " + knowledge;
}



// Time System
let day = 0;
let year = 14;

setInterval(() => {
    day += 1;
    updateTime();
    document.getElementById("displayDay").innerText = "Day: " + day;
    document.getElementById("displayYear").innerText = "Year: " + year;
}, 50);

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
