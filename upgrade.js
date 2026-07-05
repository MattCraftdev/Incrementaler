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
            document.getElementById("displayWisdom").classList.remove("hidden");
            say("A white beard sprouts on your chin, and your back teeth emerge.");
        }
    },

    {
        id: "unlockknowledgebtn",
        description: "Know thyself.",
        cost: 10,
        unlocked: false,
        unlockamount: 4,
        unlocktypecost: "wisdom",
        flavortext: "You feel a calling to something more.",
        purchased: 0,
        maxpurchases: 1,
        onpurchase: () => {
            document.getElementById("knowledgeContainer").classList.remove("hidden");
            say("Learning with life");
        }
    },

]

// Checks if any upgrade can be unlocked

const inventionsBtn = document.querySelector('[data-tab = "Inventions"]');

setInterval(() => {
    for (const loop of upgrades) {
        if (player[loop.unlocktypecost]>loop.unlockamount && loop.unlocked == false) {
            
            if (inventionsBtn.classList.contains("glow")) {

            } else {
            inventionsBtn.classList.add("glow");
            console.log(`Added glow using ${inventionsBtn.classList.contains("glow")}`)

            }

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