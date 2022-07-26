/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */


class Racket{
    constructor(brand, color, headSize, stringType) {
        this.brand = brand;
        this.color = color;
        this.headSize = headSize;
        this.stringType = stringType;
    }

    setBrand(brand) {
        this.brand = brand;
        return this.brand;
    };

    setColor(color) {
        this.color = color;
        return this.color;
    };

    setHeadSize(headSize) {
        this.headSize = headSize;
        return this.headSize;
    };

    setStringType(stringType) {
        this.stringType = stringType;
        return this.stringType;
    };
}

const racket1 = new Racket('Wilson', 'red', 100, 'hybrid');
console.log(racket1)

// export default Racket;
