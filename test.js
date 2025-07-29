const prompt = require('prompt-sync')();
const accounts = [
    {
        name: "Waqas",
        balance: 4500,
        pin: 1234,
        accountNumber: 3456
    },
    {
        name: "Aisha",
        balance: 3200,
        pin: 5678,
        accountNumber: 7890
    },
    {
        name: "Salman",
        balance: 1500,
        pin: 1111,
        accountNumber: 1122
    },
    {
        name: "Faris",
        balance: 9800,
        pin: 4321,
        accountNumber: 3344
    }
];
console.log(accounts);


console.log(`
╔════════════════════════════════════════════╗
║🌟 Welcome to Banking Management System 🌟  ║
╠════════════════════════════════════════════╣
║ 1. 🏦 Open New Account                     ║
║ 2. 🔐 Login Into An Existing Account       ║
║ 3. 🛠️  Admin Login                          ║
║ 4. ❌ Exit                                 ║
╚════════════════════════════════════════════╝
`);

let option = prompt("Enter your option Number: ");

option = Number(option);
while(true){
switch(option){
    case 1:
        createAccount(accounts);
        break;
    
    case 2:
        accountLogin(accounts);
        break;
    
    case 3:
        console.log("Admin Login");
        break;

    case 4:
        console.log("Exit");
        process.exit();
}}



function createAccount(accounts){
    console.log("Open New Account");
        const name = prompt("Enter your name: ");
        const balance = Number(prompt("Enter your balance: "));
        const pin = Number(prompt("Enter your pin: "));
        const accountNumber = generateAccountNumber(accounts);
    const account = {
        name,
        balance,
        pin,
        accountNumber
    }
    accounts.push(account);
    console.log(account);
}

function generateAccountNumber(accounts){
    console.log("INSIDE GENERATE ACCOUNT NUMBER")
    while(true){
        let count = 0;
        console.log("Inside while");
        let number = getRandomIntInclusive(1000, 9999);
        for(i = 0; i < accounts.length; i++){
            console.log(accounts[i]);
            if(accounts[i].accountNumber == number){
                count++;
                console.log("again loop")
        }
        if(count == 0){
            console.log("generated " + number);
            return number;
        }
        
    }
}

function getRandomIntInclusive( min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

function accountLogin(accounts){
    console.log("Account Login Portal");
    const accountNumber = Number(prompt("Enter your account Number: "));
    const pin = Number(prompt("Enter you pin Number: "));
    accounts.forEach(account => {
        if(account.accountNumber == accountNumber && account.pin == pin)
            accountProtal(accountNumber, accounts);
});
console.log(accounts);
}

function accountProtal(accountNumber, accounts){
    console.log("Successfully logged IN account number: " + accountNumber);
    console.log("Select form following options:", "\n1. Account Info", "\n2. Amount Depoist", "\n3.Amount Withdraw", "\n4.Amount Transfer", "\n5.Exit");
    const option = prompt("Enter Your Option: ");

    switch(option){
        case 1:
            const account = accounts.find(account => accountNumber === accountNumber);
            console.log("\nAccount Number: " + account.accountNumber,
                "\n Account Holder Name: " + account.name,
                "\n Account Balance: " + account.balance,
            )
            break;

        case 2:
            console.log("Amount Deposit");
            break;

        case 3: 

            console.log("Amount Withdraw");
            break;

        case 4:
            console.log("Amount Transfer");
            break;
        
        case 5:
            console.log("Exit");
            break;

        
    }
}