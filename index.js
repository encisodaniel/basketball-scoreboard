let home = document.getElementById("home-points");
let guest = document.getElementById("guest-points");
let res = document.getElementById("reset")
let homePoints = 0;
let guestPoints = 0;

function hadd1() {
    homePoints += 1;
    home.textContent = homePoints;
}

function hadd2() {
    homePoints += 2;
    home.textContent = homePoints;
}
function hadd3() {
    homePoints += 3;
    home.textContent = homePoints;
}

function gadd1() {
    guestPoints += 1;
    guest.textContent = guestPoints;
}

function gadd2() {
    guestPoints += 2;
    guest.textContent = guestPoints;
}

function gadd3() {
    guestPoints += 3;
    guest.textContent = guestPoints;
}

function reset() {
    homePoints = 0;
    guestPoints = 0;
    home.textContent = 0;
    guest.textContent = 0;
}