//My Name is Abu Hurairah. I am a MERN stack developer Saylani certified Web and Mobile app developer

/**
 * It takes no arguments and returns nothing.
 * Taking an input in prompt and showing a greeting message in console of browser
 */
const personalMessage = (): void => {
  let name: string | null;
  do {
    name = prompt("Enter your name please.");
  } while (name === null || name === "");
  console.log(
    `Assalam u Alaikum ${name}! would You like to learn some python today.`
  );
};
/**
 * It prompts the user for their name, and if they enter a blank or null value, it prompts them again
 * until they enter a valid name
 */
const nameCases = (): void => {
  let name: string | null;
  do {
    name = prompt("Enter your name please.");
  } while (name === null || name === "");
  console.log(`Your name in lower case is "${name.toLowerCase()}"`);
  console.log(`Your name in upper case is "${name.toUpperCase()}"`);
};

/**
 * The function famousQoute() is a void function that logs a famous quote to the console
 */
const famousQoute = (): void => {
  console.log(
    `Albert Einstein once said, “A person who never made a mistake never tried anything new.”`
  );
};
/**
 * It asks the user to enter a famous person's name and a famous quote by that person. If the user
 * enters nothing, it asks again. Then it prints out the quote.
 */
const famousQoute2 = (): void => {
  let famous_person: string | null;
  do {
    famous_person = prompt("Enter the famous person name please.");
  } while (famous_person === null || famous_person === "");
  let famous_qoute: string | null;
  do {
    famous_qoute = prompt(
      "Enter the famous of Person whose name you have entered."
    );
  } while (famous_qoute === null || famous_qoute === "");
  console.log(`${famous_person} once said:"${famous_qoute}"`);
};
/* Asking the user to enter their name with whitespace at the beginning and end of the name. Then it
prints the name with whitespace and without whitespace. */
const strippingName = (): void => {
  let username: string | null;
  do {
    username = prompt(
      "Enter your name with whitespace at the beginning and end of the name."
    );
  } while (username === "" || username === null);
  console.log(`Your name with white spaces is "${username}"`);
  console.log(`Your name without white spaces is "${username.trim()}"`);
};

/* A function that takes no arguments and returns nothing. It is printing the result of some
mathematical operations in the console. And the result remains 9 */
const eightNumbers = (): void => {
  console.log(5 + 3);
  console.log(16 / 2);
  console.log(4 * 2);
  console.log(24 - 16);
};

/**
 * This function prompts the user to enter their favorite number, and then logs it to the console.
 */
const favoriteNumber = (): void => {
  let favNumber: number | null;
  do {
    favNumber = Number(prompt("Enter your favorite number."));
  } while (favNumber === null || favNumber === NaN);
  console.log(`Your favorite number is ${favNumber}`);
};
/* A function that takes no arguments and returns nothing. It is printing the names of
some people in the console. */
const names = (): void => {
  let names: Array<string>;
  names = ["Ahmad Jajja", "Zain ul Abidin", "Hassan Saeed", "Bassam Tanvir"];
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
};
/* Printing the greeting message for each name in the list of names. */
const greetingListOfFriends = (): void => {
  let names: Array<string> = [
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
const transportMode = (): void => {
  let carsList: Array<string> = [
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
const invitationList = (): void => {
  let names: Array<string> = ["Ahmad Jajja", "Zain ul Abidin", "Aqeel"];
  for (let i = 0; i < names.length; i++) {
    console.log(
      `Assalam u Alaikum ${names[i]}! You are invited to dinner at Sariyas on my birthday.`
    );
  }
};
/* Printing the updated list of names in the console.Using splice method update the invitation list */
const updatedInvitationList = (): void => {
  let names: Array<string> = ["Ahmad Jajja", "Zain ul Abidin", "Aqeel"];
  names = names.splice(2, 1, "Bassam Tanvir");
  for (let i = 0; i < names.length; i++) {
    console.log(
      `Assalam u Alaikum ${names[i]}! You are invited to dinner at Sariyas on my birthday.`
    );
  }
};
/* Printing the updated list of names in the console.Using push method update the invitation list. */
const biggerInvitationList = (): void => {
  let names: Array<string> = ["Ahmad Jajja", "Zain ul Abidin", "Aqeel"];
  names.push("Hassan Saeed", "Aqeel", "Ghulam Fareed");
  for (let i = 0; i < names.length; i++) {
    console.log(
      `Assalam u Alaikum ${names[i]}! You are invited to dinner at Sariyas on my birthday.`
    );
  }
};
/* Printing the updated list of names in the console.Using pop method update the invitation list. */
const shorterInvitationList = (): void => {
  let names: Array<string> = ["Ahmad Jajja", "Zain ul Abidin", "Aqeel"];
  names.push("Hassan Saeed", "Aqeel", "Ghulam Fareed");
  names.pop();
  names.pop();
  names.pop();
  names.pop();
  for (let i = 0; i < names.length; i++) {
    console.log(
      `Assalam u Alaikum ${names[i]}! You are invited to dinner at Sariyas on my birthday.`
    );
  }
};
/* Printing the list of places in different orders. */
const placesToVisit = (): void => {
  let places: Array<string> = [
    "Saudi Arabia",
    "London",
    "Turkey",
    "Korea",
    "Chile",
    "Italy",
  ];
  let sortedPlaces: Array<string> = [...places];
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
const invitationListCounter = (): void => {
  let names: Array<string> = ["Ahmad Jajja", "Zain ul Abidin", "Aqeel"];
  names.push("Hassan Saeed", "Aqeel", "Ghulam Fareed");
  names.pop();
  names.pop();
  names.pop();
  names.pop();
  console.log(`You are inviting ${names.length} people to dinner.`);
};
/* Printing the list of languages in the console. */
const listOfLanguages = (): void => {
  let list: Array<string> = ["Urdu", "English", "Arabic", "Russian", "Hindi"];
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
};
/* A function that takes no arguments and returns nothing. It has a sub function which consumes 4 parameter and construct object and print it to the console */
const objectConstructor = (): void => {
  let car: { model: string; company: string; name: string; color: string };
  /**
   * The function takes in four parameters, and returns nothing.
   * @param {string} carModel - string,
   * @param {string} carCompany - string,
   * @param {string} name - string,
   * @param {string} color - string
   * These 4 parameters are used to construct an Object
   */
  const constructor = (
    carModel: string,
    carCompany: string,
    name: string,
    color: string
  ): void => {
    car = {
      ...car,
      model: carModel,
      company: carCompany,
      name: name,
      color: color,
    };
    console.log(car);
  };
  let carModel: string | null;
  let carCompany: string | null;
  let carName: string | null;
  let carColor: string | null;
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
const intentionalError = (): void => {
  let places: Array<string> = [
    "Pakistan",
    "Saudi Arabia",
    "United States",
    "Dubai",
    "Singapore",
  ];
  console.log("Error", places[10]);
  console.log("Corrected", places[1]);
  console.log(
    "Error; it returns -1 which means it does not exists",
    places.indexOf("Turkey")
  );
  console.log("Corrected", places.indexOf("Saudi Arabia"));
};
/**
 * The function is used to test the conditional statements in TypeScript
 */
const conditionalTest = (): void => {
  // Test 1
  let car: string = "Phantom VIII";
  car === "Phantom VIII" ? console.log("True") : console.log("False");
  // Test 2
  let myName: string = "Abu Hurairah";
  myName === "Abu Bakar Siddique" ? console.log("True") : console.log("False");
  // Test 3
  myName.length === 12 ? console.log("True") : console.log("False");
  // Test 4
  let friendName: string = "Ahmad Jajja";
  friendName === "Ahmad Jajja" ? console.log("True") : console.log("False");
  // Test 5
  myName[3] === " " ? console.log("True") : console.log("False");
  // Test 6
  car.toUpperCase() === "pHANTOM viii"
    ? console.log("True")
    : console.log("False");
  // Test 7
  let age: number = 19;
  age > 18
    ? console.log("True", "You can cast vote")
    : console.log("False", "You cannot cast vote");
  // Test 8
  let isAuthenticated: boolean = false;
  isAuthenticated ? console.log("True") : console.log("False");
  //Test 9
  myName.lastIndexOf("a") === 9 ? console.log("True") : console.log("False");
  myName.length < 12 ? console.log("True") : console.log("False");
};
/* The below code is checking the age and nationality of a person and then checking if a person is in
the friends list or not. */
const moreConditionalTests = (): void => {
  let age: number = 19,
    nationality: string = "Pakistani";
  if (age > 18 && nationality === "Pakistani") {
    console.log("True");
  } else {
    console.log("False");
  }
  let friendsList: Array<string> = [
    "Ahmad Jajja",
    "Zain-ul-Abidin",
    "Chaudary Bassam Tanvir",
    "Hassan Saeed",
  ];
  if (friendsList.includes("Awais")) {
    console.log("True");
  } else {
    console.log("False");
  }
  if (friendsList.includes("Ahmad Jajja")) {
    console.log("True");
  } else {
    console.log("False");
  }
};
/**
 * If the alien_color is green, then log "You have got 5 points" to the console
 */
const alienColor1 = (): void => {
  let alien_color = "green";
  // if version
  alien_color === "green" && console.log("You have got 5 points");
  // nothing printing version
  alien_color === "red" && console.log("You have got 5 points");
};
/**
 * If the alien color is green, you get 5 points, otherwise you get 10 points. If the alien color is
 * red, you get 5 points, otherwise you get 10 points.
 */
const alienColor2 = (): void => {
  let alien_color = "red";
  // else vesion
  if (alien_color === "green") {
    console.log("You have got 5 points");
  } else {
    console.log("You have got 10 points");
  }
  // if version
  if (alien_color === "red") {
    console.log("You have got 5 points");
  } else {
    console.log("You have got 10 points");
  }
};
/**
 * The function alienColor3() is a TypeScript function that has three versions of the same code, each
 * version has a different value for the variable alien_color.
 */
const alienColor3 = (): void => {
  {
    // Version 1
    let alien_color = "green";
    if (alien_color === "green") {
      console.log("You have got 5 points");
    } else if (alien_color === "red") {
      console.log("You have got 10 points");
    } else if (alien_color === "yellow") {
      console.log("You have got 15 points");
    }
  }
  {
    // Version 2
    let alien_color = "yellow";
    if (alien_color === "green") {
      console.log("You have got 5 points");
    } else if (alien_color === "red") {
      console.log("You have got 10 points");
    } else if (alien_color === "yellow") {
      console.log("You have got 15 points");
    }
  }
  {
    // Version 3
    let alien_color = "red";
    if (alien_color === "green") {
      console.log("You have got 5 points");
    } else if (alien_color === "red") {
      console.log("You have got 10 points");
    } else if (alien_color === "yellow") {
      console.log("You have got 15 points");
    }
  }
};
/* The above code is asking the user to enter their age in years. Then it is checking the age and
printing the life stage of the user. */
const lifeStages = (): void => {
  let age: number | null;
  do {
    age = Number(prompt("Enter your age in years :"));
  } while (age === null || age === NaN);
  if (age < 2) {
    console.log("You are a baby");
  } else if (age > 1 && age < 4) {
    console.log("You are a toddler");
  } else if (age > 3 && age < 13) {
    console.log("You are a Kid");
  } else if (age > 12 && age < 20) {
    console.log("You are a teenager");
  } else if (age > 19 && age < 65) {
    console.log("You are an adult.");
  } else if (age > 64) {
    console.log("You are old.");
  } else {
    console.error("You have entered an invalid age");
  }
};
const favoriteFruits = (): void => {
  let favorite_fruits: Array<string> = ["Banana", "Apple", "Mangoes", "Orange"];
  if (favorite_fruits.includes("Banana")) {
    console.log(`You really like bananas`);
  }
  if (favorite_fruits.includes("Water Melon")) {
    console.log(`You really like Water Melon`);
  }
  if (favorite_fruits.includes("Apricot")) {
    console.log(`You really like Apricot`);
  }
  if (favorite_fruits.includes("Mangoes")) {
    console.log(`You really like Mangoes`);
  }
  if (favorite_fruits.includes("Orange")) {
    console.log(`You really like Oranges`);
  }
  if (favorite_fruits.includes("Apple")) {
    console.log(`You really like Apples`);
  }
};
/* The above code is checking if the user is authenticated or not.If the authenticated user is admin it show different message and for normal user it shows different message */
const helloWorld = (): void => {
  let isAuthenticated: boolean = false;
  let usernames: Array<string> = [
    "admin",
    "Abu Hurairah",
    "Ahmad Jajja",
    "Zain ul Abidin",
    "Hassan Saeed",
  ];
  let currentUser: string | null;
  do {
    currentUser = prompt("Enter You Username");
  } while (currentUser === null && currentUser === "");
  for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === currentUser) {
      isAuthenticated = true;
      if (currentUser === "admin") {
        console.log(
          "Assalam u Alaikum Admin! Would you like to see status report."
        );
        break;
      }
      console.log(
        `Assalam u Alaikum ${usernames[i]}! Thank you for logging in again.`
      );
      break;
    }
  }
};
/**
 * If the length of the usernames array is equal to 0, print out 'We need to find some users!'.
 */
const noUsers = (): void => {
  let usernames: Array<string> = [];
  if (usernames.length === 0) {
    console.log("We need to find some users!");
  }
};
/* The above code is checking if the username is available or not. */
const checkingUserNames = (): void => {
  let isUserNameNotAvailable: boolean = false;
  let current_users: Array<string> = [
    "abuhurairah127",
    "hassansaeed123",
    "ahmadJajja786",
    "zainiii81",
    "ziakhan",
    "daniyalnaghori",
  ];
  let newUserName: string | null;
  do {
    newUserName = prompt("Enter your username: ");
  } while (newUserName === null || newUserName.length === 0);
  for (let i = 0; i < current_users.length; i++) {
    if (current_users[i] === newUserName) {
      console.log("User already exists");
      isUserNameNotAvailable = true;
      break;
    }
  }
  if (!isUserNameNotAvailable) {
    console.log(`${newUserName}is available.`);
  }
};
/* Printing out the ordinal numbers of the array. */
const ordinalNumbers = (): void => {
  let numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      console.log("1st");
    } else if (i === 1) {
      console.log("2nd");
    } else if (i === 2) {
      console.log("3rd");
    } else {
      console.log(`${numbers[i]}th`);
    }
  }
};
/**
 * It takes no arguments and returns nothing.
 */
const pizzaStatements = (): void => {
  let pizza_flavours: Array<string> = ["Fajita", "Malai Boti", "Chicken Tikka"];
  for (let i = 0; i < pizza_flavours.length; i++) {
    console.log(`I like to eat ${pizza_flavours[i]} pizza🍕.`);
  }
};
/**
 * This function creates an array of animals, loops through the array and prints each animal, then
 * loops through the array again and prints a sentence about each animal, then prints a final sentence.
 */
const animalCharacteristics = (): void => {
  let animals: Array<string> = ["Dog", "Cat", "Parrot"];
  for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
  }
  for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} is a great pet.`);
  }
  console.log("Any one of these can be great pet.");
};
/**
 * The function takes in two parameters, size and message, and prints a message on the console.
 */
const shirt = (): void => {
  const make_shirt = (size: number, message: string): void => {
    console.log(
      `The size of shirt is ${size} and the message to be printed on the t shirt is ${message}`
    );
  };
  let sizeOfShirt: number | null;
  let message: string | null;
  do {
    sizeOfShirt = Number(prompt("Enter the size of shirt in number :"));
  } while (sizeOfShirt === null || sizeOfShirt === 0 || sizeOfShirt === NaN);
  do {
    message = prompt("Enter the message you want to print on your T- shirt");
  } while (message === null || message === "");
  make_shirt(sizeOfShirt, message);
};
/**
 * The function largeShirt() is a function that prints out a message to the console with different sizes of Shirts
 */
const largeShirt = (): void => {
  console.log(
    `The size of shirt is Large and message to be printed on your T- shirt is "I Love to Code"`
  );
  console.log(
    `The size of shirt is Large and message to be printed on your T- shirt is 'import {Ahmad Jajja} from "friendsList"'`
  );
  console.log(
    `The size of shirt is Medium and message to be printed on your T- shirt is 'import {Ahmad Jajja} from "friendsList"'`
  );
  console.log(
    `The size of shirt is XL and message to be printed on your T- shirt is 'export default Distractions'`
  );
};
/**
 * It prompts the user for an artist name and album name, and then returns an object with the artist
 * name and album name as properties.
 */
const music = (): void => {
  const music_album = (artistName: string, albumTitle: string): object => {
    let music: { artistName: string; albumTitle: string } = {
      artistName: artistName,
      albumTitle: albumTitle,
    };
    return music;
  };
  let currentArtistName: string | null;
  let currentAlbumName: string | null;
  do {
    currentArtistName = prompt("Enter artist name: ");
  } while (currentArtistName === null || currentArtistName === "");
  do {
    currentAlbumName = prompt("Enter album name: ");
  } while (currentAlbumName === null || currentAlbumName === "");
  console.log(music_album(currentArtistName, currentAlbumName));
};
/**
 * The function show_magicians() takes an array of strings as an argument and prints each string in the
 * array.
 */
const magicians = (): void => {
  const show_magicians = (magiciansList: Array<string>): void => {
    for (let i = 0; i < magiciansList.length; i++) {
      console.log(magiciansList[i]);
    }
  };
  let magicians: Array<string> = [
    "Ahmad Jajja",
    "Zain ul Abidin",
    "Abu Hurairah",
  ];
  show_magicians(magicians);
};
/**
 * It takes an array of magicians, and then it prints the magicians, and then it prints the magicians
 * again, but with the word "Great" in front of each magician's name.
 */
const greatMagicians = (): void => {
  const show_magicians = (magiciansList: Array<string>): void => {
    for (let i = 0; i < magiciansList.length; i++) {
      console.log(magiciansList[i]);
    }
  };
  let magicians: Array<string> = [
    "Ahmad Jajja",
    "Zain ul Abidin",
    "Abu Hurairah",
  ];
  show_magicians(magicians);
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `Great ${magicians[i]}`;
  }
  show_magicians(magicians);
};
/**
 * The function show_magicians() takes an array of strings as an argument and returns an array of
 * strings with the word 'Great' added to the beginning of each string.
 */
const unchangedMagicians = (): void => {
  const show_magicians = (magiciansList: Array<string>): Array<string> => {
    for (let i = 0; i < magiciansList.length; i++) {
      magiciansList[i] = `Great ${magiciansList[i]}`;
    }
    return magiciansList;
  };
  let magicians: Array<string> = [
    "Ahmad Jajja",
    "Zain ul Abidin",
    "Abu Hurairah",
  ];
  let greatMagicians: Array<string> = [...magicians];
  console.log(show_magicians(greatMagicians));
  console.log(magicians);
};
/**
 * The function takes an array of strings as an argument and returns a string.
 */
const sandwiches = (): void => {
  const sandwichItems = (sandwichToppings: Array<string>): void => {
    console.log(
      `I want to have these toppings on my sandwich ${sandwichToppings}`
    );
  };
  let sandwichToppings1: Array<string> = [
    "Tomato Sauce",
    "White Sauce",
    "Mayonnaise",
  ];
  let sandwichToppings2: Array<string> = ["White Sauce", "Mayonnaise"];
  let sandwichToppings3: Array<string> = [
    "Tomato Sauce",
    "White Sauce",
    "Mayonnaise",
    "Chilli Sauce",
  ];
  sandwichItems(sandwichToppings1);
  sandwichItems(sandwichToppings2);
  sandwichItems(sandwichToppings3);
};
const cars = (): void => {
  const carDetails = (
    manufacturer: string,
    carModel: string,
    color?: string,
    seats?: string
  ): Object => {
    let carDetails: Object = {
      manufacturer: manufacturer,
      carModel: carModel,
    };
    if (color !== "") {
      carDetails = { ...carDetails, color: color };
    }
    if (seats !== "") {
      carDetails = { ...carDetails, seats: seats };
    }
    return carDetails;
  };
  let carManufacturer, model, carColor, seatsInCar;
  do {
    carManufacturer = prompt("Enter your car manufacturer: ");
  } while (carManufacturer === null);
  do {
    model = prompt("Enter your car model: ");
  } while (model === null);
  do {
    carColor = prompt("Enter your car car color: ");
  } while (carColor === null);
  do {
    seatsInCar = prompt("Enter the number of seats in your car: ");
  } while (seatsInCar === null);
  console.log(carDetails(carManufacturer, model, carColor, seatsInCar));
};
cars();
