//Unlocked Variables
let showlifespantime = false;
let unlocked1 = false;

const unlock1btn = document.getElementById("unlock1")
const unlocklifespanTimer = document.getElementById("showlifespantimer")

setInterval(() => {
    // Shows VIT upgrade at 10 knowledge
    if (knowledge>9 && unlocked1 == false) {
        unlocked1 = true;
        unlock1btn.classList.remove("hidden")
        say("There's a plan I want to do. (Go to Inventions)")
    };
    
    // Shows lifespan UP at 125 knowledge
    if (knowledge>125 && showlifespantime == false) {
        showlifespantime = true;
        unlocklifespanTimer.classList.remove("hidden")
        say("Something deeper calls me...(in the Inventions tab!)")
    }


    
}, 500);

// Upgrade Purchasing
unlock1btn.addEventListener("click", () => { // Vit unlock Upgrade
    if (knowledge>99) {

        knowledge -= 100;
        unlock1btn.classList.add("hidden")
        document.getElementById("vitContainer").classList.remove("hidden")

    } else {
        say("Not enough knowledge! You don't know how to make a plan :(")
    }
});

unlocklifespanTimer.addEventListener("click", () => { // Unlock the timer above
    if (knowledge>999) {

        knowledge -= 1000;
        unlocklifespanTimer.classList.add("hidden")
        document.getElementById("displayLifespan").classList.remove("hidden")

    } else {
        say("How do you peer into the future without knowing anything! Get more insight buddy.")
    }
});