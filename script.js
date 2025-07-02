 // Function to login with Gmail
function loginWithGmail() {
  // Add login with Gmail functionality here
  console.log('Login with Gmail clicked');
  // You can use Google Sign-In API to implement login with Gmail
  // For example:
  // window.location.href = 'https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email';
}

// Function to signup with Gmail
function signupWithGmail() {
  // Add signup with Gmail functionality here
  console.log('Signup with Gmail clicked');
  // You can use Google Sign-In API to implement signup with Gmail
  // For example:
  // window.location.href = 'https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email';
}

// Function to check balance
function checkBalance() {
  // Add check balance functionality here
  console.log('Check Balance clicked');
  // For example:
  const balance = 1000; // Replace with actual balance
  document.getElementById('balance-display').innerText = `Your balance is: ${balance}`;
}

// Function to buy with Easypaisa
function buyWithEasypaisa() {
  // Add buy with Easypaisa functionality here
  console.log('Buy with Easypaisa clicked');
  const amount = document.getElementById('amount').value;
  // For example:
  if (amount > 0) {
    console.log(`Buying ${amount} with Easypaisa...`);
    // Implement Easypaisa payment gateway API here
  } else {
    alert('Invalid amount');
  }
}

// Function to send balance
function sendBalance() {
  // Add send balance functionality here
  console.log('Send Balance clicked');
  const recipient = document.getElementById('recipient').value;
  const sendAmount = document.getElementById('send-amount').value;
  // For example:
  if (recipient && sendAmount > 0) {
    console.log(`Sending ${sendAmount} to ${recipient}...`);
    // Implement send balance functionality here
  } else {
    alert('Invalid recipient or amount');
  }
}

// Function to view transaction history
function viewHistory() {
  // Add view transaction history functionality here
  console.log('View History clicked');
  // For example:
  const history = [
    { date: '2022-01-01', amount: 100 },
    { date: '2022-01-02', amount: 200 },
  ];
  const historyList = document.getElementById('history-list');
  historyList.innerHTML = '';
  history.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerText = `${item.date}: ${item.amount}`;
    historyList.appendChild(listItem);
  });
   }
