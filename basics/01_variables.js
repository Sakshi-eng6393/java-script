const accountId = 144533
let accountEmail="sakshi@gmail.com"
var accountPassword="12345"
accountCity="jaipur"
let accountState;

//accountId=2// not allowed

accountEmail="abc@gamil.com"
accountPassword="12345678"
accountCity="Bengaluru"

console.log(accountId);

/*
Prefer not to use var 
beacuse of issue in block scope and function scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
