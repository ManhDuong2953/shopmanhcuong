import { postToken } from "../src/models/login/Login.model";
import moment from "moment";
const jwt = require('jsonwebtoken');

export function Authentication(req, res, next) {
    const access_token = req.body.accessToken;
    const refresh_token = req.body.refreshToken;
    const idUser = req.body.data.id_user;
    const sceretKey = req.body.data.passwords;
    let dateExp;
    let accessRight;
    jwt.verify(access_token, sceretKey, (error, decode) => {
        if (error) {
            console.error('Token verification error:', error.message);
        } else {
            dateExp = moment(new Date(decode.exp * 1000)).format('YYYY-MM-DD HH:mm:ss') // In ra định dạng ISO của ngày hết hạn
            accessRight = decode.access_right
        }
    })
    console.log('Access Token:', access_token);
    console.log('Refresh Token:', refresh_token);
    console.log('User ID:', idUser);
    console.log('EXP:', dateExp);
    console.log('Access Right:', accessRight);
    res.cookie('accessToken', access_token, { maxAge: 900000, httpOnly: true });
    res.cookie('refreshToken', refresh_token, { maxAge: 900000, httpOnly: true });

    next()
}