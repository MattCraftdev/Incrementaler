// Connections & Variables

let lifespan = 50;
// Class OOP for progress bars

class ProgressBar {
    constructor(elementId, speed = 1, maxprogress = 100) {
        this.elementId = elementId;
        this.progress = 0;
        this.maxprogress = maxprogress;
        this.level = 1;
        this.speed = speed;
        this.element = document.getElementById(elementId);
    }
    
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
            }
            
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

let activeBar = null;
// Update Progress Bars
function updateProgress() {


    if (activeBar === "vit") {
        vitBar.update();
        document.getElementById("vitLevelDisplay").innerText = "Vitality Level: " + vitBar.getLevel();
    } else if (activeBar === "focus") {
        focusBar.update();
        document.getElementById("focusLevelDisplay").innerText = "Focus Level: " + focusBar.getLevel();

}};


// Updates all speeds quickly
function updateAllSpeeds() {
    const baseSpeed = 10;
    vitBar.speed = baseSpeed;
}

// Setting interval higher = worse transitioning rate
setInterval(updateProgress, 20);


// The buttons for progress bars, and their messages
document.getElementById("vitbtn").addEventListener("click", () => {
    activeBar = "vit";
});
