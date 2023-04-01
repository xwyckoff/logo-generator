class Shape {
    constructor(color, text) {
        this.color = color;
        this.text = text;
    }

    render() {
        throw new Error("Class must implement render method!");
    }
}

class Triangle extends Shape {
    constructor(color, text) {
        super(color, text);
    }

    render() {

    }
}

class Circle extends Shape {
    constructor(color, text) {
        super(color, text);
    }

    render() {

    }
}

class Square extends Shape {
    constructor(color, text) {
        super(color, text);
    }

    render() {

    }
}

module.exports = { Triangle, Circle, Square };