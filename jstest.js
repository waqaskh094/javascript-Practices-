const fs = require('fs');
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


// we have to convert array into json data first

const jsonData = JSON.stringify(accounts, null, 2);  // null, 2 are for pretty formatting 

fs.writeFileSync('accounts.json', jsonData);

console.log("File saved");