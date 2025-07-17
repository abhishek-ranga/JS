const accountId = 177013
let accountEmail = "abhishek-ranga@github.com"
var accountPassword = "12345"
accountCity = "New Delhi"

// accountId = 2355009 // not allowed
accountEmail = "bettertextabhishek@instagram.com"
accountPassword = "0987654321"
accountCity = "Illinois"

// console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity])

/*
prefer not to use var because of issue in block scope and functional scope
*/

let accountState;
console.log(accountState);