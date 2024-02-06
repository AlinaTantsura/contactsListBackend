const fs = require('fs/promises');

const getAll = async () => {
    const allBooks = await fs.readFile('./books.json');
    console.log(allBooks)
    // return JSON.parse(allBooks);
};

module.exports = { getAll, };