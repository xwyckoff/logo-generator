const {Triangle, Square, Circle} = require("./lib/shapes");
const inquirer = require("inquirer");
const maxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
const fs = require("fs");

//function to create the SVG file given the user inputs
function createSVG({ text, textColor, color, shape }) {
    switch(shape) {
        case "Triangle": 
            generatedShape = new Triangle(color, text, textColor);
            break;
        case "Square":
            generatedShape = new Square(color, text, textColor);
            break;
        case "Circle": 
            generatedShape = new Circle(color, text, textColor);
            break;
    }
    return `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
${generatedShape.render()}
</svg>`
}
//create a new inquirer prompt that checks the length of the input
inquirer.registerPrompt('maxlength-input', maxLengthInputPrompt);

//prompt the user for each of the logo requirements
inquirer.prompt ([
    {
        //get the text to put into the shape, making sure that it is no more than 3 characters
        type: "maxlength-input",
        message: "Enter text for your logo (Max of three characters): ",
        name: "text",
        maxLength: 3
    },

    {
        type: "input",
        message: "Enter a color for your text (color keyword or hexadecimal number): ",
        name: "textColor"
    },

    {
        //get the color of the shape, can be a keyword or hexadecimal
        type: "input",
        message: "Enter the color for your shape (color keyword or hexadecimal number): ",
        name: "color"
    },

    {
        //show a list of the shapes to choose from and get whatever the user chose
        type: "list",
        message: "Select a shape",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape"
    }
])

.then((answer) => {
    fs.writeFile('output.svg', createSVG(answer), (err) => {
        if(err) console.log(err);
        console.log("SVG created!");
    })
})