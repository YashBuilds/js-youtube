const accountId = 144453
let accountEmail = "yash@google.com"
var accountpassword = "12345"
accountCity = "Jaipur"

let accountState;


// accountId = 2  // not allowed

accountEmail = "hc@h.com"
accountpassword = "2134543"
accountCity = "Bengalaru"

console.log(accountId);

/*
  prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountEmail,accountpassword,accountCity,accountId,accountState])
