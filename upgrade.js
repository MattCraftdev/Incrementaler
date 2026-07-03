// Upgrade array
const upgrades = [
    {
        id: "unlock1",
        name: "Health Excercise Plan",
        description: "Unlocks the ability to increase your vitality.",
        cost: 100,
        unlocked: false,
        unlockamount: 10,
        flavortext: "There's a plan I want to do. (Go to Inventions)",
        purchased: false,
        onpurchase: () => {
            document.getElementById("vitContainer").classList.remove("hidden");
            say("You design a strict routine. Your physical form feels... resilient.");
        }
    },

    {
        id: "unlocklifespanTimer",
        name: "Lifespan Timer",
        description: "Unlocks the ability to see your lifespan.",
        cost: 1000,
        unlocked: false,
        unlockamount: 200,
        flavortext: "Something is being touched upon. You need to learn more to reveal it...",
        purchased: false,
        onpurchase: () => {
            document.getElementById("displayLifespan").classList.remove("hidden");
            say("You peer into the unknown. Your lifespan is revealed.");
        }
    },   

]

setInterval(() => {
    for (const loop of upgrades) {
        if (knowledge>loop.unlockamount && loop.unlocked == false) {
            loop.unlocked = true;
            document.getElementById(loop.id).classList.remove("hidden")        
            say(loop.flavortext)
        }
    };
}, 500);

function buyUpgrade(upgradeId) {
    const upgrade = upgrades.find(item => item.id === upgradeId);

    if (upgrade && upgrade.cost<=knowledge && upgrade.purchased == false) {

        knowledge -= upgrade.cost
        upgrade.purchased = true;
        document.getElementById(upgrade.id).classList.add("hidden")
        upgrade.onpurchase();

    };
};


document.getElementById("unlock1").addEventListener("click", () => { // Vit unlock Upgrade
    buyUpgrade("unlock1");
});
