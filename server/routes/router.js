import express from 'express';
const router = express.Router();
import MediaRouter from './Media/media.router';
import AdminRouter from './Adminstrator/Admin/admin.router';
import UserRouter from './Login/user.router';
import EmployeeRouter from './Adminstrator/Employee/employee.router';
const RouterMains = (app) => {
    MediaRouter(router)
    return app.use(EmployeeRouter(router))
}

export default RouterMains;