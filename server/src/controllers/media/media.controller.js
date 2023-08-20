import Media from "../../models/media/media.model";
const path = require('path');
export async function addMedia(req, res,next) {
    const dataFile = req.file;
    console.log(req.body);
    const id = req.body.id_user || req.body.id_product;
    const classify = req.body.id_user ? "user" : req.body.id_product ? "product" : undefined;


    try {
        const media = new Media({ ...dataFile, "id_link": id, "classify": classify });
        const insertedId = await media.saveMedia();
        res.json({
            note: "Gửi thành công!",
            id: insertedId
        });
    } catch (error) {
        res.status(500).json({ error: 'Error saving media' });
    }
    next();
}

export async function getMediaByFieldname(req, res) {
    const filename = req.params.filename;
    try {
        res.sendFile(path.join(__dirname,"../../../uploads", filename));
        
    } catch (error) {
        res.status(500).json({ error: 'Error fetching media' });
    }
}