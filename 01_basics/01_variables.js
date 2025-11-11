const accountId = 144553
let accountEmail = "piya@gmail.com"
var accountPassword = "12345"
accountCity = "kolkata"
let accountState;


// Prefer not to use var
// because of issue in block scope and functional scope

// accountId = 2 // not allowed

console.log(accountId);
accountEmail = "piya123@gmail.com"
accountPassword = "0101010"
accountCity = "Delhi"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);