"use strict";
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
