"use strict";
//My Name is Abu Hurairah. I am a MERN stack developer Saylani certified Web and Mobile app developer
/**
 * It takes no arguments and returns nothing.
 * Taking an input in prompt and showing a greeting message in console of browser
 */
const personalMessage = () => {
    let name;
    do {
        name = prompt("Enter your name please.");
    } while (name === null || name === "");
    console.log(`Assalam u Alaikum ${name}! would You like to learn some python today.`);
};
/**
 * It prompts the user for their name, and if they enter a blank or null value, it prompts them again
 * until they enter a valid name
 */
const nameCases = () => {
    let name;
    do {
        name = prompt("Enter your name please.");
    } while (name === null || name === "");
    console.log(`Your name in lower case is "${name.toLowerCase()}"`);
    console.log(`Your name in upper case is "${name.toUpperCase()}"`);
};
/**
 * The function famousQoute() is a void function that logs a famous quote to the console
 */
const famousQoute = () => {
    console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`);
};
/**
 * It asks the user to enter a famous person's name and a famous quote by that person. If the user
 * enters nothing, it asks again. Then it prints out the quote.
 */
const famousQoute2 = () => {
    let famous_person;
    do {
        famous_person = prompt("Enter the famous person name please.");
    } while (famous_person === null || famous_person === "");
    let famous_qoute;
    do {
        famous_qoute = prompt("Enter the famous of Person whose name you have entered.");
    } while (famous_qoute === null || famous_qoute === "");
    console.log(`${famous_person} once said:"${famous_qoute}"`);
};
/* Asking the user to enter their name with whitespace at the beginning and end of the name. Then it
prints the name with whitespace and without whitespace. */
const strippingName = () => {
    let username;
    do {
        username = prompt("Enter your name with whitespace at the beginning and end of the name.");
    } while (username === "" || username === null);
    console.log(`Your name with white spaces is "${username}"`);
    console.log(`Your name without white spaces is "${username.trim()}"`);
};
/* A function that takes no arguments and returns nothing. It is printing the result of some
mathematical operations in the console. And the result remains 9 */
const eightNumbers = () => {
    console.log(5 + 3);
    console.log(16 / 2);
    console.log(4 * 2);
    console.log(24 - 16);
};
/**
 * This function prompts the user to enter their favorite number, and then logs it to the console.
 */
const favoriteNumber = () => {
    let favNumber;
    do {
        favNumber = Number(prompt("Enter your favorite number."));
    } while (favNumber === null || favNumber === NaN);
    console.log(`Your favorite number is ${favNumber}`);
};
/* A function that takes no arguments and returns nothing. It is printing the names of
some people in the console. */
const names = () => {
    let names;
    names = ["Ahmad Jajja", "Zain ul Abidin", "Hassan Saeed", "Bassam Tanvir"];
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
};
/* Printing the greeting message for each name in the list of names. */
const greetingListOfFriends = () => {
    let names = [
        "Ahmad Jajja",
        "Zain ul Abidin",
        "Hassan Saeed",
        "Bassam Tanvir",
    ];
    for (let i = 0; i < names.length; i++) {
        console.log(`Assalam u Alaikum ${names[i]}! How are you?`);
    }
};
/* Printing the list of cars I want to buy in the console. */
const transportMode = () => {
    let carsList = [
        "Mercedes benz S Class",
        "Mercedes S class MayBach",
        "Rolls Royce Phantom",
        "Rolls Royce Cullinan",
        "Rolls Royce Ghost",
        "Bentlay Continental GT",
        "Range Rover Autobiography Long Wheelbase",
        "Toyota Land Cruiser",
        "Toyota Prado",
        "Lexus LX 570",
        "Audi A8L",
        "BMW 7 Series",
    ];
    for (let i = 0; i < carsList.length; i++) {
        console.log(`I am going to buy ${carsList[i]} soon Insha Allah`);
    }
};
/**
 * The function takes in an array of names and prints out a message to each of them.
 */
const invitationList = () => {
    let names = ["Ahmad Jajja", "Zain ul Abidin", "Aqeel"];
    for (let i = 0; i < names.length; i++) {
        console.log(`Assalam u Alaikum ${names[i]}! You are invited to dinner at Sariyas on my birthday.`);
    }
};
/* Printing the updated list of names in the console.Using splice method update the invitation list */
const updatedInvitationList = () => {
    let names = ["Ahmad Jajja", "Zain ul Abidin", "Aqeel"];
    names = names.splice(2, 1, "Bassam Tanvir");
    for (let i = 0; i < names.length; i++) {
        console.log(`Assalam u Alaikum ${names[i]}! You are invited to dinner at Sariyas on my birthday.`);
    }
};
/* Printing the updated list of names in the console.Using push method update the invitation list. */
const biggerInvitationList = () => {
    let names = ["Ahmad Jajja", "Zain ul Abidin", "Aqeel"];
    names.push("Hassan Saeed", "Aqeel", "Ghulam Fareed");
    for (let i = 0; i < names.length; i++) {
        console.log(`Assalam u Alaikum ${names[i]}! You are invited to dinner at Sariyas on my birthday.`);
    }
};
/* Printing the updated list of names in the console.Using pop method update the invitation list. */
const shorterInvitationList = () => {
    let names = ["Ahmad Jajja", "Zain ul Abidin", "Aqeel"];
    names.push("Hassan Saeed", "Aqeel", "Ghulam Fareed");
    names.pop();
    names.pop();
    names.pop();
    names.pop();
    for (let i = 0; i < names.length; i++) {
        console.log(`Assalam u Alaikum ${names[i]}! You are invited to dinner at Sariyas on my birthday.`);
    }
};
/* Printing the list of places in different orders. */
const placesToVisit = () => {
    let places = [
        "Saudi Arabia",
        "London",
        "Turkey",
        "Korea",
        "Chile",
        "Italy",
    ];
    let sortedPlaces = [...places];
    console.log(`In original order ${places}`);
    console.log(`In alphabetical order ${sortedPlaces.sort()}`);
    console.log(`In original order ${places}`);
    console.log(`In reverse alphabetical order ${sortedPlaces.reverse()}`);
    console.log(`In original order ${places}`);
    console.log(`In reverse order ${places.reverse()}`);
    console.log(`In original order ${places.reverse()}`);
    console.log(`In alphabetical stored order ${places.sort()}`);
    console.log(`In reverse alphabetical stored order ${places.reverse()}`);
};
/**
 * This function takes an array of names, adds four more names to the array, removes four names from
 * the array, and then prints out the number of names left in the array.
 */
const invitationListCounter = () => {
    let names = ["Ahmad Jajja", "Zain ul Abidin", "Aqeel"];
    names.push("Hassan Saeed", "Aqeel", "Ghulam Fareed");
    names.pop();
    names.pop();
    names.pop();
    names.pop();
    console.log(`You are inviting ${names.length} people to dinner.`);
};
/* Printing the list of languages in the console. */
const listOfLanguages = () => {
    let list = ["Urdu", "English", "Arabic", "Russian", "Hindi"];
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
};
/* A function that takes no arguments and returns nothing. It has a sub function which consumes 4 parameter and construct object and print it to the console */
const objectConstructor = () => {
    let car;
    /**
     * The function takes in four parameters, and returns nothing.
     * @param {string} carModel - string,
     * @param {string} carCompany - string,
     * @param {string} name - string,
     * @param {string} color - string
     * These 4 parameters are used to construct an Object
     */
    const constructor = (carModel, carCompany, name, color) => {
        car = Object.assign(Object.assign({}, car), { model: carModel, company: carCompany, name: name, color: color });
        console.log(car);
    };
    let carModel;
    let carCompany;
    let carName;
    let carColor;
    do {
        carModel = prompt(`Enter your car model ${new Date().getFullYear()}: `);
    } while (carModel === null || carModel === "");
    do {
        carCompany = prompt("Enter your car company e.g. Rolls Royce: ");
    } while (carCompany === null || carCompany === "");
    do {
        carName = prompt("Enter your car name e.g.Phantom VIII: ");
    } while (carName === null || carName === "");
    do {
        carColor = prompt("Enter your car color e.g.Pearl Black: ");
    } while (carColor === null || carColor === "");
    constructor(carModel, carCompany, carName, carColor);
};
/* A function that takes no arguments and returns nothing. It is printing the list of places in the
console.
with some intentional error and without intentional error */
const intentionalError = () => {
    let places = [
        "Pakistan",
        "Saudi Arabia",
        "United States",
        "Dubai",
        "Singapore",
    ];
    console.log("Error", places[10]);
    console.log("Corrected", places[1]);
    console.log("Error; it returns -1 which means it does not exists", places.indexOf("Turkey"));
    console.log("Corrected", places.indexOf("Saudi Arabia"));
};
/**
 * The function is used to test the conditional statements in TypeScript
 */
const conditionalTest = () => {
    // Test 1
    let car = "Phantom VIII";
    car === "Phantom VIII" ? console.log("True") : console.log("False");
    // Test 2
    let myName = "Abu Hurairah";
    myName === "Abu Bakar Siddique" ? console.log("True") : console.log("False");
    // Test 3
    myName.length === 12 ? console.log("True") : console.log("False");
    // Test 4
    let friendName = "Ahmad Jajja";
    friendName === "Ahmad Jajja" ? console.log("True") : console.log("False");
    // Test 5
    myName[3] === " " ? console.log("True") : console.log("False");
    // Test 6
    car.toUpperCase() === "pHANTOM viii"
        ? console.log("True")
        : console.log("False");
    // Test 7
    let age = 19;
    age > 18
        ? console.log("True", "You can cast vote")
        : console.log("False", "You cannot cast vote");
    // Test 8
    let isAuthenticated = false;
    isAuthenticated ? console.log("True") : console.log("False");
    //Test 9
    myName.lastIndexOf("a") === 9 ? console.log("True") : console.log("False");
    myName.length < 12 ? console.log("True") : console.log("False");
};
conditionalTest();
