import pool from "../../../configs/database/database.config"
export default class Media {
    constructor(mediaInfo) {
        this.id_media = mediaInfo.id_media || null;
        this.image_data = mediaInfo.image_data || null;
        this.fieldname = mediaInfo.fieldname || null;
        this.originalname = mediaInfo.originalname || null;
        this.encoding = mediaInfo.encoding || null;
        this.mimetype = mediaInfo.mimetype || null;
        this.destination = mediaInfo.destination || null;
        this.filename = mediaInfo.filename || null;
        this.path = mediaInfo.path || null;
        this.size = mediaInfo.size || null;
        this.time = mediaInfo.time || null;
        this.id_link = mediaInfo.id_link || null;
        this.classify = mediaInfo.classify || null;
    }

    async saveMedia(dataMedia) {
        try {
            const sql = 'INSERT INTO images SET ?';
    
            const [rows] = await pool.query(sql, dataMedia);
            return rows.insertId;
        } catch (error) {
            console.error('Error saving media:', error);
            throw error;
        }
    }
    

    async getMediaByFieldname(fieldname) {
        try {
            const [rows] = await this.connection.query('SELECT * FROM images WHERE fieldname = ?', [fieldname]);
            return rows;
        } catch (error) {
            console.error('Error fetching media:', error);
            throw error;
        }
    }
}
