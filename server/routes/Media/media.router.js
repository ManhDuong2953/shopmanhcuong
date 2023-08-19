import { addMedia, getMediaByFieldname } from "../../src/controllers/media/media.controller";
import multer from "multer";

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

export default function MediaRouter(router) {
    router.post('/media/upload', upload.single('mediaAdmin'), addMedia);
    router.get("/media/:fieldname", getMediaByFieldname);
    return router;
}