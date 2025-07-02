 class FixercoinWallet {
  constructor() {
    this.users = {};
    this.currentUser = null;
  }

  // Signup functionfunction
  signup(username, password) {
    if (!username || !password) {
      alert("Please enter both username and password");
      return;
    }
    if (this.users[username]) {
      alert("Username already exists");
      return;
    }
    this.users[username] = {
      password,
      balance: 0,
      history: []
    };
    alert("Signup successful");
  }

  // Login functionfunction
  login(username, password) {
    if (!username || !password) {
      alert("Please enter both username and password");
      return;
    }
    if (!this.users[username] || this.users[username].password !== password) {
      alert("Invalid username or password");
      return;
    }
    this.currentUser = username;
    alert("Login successful");
    this.showBalance();
  }

  // Show balance functionfunction
  showBalance() {
    if (!this.currentUser) {
      alert("Please login first");
      return;
    }
    const balance = this.users[this.currentUser].balance;
    document.getElementById("balance").innerText = balance;
  }

  // Add balance functionfunction
  addBalance(amount) {
    if (!this.currentUser) {
      alert("Please login first");
      return;
    }
    if (amount <= 0) {
      alert("Invalid amount");
      return;
    }
    this.users[this.currentUser].balance += amount;
    this.users[this.currentUser].history.push(`Added ${amount} Fixercoins`);
    this.showBalance();
    this.showHistory();
  }

  // Send functionfunction
  send(recipient, amount) {
    if (!this.currentUser) {
      alert("Please login first");
      return;
    }
    if (amount <= 0) {
      alert("Invalid amount");
      return;
    }
    if (!this.users[recipient]) {
      alert("Recipient not found");
      return;
    }
    if (this.users[this.currentUser].balance < amount) {
      alert("Insufficient balance");
      return;
    }
    this.users[this.currentUser].balance -= amount;
    this.users[recipient].balance += amount;
    this.users[this.currentUser].history.push(`Sent ${amount} Fixercoins to ${recipient}`);
    this.users[recipient].history.push(`Received ${amount} Fixercoins from ${this.currentUser}`);
    this.showBalance();
    this.showHistory();
  }

  // Show history functionfunction
  showHistory() {
    if (!this.currentUser) {
      alert("Please login first");
      return;
    }
    const historyList = this.users[this.currentUser].history;
    const historyHtml = historyList.map(item => `<li>${item}</li>`).join("");
    document.getElementById("history-list").innerHTML = historyHtml;
  }
}

const wallet = new FixercoinWallet();

// Signup event listener
document.getElementById("signup-btn").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  wallet.signup(username, password);
});

// Login event listener
document.getElementById("login-btn").addEventListener("click", () => {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  wallet.login(username, password);
});

// Add balance event listener
document.getElementById("add-balance-btn").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("amount").value);
  wallet.addBalance(amount);
});

// Send event listener
document.getElementById("send-btn").addEventListener("click", () => {
  const recipient = document.getElementById("recipient").value;
  const amount = parseFloat(document.getElementById("send-amount").value);
  wallet.send(recipient, amount);
});
