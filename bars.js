// Connections & Variables
let lifespan = 50;
let flexbuff = 0;

// Class OOP for progress bars
class ProgressBar {
    constructor(elementId, speed = 1, maxprogress = 100) {
        this.elementId = elementId;
        this.progress = 0;
        this.maxprogress = maxprogress;
        this.level = 1;
        this.speed = speed;
        this.element = document.getElementById(elementId);
    };
    
    update() {
        if (this.progress < this.maxprogress) {
            this.progress += this.speed;
            let widthPercent = Math.min((this.progress / this.maxprogress) * 100, 100);
            this.element.style.width = widthPercent + "%";
        } else {
            this.level++;
            this.progress = 0;
            
            // Increases exponentionally
            this.maxprogress = this.maxprogress*1.2;

            if (this.elementId == "vit") {
                lifespan += 0.1;
                
                if (this.level == 10) {
                    document.getElementById("flexContainer").classList.remove("hidden");
                }

            } else if (this.elementId == "flex") {
                flexbuff += 0.1;

            }
            
            updateAllSpeeds();
        };
    };

    reset() {
        this.progress = 0;
        this.level = 1;

    };

    getLevel() {
        return this.level;
    };
};

// Progress Bars
const vitBar = new ProgressBar("vit", 10, 100);
const flexBar = new ProgressBar("flex", 10, 100);
const knowledgeBar = new ProgressBar("knowledge", 10, 10000);



let activeBar = null;

// Update Progress Bars
function updateProgress() {

    if (activeBar === "vit") {
        vitBar.update();
        document.getElementById("vitLevelDisplay").innerText = "Vitality Level: " + vitBar.getLevel();
    } else if (activeBar === "flex") {
        flexBar.update();
        document.getElementById("flexLevelDisplay").innerText = "Flexibility Level: " + flexBar.getLevel();
    } else if (activeBar === "knowledge") {
        knowledgeBar.update();
        document.getElementById("knowledgeLevelDisplay").innerText = "Knowledge Level: " + knowledgeBar.getLevel();
}};


// Updates all speeds quickly
function updateAllSpeeds() {
    const baseSpeed = 10;
    vitBar.speed = baseSpeed + flexbuff;
    flexBar.speed = baseSpeed;
    knowledgeBar.speed = baseSpeed;
}

// Setting interval higher = worse transitioning rate
setInterval(updateProgress, 20);


// The buttons for progress bars, and their messages
document.getElementById("vitbtn").addEventListener("click", () => {
    activeBar = "vit";
});

document.getElementById("flexbtn").addEventListener("click", () => {
    activeBar = "flex";
});

document.getElementById("knowledgebtn").addEventListener("click", () => {
    activeBar = "knowledge";
});