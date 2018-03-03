var mysql = require('mysql');
var inquirer = require('inquirer');

require('dotenv').config();

var con = mysql.createConnection({

	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME

});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
});
//prompts user for inputs and validates if quantity is a number
function start() {
	inquirer
	.prompt([
	{
		name: "productId",
		type: "input",
		message: "What product would you like to buy?"
	},
	{
		name:"quantity",
		type: "input",
		message: "How much would you like to buy?",
		validate: function(value) {
			if (isNaN(value) === false) {
				return true;
			}
			return false;
		}
	}
		]).then(function(answer) {
	console.log(result);
});
}

start();

//shows products in table in sql database
connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    console.table(result);
});
//still need to validate quantity in database
