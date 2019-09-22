var mysql = require("mysql");
var inquirer = require ("inquirer");
var columnify = require ("columnify");

var connectionObject = mysql.createConnection({
    host: "localhost",
    port: 3006,
    user: "root",
    password: "1234",
    database: "bamazon",

});

var connection = mysql.createConnection(connectionObject);

connection.connect(function (err) {
    if (err) throw err;
    console.log ("Connected as ID " + connection.threadId)
    connection.end()
})

function start() {
    inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "Enter the product ID",

        },
        {
            type: "input",
            name: "units",
            message: "How many would you like?",
                validate: function (input){
                    return !(isNaN(parseFloat(input))); 
                }
        }
    ]).then(function (response) {
        connection.query(
            "INSERT INTO items SET ?",
            {
                item: response.itemName,
                price: response.itemPrice
            },
            function(err, resp) {
                if (err) throw err;
                console.log(resp);
                startApp();
            }
        )
    })
}
