import multer from "multer";
import { join } from "path";

const tempDir = join(process.cwd(), "./", "temp");
const multerConfig = multer.diskStorage({
    destination: tempDir,
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

export const upload = multer({
    storage: multerConfig,
});