/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */


const shoes = {
    brand: 'Jordan',
    size: '11',
    style: 'Jordan 4',
    color: 'white cement'
};

const tennisBag = {
    numOfRackets: 4,
    color: "red",
    rackets: {
        babolat: {
            color: 'yellow',
            headSize: 120,
            stringType: 'hybrid'
        },
        wilson: {
            color: 'black',
            headsize: 100,
            stringType: 'hybrid'
        }
    }
}
