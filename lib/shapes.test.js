const {Triangle, Square, Circle} = require("./shapes");

describe('Triangle', () => {
    it('Should return the correct triangle tag and attributes in XML when the render method is called', () => {
        let triangle = new Triangle('red', 'ABC', 'white');
        expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="red" />
<text x="150" y="130" font-size="40" text-anchor="middle" fill="white">ABC</text>`);
    })
})

describe('Square', () => {
    it('Should return the correct square tag and attributes in XML when the render method is called', () => {
        let square = new Square('red', 'ABC', 'white');
        expect(square.render()).toEqual(`<rect x="75" y="50" width="150" height="150" fill="red" />
<text x="150" y="130" font-size="40" text-anchor="middle" fill="white">ABC</text>`);
    })
})

describe('Circle', () => {
    it('Should return the correct circle tag and attributes in XML when the render method is called', () => {
        let circle = new Circle('red', 'ABC', 'white');
        expect(circle.render()).toEqual(`<circle cx="150" cy="120" r="100" fill="red" />
<text x="150" y="130" font-size="40" text-anchor="middle" fill="white">ABC</text>`)
    })
})