const fs = require('fs');

const accounts = [
    { id: 1, name: "Waqas", balance: 1000 },
    { id: 2, name: "Ali", balance: 1500 },
    { id: 3, name: "Sara", balance: 2000 }
];


const jsonData = JSON.stringify(accounts, null, 2);

fs.writeFileSync('accounts1.json', jsonData);

console.log("file created");

const account = JSON.parse(fs.readFileSync('accounts1.json', 'utf8'));
console.log(account);