# Homework Assignment: JavaScript Object Manipulation with Node.js

## 🎯 Objective
This project processes a list of objects and creates a new object where each key's value is replaced with the length of the original string.

## 📂 Files Included
- `sculptureScript.js` (Processes the data)
- `data.js` (Contains the sculpture list)
- `readme.md` (This file)

## 🔧 How to Run the Script
1. Open the terminal and navigate to the project folder:
   ```sh
   cd sculpture-project

## 🖥️ How the Script Works
The script loops through an array of sculpture objects (`sculptureList`) and creates a new object, `sculptureListLengths`, where each key contains the length of the corresponding string values from the original object.

The steps of the script:
1. Import `sculptureList` from `data.js`
2. Create an empty object `sculptureListLengths`
3. Loop through `sculptureList` and count the number of characters for each property (e.g., `name`, `artist`, `description`, etc.)
4. Store these lengths inside `sculptureListLengths`
5. Log the final `sculptureListLengths` object to the console.

## ✅ Expected Output (`sculptureListLengths` Object)
After running the script, the output should be:

```json
{
  "0": { "name": 26, "artist": 20, "description": 198, "url": 31, "alt": 90 },
  "1": { "name": 17, "artist": 16, "description": 187, "url": 31, "alt": 71 }
}
