
export function Authentication(req, res, next) {
    const access_token = req.body.accessToken;
    const refresh_token = req.body.refreshToken;
    res.cookie('accessToken', access_token, { maxAge: 900000, httpOnly: true });
    res.cookie('refreshToken', refresh_token, { maxAge: 900000, httpOnly: true });


    next()
}