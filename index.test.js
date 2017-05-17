const greeter = require('./index.js');

console.log('test passed successfully');

const resOne = greeter();

if(resOne !== 'Hello, this is User!') {
	throw new Error('Greeter is default');
}

const resTwo = greeter("Srinivas");

if(resTwo !== "Hello, this is Srinivas!") {
	throw new Error('Greeter is not matching');
}