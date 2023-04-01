const {Triangle, Square, Circle} = require("./lib/shapes");
const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt ([
    {
        type: "input",
        message: "Enter text for your logo (Max of three characters): ",
        name: "text"
    }
])

.then((answer) => {
    console.log(answer.text);
})