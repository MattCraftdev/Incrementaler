// Upgrade array
const upgrades = [
    {
        id: "unlock1",
        description: "Unlocks the ability to increase your vitality.",
        cost: 100,
        unlocked: false,
        unlockamount: 10,
        unlocktypecost: "knowledge",
        flavortext: "There's a plan I want to do. (Go to Inventions)",
        purchased: 0,
        maxpurchases: 1,
        onpurchase: () => {
            document.getElementById("vitContainer").classList.remove("hidden");
            say("You design a strict routine. Your physical form feels... resilient.");
        }
    },

    {
        id: "unlocklifespanTimer",
        description: "Unlocks the ability to see your lifespan.",
        cost: 1000,
        unlocked: false,
        unlockamount: 200,
        unlocktypecost: "knowledge", 
        flavortext: "Something is being touched upon. You need to learn more to reveal it...",
        purchased: 0,
        maxpurchases: 1,
        onpurchase: () => {
            document.getElementById("displayLifespan").classList.remove("hidden");
            say("You peer into the unknown. Your lifespan is revealed.");
        }
    },

    {
        id: "unlock2",
        description: "Unlocks flexability",
        cost: 100,
        unlocked: false,
        unlockamount: 125,
        unlocktypecost: "knowledge",
        flavortext: "With your extensive knowledge, you gleaned to know exercise.",
        purchased: 0,
        maxpurchases: 1,
        onpurchase: () => {
            document.getElementById("flexContainer").classList.remove("hidden");
            say("");
        }
    },

    

]

setInterval(() => {
    for (const loop of upgrades) {
        if (knowledge>loop.unlockamount && loop.unlocked == false) {
            loop.unlocked = true;
            if (document.getElementById(loop.id).classList.contains("hidden")) {
                console.log(loop.id)
                document.getElementById(loop.id).classList.remove("hidden")
            }
                    
            say(loop.flavortext)
        };
    };
}, 500);

function buyUpgrade(upgradeId) {
    const upgrade = upgrades.find(item => item.id === upgradeId);

    if (upgrade && upgrade.cost<=knowledge && upgrade.purchased < upgrade.maxpurchases) {

        knowledge -= upgrade.cost
        upgrade.purchased += 1
        document.getElementById(upgrade.id).classList.add("hidden")
        upgrade.onpurchase();
        console.log(upgrade)

    };
};


// Button to buying upgrades
document.getElementById("unlock1").addEventListener("click", () => {
    buyUpgrade("unlock1");
});

document.getElementById("unlock2").addEventListener("click", () => {
    buyUpgrade("unlock2");
});


document.getElementById("unlocklifespanTimer").addEventListener("click", () => {
    buyUpgrade("unlocklifespanTimer");
});

