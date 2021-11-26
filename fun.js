const COK = document.getElementById("cok")
const NUM = document.getElementById("num")
const PL = document.getElementById("pl")
const CPSD = document.getElementById("cp")
const clickAmount = document.getElementByID("")
let copese;

function updateDisplay() {
    NUM.innerHTML = `Cookies: ${Math.round(cookies)}`
    CPSD.innerHTML = `CPS: ${copese}`
    PL.innerHTML = `<ul id="pl" class="pl my-2">
    <h2>Purchases</h2>
    <li>Cookie slaves: ${incomeSources.slaves}</li>
    <li>Cookie summoners: ${incomeSources.summoners}</li>
    <li>Cookie robots: ${incomeSources.robot}</li>
    <li>Cookie factories: ${incomeSources.factories}</li>
    <li>Cookie volcanoes: ${incomeSources.volcanoes}</li>
    </ul>`
}

let cookies = 0;

let incomeSources = {
    slaves: 0,
    summoners: 0,
    robot: 0,
    factories: 0,
    volcanoes: 0
};

let prices = {
    slaves: 50,
    summoners: 500,
    robot: 5000,
    factories: 50000,
    volcanoes: 500000
}

let cps = {
    slaves: 1,
    summoners: 10,
    robot: 100,
    factories: 1000,
    volcanoes: 10000
};

setInterval(() =>{
    cookies += (incomeSources.slaves * cps.slaves)/100; 
    cookies += (incomeSources.summoners * cps.summoners)/100; 
    cookies += (incomeSources.robot * cps.robot)/100; 
    cookies += (incomeSources.factories * cps.factories)/100; 
    cookies += (incomeSources.volcanoes * cps.volcanoes)/100; 

    copese = (incomeSources.slaves * cps.slaves) +
        (incomeSources.summoners * cps.summoners) +
        (incomeSources.robot * cps.robot) + 
        (incomeSources.factories * cps.factories) +
        (incomeSources.volcanoes * cps.volcanoes); 
    updateDisplay();
},1000/100)

COK.addEventListener("click", (e) => {
    cookies += clickAmount;
    updateDisplay();
});

function buySlaves() {
    if (cookies >= prices.slaves ) {
        cookies -=prices.slaves
        incomeSources.slaves++
    } else {
        console.log("You dont have enough cookies");
    }
    updateDisplay();
}
function buySummoners() {
    if (cookies >= prices.summoners ) {
        cookies -=prices.summoners
        incomeSources.summoners++
    } else {
        console.log("You dont have enough cookies");
    }
    updateDisplay();
}
function buyRobots() {
    if (cookies >= prices.robot ) {
        cookies -=prices.robot
        incomeSources.robot++
    } else {
        console.log("You dont have enough cookies");
    }
    updateDisplay();
}
function buyFactories() {
    if (cookies >= prices.factories ) {
        cookies -=prices.factories
        incomeSources.factories++
    } else {
        console.log("You dont have enough cookies");
    }
    updateDisplay();
}
function buyVolcanoes() {
    if (cookies >= prices.volcanoes ) {
        cookies -=prices.volcanoes
        incomeSources.volcanoes++
    } else {
        console.log("You dont have enough cookies");
    }
    updateDisplay();
}

function gC(x) {
    cookies +=  x;
    updateDisplay();
}
