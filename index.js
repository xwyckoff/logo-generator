const {Triangle, Square, Circle} = require("./lib/shapes");
const inquirer = require("inquirer");
const maxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
const fs = require("fs");

inquirer.registerPrompt('maxlength-input', maxLengthInputPrompt);

inquirer.prompt ([
    {
        type: "maxlength-input",
        message: "Enter text for your logo (Max of three characters): ",
        name: "text",
        maxLength: 3
    }
])

.then((answer) => {
    console.log(answer.text);
})