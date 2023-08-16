import express from 'express';
const routerLogin = express.Router();
const LoginRouter = (app) => {
    routerLogin.get('/login', (req, res) =>{
        res.send("Đây là trang login");
    })
    return app.use(routerLogin);
}
export default LoginRouter