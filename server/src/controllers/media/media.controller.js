import Media from "../../models/media/media.model";
export async function addMedia(req, res) {
    const media = req.file;
    console.log(media,123);
    // try {
    //     const insertedId = await Media.saveMedia(media);
    //     res.json({ id: insertedId });
    // } catch (error) {
    //     res.status(500).json({ error: 'Error saving media' });
    // }
}

export async function getMediaByFieldname(req, res) {
    const fieldname = req.params.fieldname;
    console.log(fieldname);
    // try {
    //     const media = await Media.getMediaByFieldname(fieldname);
    //     res.json(media);
    // } catch (error) {
    //     res.status(500).json({ error: 'Error fetching media' });
    // }
}