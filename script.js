 // script.js
let balanceUSD = 0;
let balanceTokens = 0;
let balancePKR = 0;

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Authentication logic here
    document.getElementById('login').style.display = 'none';
    document.getElementById('wallet').style.display = 'block';
}

function scanAddress() {
    // Camera scanning logic here
}

function sendToken() {
    const address = document.getElementById('address').value;
    const amount = document.getElementById('amount').value;
    // Logic to send token to the address
}

function receiveToken() {
    const address = document.getElementById('address').value;
    // Logic to receive token from the address
}
