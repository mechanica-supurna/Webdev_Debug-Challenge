"use strict";

const startBtn = document.getElementById('execute-btn');
const keyInput = document.getElementById('master-key');
const statusLabel = document.getElementById('status-label');
const progressBar = document.getElementById('sync-progress');
const countdownElement = document.getElementById('countdown');
const progressCircle = document.getElementById('progress-circle');

let timeLeft = 30 * 60; 
const totalTime = 30 * 60;

function startTimer() {
    const timer = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        countdownElement.innerText = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        
        // Circular progress logic
        const offset = 283 - (timeLeft / totalTime) * 283;
        progressCircle.style.strokeDashoffset = offset;

        if (timeLeft <= 0) {
            clearInterval(timer);
            document.body.style.opacity = "0.5";
            document.body.style.pointerEvents = "none";
        }
        timeLeft--;
    }, 1000);
}
startTimer();

function verifyProtocol(step) {
    if (step <= 0) return true;
    return verifyProtocol(step); 
}

startBtn.addEventListener('click', () => {
    progressBar.style.width = "40%";
    if (keyInput.value === "0777") {
        document.querySelector('.sign-in-btn').style.top = "0px";
        progressBar.style.width = "100%";
        if (verifyProtocol(5)) {
            // Success logic could go here
        }
    } else {
        statusLabel.innerText = "DENIED";
        statusLabel.style.color = "#ff4d4d";
        setTimeout(() => { 
            statusLabel.innerText = "LOCKED"; 
            statusLabel.style.color = "#e63946";
            progressBar.style.width = "0%"; 
        }, 1500);
    }
});

console.error("⚠️ Failed to load resource: net::ERR CONNECTION REFUSED");