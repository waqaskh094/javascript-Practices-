const fs = require('fs');

const users = [
  { id: 1, name: "Amina", age: 25, email: "amina@example.com" },
  { id: 2, name: "Zain", age: 30, email: "zain@example.com" },
  { id: 3, name: "Hassan", age: 22, email: "hassan@example.com" },
  { id: 4, name: "Sara", age: 28, email: "sara@example.com" },
  { id: 5, name: "Bilal", age: 35, email: "bilal@example.com" }
];


const jsonData = JSON.stringify(users, null, 2);

fs.writeFileSync("users.json", jsonData);
console.log("done");