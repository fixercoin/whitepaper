 // script.js
let balance = 0;

function confirmLogin() {
    const walletAddress = document.getElementById('walletAddress').value;
    // Call PHP function to confirm login and get balance
    balance = <?php echo confirmLogin("walletAddress"); ?>;
    document.getElementById('balance').innerText = balance;
    document.getElementById('login').style.display = 'none';
    document.getElementById('mainPage').style.display = 'block';
}

function sendToken() {
    const recipientAddress = document.getElementById('sendAddress').value;
    const amount = parseFloat(document.getElementById('sendAmount').value);
    // Call PHP function to send token
    balance = <?php echo sendToken("recipientAddress", "amount"); ?>;
    document.getElementById('balance').innerText = balance;
}

function checkBalance() {
    // Call PHP function to check balance
    balance = <?php echo getBalance($_SESSION['walletAddress']); ?>;
    document.getElementById('balance').innerText = balance;
}

function receiveToken() {
    const amount = 1; // Example amount to receive
    balance = <?php echo receiveToken("amount"); ?>;
    document.getElementById('balance').innerText = balance;
}
