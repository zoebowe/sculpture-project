// Import the sculptureList array from data.js
const sculptureList = require("./data.js");

// Create an empty object to store the lengths of values
const sculptureListLengths = {};

// Loop through each sculpture object in the list
sculptureList.forEach((sculpture, index) => {
    // Create an object to store the lengths for this sculpture
    const sculptureLengths = {};

    // Loop through each key-value pair in the sculpture object
    for (let key in sculpture) {
        // Check if the value is a string (only measure string lengths)
        if (typeof sculpture[key] === "string") {
            sculptureLengths[key] = sculpture[key].length; // Store string length
        }
    }

    // Store the calculated lengths inside sculptureListLengths
    sculptureListLengths[index] = sculptureLengths;
});

// Log the final object to the console for verification
console.log(sculptureListLengths);
