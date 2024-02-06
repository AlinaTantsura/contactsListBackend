// console.log("Welcome, Alina. Good luck");

// const contacts = require("./contacts");
// console.log(contacts);

// const { getCurrentYear } = require('./node_start');
// const currentYear = getCurrentYear();

// const currentDay = require('./node_start').getCurrentDate();

// console.log(currentYear);
// console.log(currentDay);

// const fs = require('fs/promises');
// const fs = require('fs').promises;

// const readFile = async () => {
//     const text = await fs.readFile("./text.txt");
//     console.log(text.toString());
// };
// const addText = async () => {
//     await fs.appendFile('./text.txt', '\nYou are welcome))');
// }

// readFile();
// addText();

// const replaceText = async () => {
//     await fs.writeFile('./text.txt', "So what? You are theeee BEST!!!!")
// };

// replaceText();

const books = require('./books');

const invokeAction = async ({ action, id, title, author }) => {
    switch (action) {
        case 'read':
            const allBooks = await books.getAll();
            console.log(allBooks);
            break;
    }
};

invokeAction({action: 'read'});