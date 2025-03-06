let homeEl = document.getElementById("home-number")
let guestEl = document.getElementById("guest-number")
let homeCount = 0;
let guestCount = 0;

function plus1home() {
    homeCount += 1;
    homeEl.textContent = homeCount;
}

function plus2home() {
    homeCount += 2;
    homeEl.textContent = homeCount;
}

function plus3home() {
    homeCount += 3;
    homeEl.textContent = homeCount;
}

function plus1guest() {
    guestCount += 1;
    guestEl.textContent = guestCount;
}

function plus2guest() {
    guestCount += 2;
    guestEl.textContent = guestCount;
}

function plus3guest() {
    guestCount += 3;
    guestEl.textContent = guestCount;
}