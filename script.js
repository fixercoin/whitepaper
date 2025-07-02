 let users = {};
let currentUser = null;

// Signup functionality
document.getElementById("signup-btn").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    users[username] = {
        password,
        balance: 0,
        history: []
    };
    alert("Signup successful!");
});

// Login functionality
document.getElementById("login-btn").addEventListener("click", () => {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    if (users[username] && users[username].password === password) {
        currentUser = username;
        document.getElementById("auth").style.display = "none";
        document.getElementById("wallet").style.display = "block";
        updateBalance();
    } else {
        alert("Invalid username or password");
    }
});

// Add balance functionality
document.getElementById("add-balance-btn").addEventListener("click", () => {
    // Integrate with Fixorium API to add balance
    const amount = prompt("Enter amount to add:");
    users[currentUser].balance += parseFloat(amount);
    updateBalance();
});

// Send Fixercoin functionality
document.getElementById("send-btn").addEventListener("click", () => {
    // Integrate with Fixorium API to send Fixercoin
    const recipient = prompt("Enter recipient's username:");
    const amount = prompt("Enter amount to send:");
    if (users[currentUser].balance >= parseFloat(amount)) {
        users[currentUser].balance -= parseFloat(amount);
        users[recipient].balance += parseFloat(amount);
        users[currentUser].history.push(`Sent ${amount} Fixercoins to ${recipient}`);
        updateBalance();
    } else {
        alert("Insufficient balance");
    }
});

// Transaction history functionality
document.getElementById("history-btn").addEventListener("click", () => {
    const history = users[currentUser].history;
    document.getElementById("history").innerHTML = history.map(item => `<p>${item}</p>`).join("");
});

// Update balance functionality
function updateBalance() {
    document.getElementById("balance").innerText = users[currentUser].balance;
}
