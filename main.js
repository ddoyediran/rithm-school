// importing modules
const helpers = require("./helpers"); // require to import a file
const moreHelpers = require("./moreHelpers");
const evenMoreHelpers = require("./evenMoreHelpers");
const { first, second, third } = require("./models");

helpers.sayHi();

console.log(moreHelpers.firstName);
moreHelpers.sayHello();
moreHelpers.sayGoodbye();

evenMoreHelpers(); // excuting a function
