let knowledge = 0;


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

