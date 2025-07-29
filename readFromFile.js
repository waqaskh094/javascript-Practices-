const fs = require('fs');

const data = fs.readFileSync("accounts.json", 'utf8');

const accounts = JSON.parse(data);

console.log("Account loaded back into the array: ", accounts);