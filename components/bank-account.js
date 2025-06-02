document.addEventListener('DOMContentLoaded', () => {

    const bankAccount = createBankAccount();
    //get button andf fields

    const createAccountBtn = document.getElementById('create-account');
    const bankControls = document.getElementById('bank-controls');
    const depositBtn = document.getElementById('deposit');
    const withdrawBtn = document.getElementById('withdraw');
    const showBalanceBtn = document.getElementById('show-balance');
    const transactionAmount = document.getElementById('transaction-amount');
    const bankBalance = document.getElementById('show-balance');


    createAccountBtn.addEventListener('click', () => {
        bankControls.classList.remove('hidden');
        balance = 0;
        bankBalance.textContent = 'Balance: €0';
    });

    depositBtn.addEventListener('click', () => {
        const amount = parseFloat(transactionAmount.value);
        if (!isNaN(amount) && amount > 0) {
            balance += amount;
            bankBalance.textContent = `Balance: €${balance}`;
            transactionAmount.value = '';
        }
    });

    withdrawBtn.addEventListener('click', () => {
        const amount = parseFloat(transactionAmount.value);
        if (!isNaN(amount) && amount > 0 && amount <= balance) {
            balance -= amount;
            bankBalance.textContent = `Balance: €${balance}`;
            transactionAmount.value = '';
        }
    });

    showBalanceBtn.addEventListener('click', () => {
        bankBalance.textContent = `Balance: €${balance}`;
    });

    //function to create and retrieve bank account

    function createBankAccount() {

        let balance = 0; //
        let accountCreated = false;
        let accountNumber = null;
        let accountHolderName = null;
        let accountType = null;

        return {
            deposit: (amount) => {
                if (amount <= 0) {
                    alert("Deposit amount must be positive.");
                    return;
                }
                balance += amount;
                updateDisplay();
            },
            withdraw: (amount) => {
                if (amount <= 0) {
                    alert("Withdrawal amount must be positive.");
                    return;
                }
                if (amount > balance) {
                    alert("Insufficient funds.");
                    return;
                }
                balance -= amount;
                updateDisplay();
            },
            getBalance: () => {
                return balance;
            },
            createAccount: (name, type) => {

                accountCreated = true;
                accountNumber = Math.floor(Math.random() * 1000000000); // Generate a random account number
                accountHolderName = name;
                accountType = type;
                bankAccount.showAccountDetails();
            },
            showAccountDetails: () => {
                const bankControls = document.getElementById('bank-controls');
                const balanceDisplay = document.getElementById('bank-balance');
                balanceDisplay.textContent = `Balance: €${balance.toFixed(2)} (${accountType} Account for ${accountHolderName})`;
                bankControls.classList.remove('hidden');
            }
        }
    }
});