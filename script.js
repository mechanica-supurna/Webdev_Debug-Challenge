// Variable initialization
const statusText = document.getElementById('display-status');
const mainBtn = document.getElementById('action-btn');

// FAKE BUG: Console distraction
console.log("Loading modules... Done.");
console.error("Warning: Deprecated API call on line 14");

// REAL BUG: Even if fixed the CSS, the button listener 
// targets an ID that is slightly misspelled or logically trapped.
mainBtn.addEventListener('click', function() {
    // REAL BUG: A simple variable scope error
    let connectionSuccess = false;

    if (connectionSuccess == true) {
        statusText.innerHTML = "Online";
        statusText.style.color = "#2ecc71";
    } else {
        // Since connectionSuccess is false and never changed, 
        // this alert always fires.
        alert("Connection Error: Handshake failed.");
    }
});