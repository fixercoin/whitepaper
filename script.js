 // script.js
const createAccountForm = document.getElementById('create-account-form');
const depositForm = document.getElementById('deposit-form');
const transferForm = document.getElementById('transfer-form');
const checkBalanceBtn = document.getElementById('check-balance-btn');

createAccountForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  fetch('/create-account', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
});

depositForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const amount = document.getElementById('amount').value;
  fetch('/deposit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
});

transferForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const receiverId = document.getElementById('receiver-id').value;
  const amount = document.getElementById('transfer-amount').value;
  fetch('/transfer', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ receiverId, amount }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
});

checkBalanceBtn.addEventListener('click', () => {
  fetch('/balance')
    .then((res) => res.json())
    .then((data) => {
      document.getElementById('balance').innerText = `Balance: ${data.balance}`;
    })
    .catch((err) => console.error(err));
});
