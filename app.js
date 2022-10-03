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
const nameCases = () => {
    let name;
    do {
        name = prompt("Enter your name please.");
    } while (name === null || name === "");
    console.log(`Your name in lower case is "${name.toLowerCase()}"`);
    console.log(`Your name in upper case is "${name.toUpperCase()}"`);
};
const famousQoute = () => {
    console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`);
};
