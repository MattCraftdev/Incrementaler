// Upgrade array for each
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
        unlocktypecost: "vitlevel",
        flavortext: "With your extensive knowledge, you gleaned to know exercise.",
        purchased: 0,
        maxpurchases: 1,
        onpurchase: () => {
            document.getElementById("flexContainer").classList.remove("hidden");
            say("A new manual appears of out thin air. 'Flex-guide by ghosts!' Sounds spooky.");
        }
    },

    {
        id: "unlockwisdombtn",
        description: "The act of transfering knowledge into wisdom.",
        cost: 35,
        unlocked: false,
        unlockamount: 25,
        unlocktypecost: "knowledge",
        flavortext: "You feel a calling to something more.",
        purchased: 0,
        maxpurchases: 1,
        onpurchase: () => {
            document.getElementById("switchtoWisdom").classList.remove("hidden");
            say("A white beard sprouts on your chin, and your back teeth emerge.");
        }
    },

]

// Checks if any upgrade can be unlocked

setInterval(() => {
    for (const loop of upgrades) {
        if (player[loop.unlocktypecost]>loop.unlockamount && loop.unlocked == false) {
            loop.unlocked = true;
            if (document.getElementById(loop.id).classList.contains("hidden")) {
                console.log(loop.id)
                document.getElementById(loop.id).classList.remove("hidden")
            }
                    
            say(loop.flavortext)
        };
    };
}, 500);

// Buying the upgrade
function buyUpgrade(upgradeId) {
    const upgrade = upgrades.find(item => item.id === upgradeId);

    if (upgrade && upgrade.cost<=player[upgrade.unlocktypecost] && upgrade.purchased < upgrade.maxpurchases) {

        player[upgrade.unlocktypecost] -= upgrade.cost
        upgrade.purchased += 1
        document.getElementById(upgrade.id).classList.add("hidden")
        upgrade.onpurchase();
        console.log(upgrade)

    };
};

// For each button, when clicked buy the upgrade
for (const btns of upgrades) {
    document.getElementById(btns.id).addEventListener("click", () => {
    buyUpgrade(btns.id);
    });
};