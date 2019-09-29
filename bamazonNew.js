var mysql = require("mysql");
var inquirer = require ("inquirer");
var columnify = require ("columnify");

var connectionObject ={
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1234",
    database: "bamazon",

};

var connection = mysql.createConnection(connectionObject);

connection.connect(function (err) {
    if (err) throw err;
    console.log ("Connected as ID " + connection.threadId)
    connection.end()
})

connection.query("SELECT * FROM products", function(err, data){
    if (err) {console.log(err)}
        console.log(columnify(data, {columnSplitter: "|"}));
        inquirer.prompt([
            {
                type: "input",
                name: "item_id",
                message: "What product ID would you like to buy?"
            },
            {
                type: "input",
                name: "quantity",
                message: "How many?"
                
            }

        ]).then(function(response){
        connection.query("SELECT * FROM products WHERE item_id=" + response.item_id)
        function entry (err, resp) {
            if(err) throw (err);
            console.log(resp);
            if (resp[0].stock_quantity >= response.quantity){
                console.log("This item is in stock!")
                connection.query(
                    `UPDATE products SET \`stock_quantity\`=${resp[0].stock_quantity} - ${response.quantity} WHERE \'item_id\`=${response.item_id}`,

                    function(err) {
                        if (err) {
                            console.log (err)
                        } else {
                            console.log `Your total cost is $ ${resp[0].price * response.quantity}`
                        }
                    }
                )
            }}})})
