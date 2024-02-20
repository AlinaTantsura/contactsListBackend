const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs/promises')
const crypto = require('crypto')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'))

const tempDir = path.join(__dirname, 'temp');
const bookDir = path.join(__dirname, "public", "books");
const multerConfig = multer.diskStorage({
    destination: tempDir,
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const upload = multer({
    storage: multerConfig
})

const books = [];

app.get("/api/books", (req, res) => {
    res.json(books);
});
// upload.fields({name: 'cover', maxCount: 1}, {name: 'subcover', maxCount: 2})
// upload.array('cover', 8)
app.post("/api/books", upload.single('cover'), async (req, res) => {
    const { path: tempUpload, originalname } = req.file;
    const resultUpload = path.join(bookDir, originalname);
    await fs.rename(tempUpload, resultUpload);
    const cover = path.join('books', originalname);
    const newBook = {
        id: crypto.randomUUID(),
        ...req.body,
        cover
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

app.listen(3000)